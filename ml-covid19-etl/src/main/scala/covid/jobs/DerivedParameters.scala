package covid.jobs

import covid.configs.DerivedParametersConfig
import org.apache.spark.sql.functions.{coalesce, col, date_add, lit, regexp_replace, to_date}
import org.apache.spark.sql.{DataFrame, SaveMode, SparkSession}
import scopt.OParser

object DerivedParameters extends SparkJob[DerivedParametersConfig] {
  override val name: String = "derived-parameters"

  override def parse(args: Array[String]): DerivedParametersConfig = {
    val builder = OParser.builder[DerivedParametersConfig]
    import builder._
    val parser = OParser.sequence(
      programName(name))

    OParser.parse(parser, args, DerivedParametersConfig()) match {
      case Some(config) => config
      case None => throw new IllegalArgumentException("invalid arguments for job")
    }
  }

  override def run(spark: SparkSession, config: DerivedParametersConfig): Unit = {
    val rawDF = spark.sql("SELECT * FROM layer_raw")
    val typedDF = castTypes(spark, rawDF)
    val derivedDF = transform(spark, typedDF)
    derivedDF.write.format("orc").mode(SaveMode.Overwrite).saveAsTable("layer_mart")
  }

  def castTypes(spark: SparkSession, untyped: DataFrame): DataFrame = {
    import spark.implicits._

    def colCastToInt(name: String) = coalesce(col(name).cast("int"), lit(0)).as(name)

    untyped.select(
      to_date(regexp_replace($"date", "[\n\r]", ""), "dd-MM-yyyy").as("date") ,
      colCastToInt("overall_cases"),
      colCastToInt("previous_day_cases"),
      colCastToInt("recovered_people"),
      colCastToInt("diseased_people"),
      colCastToInt("tests_performed_more_than")
    )
  }

    def transform(spark: SparkSession, raw: DataFrame): DataFrame = {
      import spark.implicits._

      def diffColumn(name: String) = {
        val now = s"now.$name"
        val past = s"past.$name"
        val colName = s"previous_day_$name"
        (col(now) - coalesce(col(past), lit(0))).as(colName)
      }

      raw.as("now")
        .join(
          raw.as("past"),
          $"now.date" === date_add($"past.date", 1),
          "left_outer")
        .select(
          $"now.date",
          $"now.overall_cases",
          $"now.previous_day_cases",
          $"now.recovered_people",
          diffColumn("recovered_people"),
          $"now.diseased_people",
          diffColumn("diseased_people"),
          $"now.tests_performed_more_than",
          diffColumn("tests_performed_more_than")
        )
    }

}

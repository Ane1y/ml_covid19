package covid.jobs

import covid.configs.ExportDataConfig
import org.apache.spark.sql.{SaveMode, SparkSession}
import org.apache.spark.sql.functions.current_date
import scopt.OParser

import java.util.Properties

object ExportData extends SparkJob[ExportDataConfig] {
  val name: String = "export-data"

  def parse(args: Array[String]): ExportDataConfig = {
    val builder = OParser.builder[ExportDataConfig]
    import builder._
    val parser = OParser.sequence(
      programName(name),
      opt[String]("db-url")
        .required()
        .action((x, c) => c.copy(dbURL = x))
        .text("db-url is url for db connection"),
      opt[String]("user")
        .required()
        .action((x, c) => c.copy(user = x))
        .text("user is username fo db"),
      opt[String]("password")
        .required()
        .action((x, c) => c.copy(password = x))
        .text("password is password for db"),
      opt[String]("table")
        .required()
        .action((x, c) => c.copy(table = x))
        .text("table in db"))

    OParser.parse(parser, args, ExportDataConfig()) match {
      case Some(config) => config
      case None => throw new IllegalArgumentException("invalid arguments for job")
    }
  }

  def run(spark: SparkSession, conf: ExportDataConfig): Unit = {
    val martDF = spark.sql("SELECT * FROM layer_mart")
    val withDate = martDF.withColumn("updated_at", current_date())

    val properties = new Properties()
    properties.setProperty("user", conf.user)
    properties.setProperty("password", conf.password)
    properties.setProperty("driver", "org.postgresql.Driver")

    withDate.write.mode(SaveMode.Overwrite).jdbc(s"jdbc:${conf.dbURL}", conf.table, properties)
  }
}

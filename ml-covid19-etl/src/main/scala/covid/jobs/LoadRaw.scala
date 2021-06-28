package covid.jobs

import covid.configs.LoadRawConfig
import org.apache.spark.sql.{SaveMode, SparkSession}
import scopt.OParser

object LoadRaw extends SparkJob[LoadRawConfig] {
  override val name: String = "load-raw"

  override def parse(args: Array[String]): LoadRawConfig = {
    val builder = OParser.builder[LoadRawConfig]
    import builder._
    val parser = OParser.sequence(
      programName(name),
      opt[String]("source")
        .required()
        .action((x, c) => c.copy(source = x))
        .text("source is path to source csv"))

    OParser.parse(parser, args, LoadRawConfig()) match {
      case Some(config) => config
      case None => throw new IllegalArgumentException("invalid arguments for job")
    }
  }

  override def run(spark: SparkSession, conf: LoadRawConfig): Unit = {
    val csvDF = spark.read
      .option("sep", ",")
      .option("lineSep", ";")
      .option("mode", "DROPMALFORMED")
      .option("header", "true")
      .csv(conf.source)

    csvDF.write.format("orc").mode(SaveMode.Overwrite).saveAsTable("layer_raw")
  }
}

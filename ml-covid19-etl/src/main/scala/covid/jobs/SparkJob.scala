package covid.jobs

import org.apache.spark.sql.SparkSession

trait SparkJob[T] {
  val name: String

  def main(args: Array[String]): Unit = {
    val spark = SparkSession.builder()
      .appName(name)
      .enableHiveSupport()
      .getOrCreate()

    val conf  = parse(args)

    run(spark, conf)
    spark.stop()
  }

  def parse(args: Array[String]): T

  def run(spark: SparkSession, conf: T)
}

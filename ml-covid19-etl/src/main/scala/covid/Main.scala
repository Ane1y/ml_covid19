package covid

import org.apache.spark.sql.SparkSession

object Main extends App {
  val spark = SparkSession.builder()
    .appName("covid19")
    .master("local")
    .getOrCreate()

  import spark.implicits._

  val data = List(
    ("2021-02-19", 111266339, 2462991, 86519281),
    ("2021-02-20", 111639797, 2471484, 86840673),
    ("2021-02-21", 111848738, 2475730, 87214414)
  )

  val df = data.toDF("date", "cases", "deaths", "recovered")

  df.show()
}

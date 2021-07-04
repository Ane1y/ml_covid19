name := "ml-covid19-spark-etl"
scalaVersion := "2.12.14"

val sparkVersion = "3.1.2"

libraryDependencies ++= Seq(
  "org.apache.spark" %% "spark-core" % sparkVersion % Provided,
  "org.apache.spark" %% "spark-sql" % sparkVersion % Provided,
  "com.github.scopt" %% "scopt" % "4.0.1",
  "org.postgresql" % "postgresql" % "42.2.22"
)

assembly / assemblyJarName := "sparkJobs.jar"

assembly / assemblyMergeStrategy := {
  case PathList("javax", "inject", _*) => MergeStrategy.last
  case PathList("org", "apache", _*) => MergeStrategy.last
  case PathList("org", "aopalliance", _*) => MergeStrategy.last
  case PathList("mime.types") => MergeStrategy.last
  case x =>
    val oldStrategy = (assemblyMergeStrategy in assembly).value
    oldStrategy(x)
}

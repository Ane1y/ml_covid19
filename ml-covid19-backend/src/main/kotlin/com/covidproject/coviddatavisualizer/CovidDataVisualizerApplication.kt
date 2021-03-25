package com.covidproject.coviddatavisualizer

import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.runApplication

@SpringBootApplication
class CovidDataVisualizerApplication

fun main(args: Array<String>) {
    runApplication<CovidDataVisualizerApplication>(*args)
}

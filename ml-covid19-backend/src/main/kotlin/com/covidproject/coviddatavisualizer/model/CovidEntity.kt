package com.covidproject.coviddatavisualizer.model

import java.util.*
import javax.persistence.*

@Entity
@Table(name = "covid_data")
class CovidData(
        val date: Date,
        val overallCases: Int,
        val previousDayCases: Int,
        val recovered: Int,
        val previousDayRecoveredPeople: Int,
        val dead: Int,
        val previousDayDiseasedPeople: Int,
        val previousDayTestsPerformedMoreThan: Int,
        val updatedAt: Date
) {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private var id: Int? = null
}

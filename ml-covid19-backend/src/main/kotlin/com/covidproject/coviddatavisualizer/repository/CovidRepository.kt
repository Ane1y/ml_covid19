package com.covidproject.coviddatavisualizer.repository

import com.covidproject.coviddatavisualizer.model.CovidData
import com.covidproject.coviddatavisualizer.repository.dto.CountWithDate
import org.springframework.data.jpa.repository.Query
import org.springframework.data.repository.CrudRepository
import org.springframework.data.repository.query.Param
import org.springframework.stereotype.Repository
import java.util.*

@Repository
interface CovidRepository : CrudRepository<CovidData, Int>{
    @Query("SELECT SUM(c.previousDayCases) FROM CovidData c")
    fun getOverallCases(): Long

    @Query("SELECT SUM(c.previousDayCases) FROM CovidData c WHERE c.date >= :start AND c.date <= :end")
    fun getOverallCasesCount(@Param("start") start: Date,
                             @Param("end") end: Date): Long

    @Query("SELECT c.date as date, c.previousDayCases AS count " +
            "FROM CovidData c " +
            "WHERE c.date >= :start AND c.date <= :end " +
            "ORDER BY c.date")
    fun getOverallCases(@Param("start") start: Date,
                        @Param("end") end: Date): List<CountWithDate>

    @Query("SELECT SUM(c.previousDayRecoveredPeople) FROM CovidData c")
    fun getRecovered(): Long

    @Query("SELECT SUM(c.previousDayRecoveredPeople) FROM CovidData c WHERE c.date >= :start AND c.date <= :end")
    fun getRecoveredCount(@Param("start") start: Date,
                             @Param("end") end: Date): Long

    @Query("SELECT c.date as date, c.previousDayRecoveredPeople AS count " +
            "FROM CovidData c " +
            "WHERE c.date >= :start AND c.date <= :end " +
            "ORDER BY c.date")
    fun getRecovered(@Param("start") start: Date,
                        @Param("end") end: Date): List<CountWithDate>

    @Query("SELECT SUM(c.previousDayDiseasedPeople) FROM CovidData c")
    fun getDead(): Long

    @Query("SELECT SUM(c.previousDayDiseasedPeople) FROM CovidData c WHERE c.date >= :start AND c.date <= :end")
    fun getDeadCount(@Param("start") start: Date,
                          @Param("end") end: Date): Long

    @Query("SELECT c.date as date, c.previousDayDiseasedPeople AS count " +
            "FROM CovidData c " +
            "WHERE c.date >= :start AND c.date <= :end " +
            "ORDER BY c.date")
    fun getDead(@Param("start") start: Date,
                     @Param("end") end: Date): List<CountWithDate>

    @Query("SELECT SUM(c.previousDayTestsPerformedMoreThan) FROM CovidData c")
    fun getTestCount(): Long

    @Query("SELECT MAX(c.date) FROM CovidData c")
    fun getDate(): Date
}

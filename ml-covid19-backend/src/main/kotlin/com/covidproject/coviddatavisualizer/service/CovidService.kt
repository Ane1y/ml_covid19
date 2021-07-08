package com.covidproject.coviddatavisualizer.service

import com.covidproject.coviddatavisualizer.repository.CovidRepository
import com.covidproject.coviddatavisualizer.service.models.CountWithDateResponse
import org.springframework.stereotype.Service
import java.util.*

@Service
class CovidService(val db: CovidRepository) {

    fun getOverallCases(): Long = db.getOverallCases()

    fun getRecovered(): Long = db.getRecovered()

    fun getDead(): Long = db.getDead()

    fun getTestCount(): Long = db.getTestCount()

    fun getDate(): Date = db.getDate()

    fun getOverallCases(startDate: Date, endDate: Date): CountWithDateResponse {
        return CountWithDateResponse(startDate,
                endDate,
                db.getOverallCasesCount(startDate, endDate),
                db.getOverallCases(startDate, endDate))
    }

    fun getRecovered(startDate: Date, endDate: Date): CountWithDateResponse {
        return CountWithDateResponse(startDate,
                endDate,
                db.getRecoveredCount(startDate, endDate),
                db.getRecovered(startDate, endDate))
    }

    fun getDead(startDate: Date, endDate: Date): CountWithDateResponse {
        return CountWithDateResponse(startDate,
                endDate,
                db.getDeadCount(startDate, endDate),
                db.getDead(startDate, endDate))
    }
}

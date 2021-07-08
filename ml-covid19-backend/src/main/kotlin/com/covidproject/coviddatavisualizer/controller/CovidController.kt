package com.covidproject.coviddatavisualizer.controller

import com.covidproject.coviddatavisualizer.controller.models.SingleResponse
import com.covidproject.coviddatavisualizer.service.CovidService
import com.covidproject.coviddatavisualizer.service.models.CountWithDateResponse
import org.springframework.format.annotation.DateTimeFormat
import org.springframework.web.bind.annotation.*
import java.util.*

@CrossOrigin("*")
@RestController
@RequestMapping("/covidInfo")
class CovidController(val service: CovidService) {

    @GetMapping("/overallCasesCount")
    fun overallCases(): SingleResponse<Long> = SingleResponse(service.getOverallCases())

    @GetMapping("/overallCasesWithPeriod")
    fun overallCases(
            @RequestParam @DateTimeFormat(pattern = "yyyy-MM-dd") start: Date,
            @RequestParam @DateTimeFormat(pattern = "yyyy-MM-dd") end: Date): CountWithDateResponse = service.getOverallCases(start, end)

    @GetMapping("/recovered")
    fun recovered(): SingleResponse<Long> = SingleResponse(service.getRecovered())

    @GetMapping("/recoveredWithPeriod")
    fun recovered(
            @RequestParam @DateTimeFormat(pattern = "yyyy-MM-dd") start: Date,
            @RequestParam @DateTimeFormat(pattern = "yyyy-MM-dd") end: Date): CountWithDateResponse = service.getRecovered(start, end)

    @GetMapping("/dead")
    fun dead(): SingleResponse<Long> = SingleResponse(service.getDead())

    @GetMapping("/deadWithPeriod")
    fun dead(
            @RequestParam @DateTimeFormat(pattern = "yyyy-MM-dd") start: Date,
            @RequestParam @DateTimeFormat(pattern = "yyyy-MM-dd") end: Date): CountWithDateResponse = service.getDead(start, end)
}

package com.covidproject.coviddatavisualizer.service.models

import com.covidproject.coviddatavisualizer.repository.dto.CountWithDate
import java.util.*

class CountWithDateResponse(
        val dateStart: Date,
        val dateEnd: Date,
        val amount: Long,
        val data: List<CountWithDate>)

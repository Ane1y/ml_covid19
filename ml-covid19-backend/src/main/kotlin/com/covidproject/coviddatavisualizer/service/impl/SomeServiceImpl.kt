package com.covidproject.coviddatavisualizer.service.impl

import com.covidproject.coviddatavisualizer.repository.SomeRepository
import com.covidproject.coviddatavisualizer.service.SomeService
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.stereotype.Service

@Service
class SomeServiceImpl : SomeService {
    @Autowired
    private lateinit var someRepo : SomeRepository

    override fun someServiceLogic(parameter: Int): Int {
        return 1
    }
}

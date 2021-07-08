package com.covidproject.coviddatavisualizer.controller

import com.covidproject.coviddatavisualizer.service.impl.SomeServiceImpl
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RestController

@RestController
class SomeController {
    @Autowired
    lateinit var someService : SomeServiceImpl

    @GetMapping("/some_endpoint")
    fun someEndpoint(): String {
        return "Some endpoint" + someService.someServiceLogic(1)
    }
}

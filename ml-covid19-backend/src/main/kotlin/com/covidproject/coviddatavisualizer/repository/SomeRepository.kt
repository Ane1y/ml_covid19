package com.covidproject.coviddatavisualizer.repository

import com.covidproject.coviddatavisualizer.model.User
import org.springframework.data.repository.CrudRepository
import org.springframework.stereotype.Repository

@Repository
interface SomeRepository : CrudRepository<User, Int>

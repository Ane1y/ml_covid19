import {CovidDataAction, CovidDataTypes} from "../../types/covidData"
import {Dispatch} from "redux"
import {Moment} from "moment";
// import axios from "axios";

export const fetchOverallCases = () => {
    return async (dispatch: Dispatch<CovidDataAction>) => {
        try {
            // const response = await axios.get("")
            // dispatch({type: CovidDataTypes.FETCH_OVERALL_CASES, payload: response.data})

            //for test:
            setTimeout(() => {
                dispatch({type: CovidDataTypes.FETCH_OVERALL_CASES, payload: 5514599})
            }, 2000)
        } catch (e) {
            console.log(e);
            dispatch({type: CovidDataTypes.FETCH_OVERALL_CASES, payload: 0})
        }
    }
}

export const fetchOverallCasesForDay = () => {
    return async (dispatch: Dispatch<CovidDataAction>) => {
        try {
            // const response = await axios.get("")
            // dispatch({type: CovidDataTypes.FETCH_OVERALL_CASES, payload: response.data})

            //for test:
            setTimeout(() => {
                dispatch({type: CovidDataTypes.FETCH_OVERALL_CASES_FOR_DAY, payload: 21042})
            }, 2000)
        } catch (e) {
            console.log(e);
            dispatch({type: CovidDataTypes.FETCH_OVERALL_CASES_FOR_DAY, payload: 0})
        }
    }
}

export const fetchOverallCasesForDate = (startDate: Moment, endDate: Moment) => {
    return async (dispatch: Dispatch<CovidDataAction>) => {
        try {
            dispatch({
                type: CovidDataTypes.FETCH_OVERALL_CASES_FOR_DATE,
                payload: {
                    data: [],
                    startDate: startDate,
                    endDate: endDate,
                    loading: true
                }
            })
            // const response = await axios.get("")
            // dispatch({type: CovidDataTypes.FETCH_OVERALL_CASES, payload: response.data})

            //for test:
            setTimeout(() => {
                //test random data
                let  dataTmp = []
                let iter = startDate.clone()
                while (iter <= endDate) {
                    dataTmp.push(
                        {
                            date: iter.toDate(),
                            amount: Math.floor(Math.random() * (1000000 - 500000 + 1)) + 500000
                        }
                    )
                    iter.add(1, "day")
                }

                dispatch({
                    type: CovidDataTypes.FETCH_OVERALL_CASES_FOR_DATE,
                    payload: {
                        data: dataTmp,
                        startDate: startDate,
                        endDate: endDate,
                        loading: false
                    }
                })
            }, 2000)
        } catch (e) {
            console.log(e);
            dispatch({
                type: CovidDataTypes.FETCH_OVERALL_CASES_FOR_DATE,
                payload: {
                    data: [],
                    startDate: startDate,
                    endDate: endDate,
                    loading: false
                }
            })
        }
    }
}

export const fetchRecoveredPeople = () => {
    return async (dispatch: Dispatch<CovidDataAction>) => {
        try {
            // const response = await axios.get("")
            // dispatch({type: CovidDataTypes.FETCH_OVERALL_CASES, payload: response.data})

            //for test:
            setTimeout(() => {
                dispatch({type: CovidDataTypes.FETCH_RECOVERED_PEOPLE, payload: 5000393})
            }, 2000)
        } catch (e) {
            console.log(e);
            dispatch({type: CovidDataTypes.FETCH_RECOVERED_PEOPLE, payload: 0})
        }
    }
}

export const fetchRecoveredPeopleForDay = () => {
    return async (dispatch: Dispatch<CovidDataAction>) => {
        try {
            // const response = await axios.get("")
            // dispatch({type: CovidDataTypes.FETCH_OVERALL_CASES, payload: response.data})

            //for test:
            setTimeout(() => {
                dispatch({type: CovidDataTypes.FETCH_RECOVERED_PEOPLE_FOR_DAY, payload: 16356})
            }, 2000)
        } catch (e) {
            console.log(e);
            dispatch({type: CovidDataTypes.FETCH_RECOVERED_PEOPLE_FOR_DAY, payload: 0})
        }
    }
}

export const fetchRecoveredPeopleForDate = (startDate: Moment, endDate: Moment) => {
    return async (dispatch: Dispatch<CovidDataAction>) => {
        try {
            dispatch({
                type: CovidDataTypes.FETCH_RECOVERED_PEOPLE_FOR_DATE,
                payload: {
                    data: [],
                    startDate: startDate,
                    endDate: endDate,
                    loading: true
                }
            })
            // const response = await axios.get("")
            // dispatch({type: CovidDataTypes.FETCH_OVERALL_CASES, payload: response.data})

            //for test:
            setTimeout(() => {
                //test random data
                let  dataTmp = []
                let iter = startDate.clone()
                while (iter <= endDate) {
                    dataTmp.push(
                        {
                            date: iter.toDate(),
                            amount: Math.floor(Math.random() * (1000000 - 500000 + 1)) + 500000
                        }
                    )
                    iter.add(1, "day")
                }

                dispatch({
                    type: CovidDataTypes.FETCH_RECOVERED_PEOPLE_FOR_DATE,
                    payload: {
                        data: dataTmp,
                        startDate: startDate,
                        endDate: endDate,
                        loading: false
                    }
                })
            }, 2000)
        } catch (e) {
            console.log(e);
            dispatch({
                type: CovidDataTypes.FETCH_RECOVERED_PEOPLE_FOR_DATE,
                payload: {
                    data: [],
                    startDate: startDate,
                    endDate: endDate,
                    loading: false
                }
            })
        }
    }
}

export const fetchDiseasedPeople = () => {
    return async (dispatch: Dispatch<CovidDataAction>) => {
        try {
            // const response = await axios.get("")
            // dispatch({type: CovidDataTypes.FETCH_OVERALL_CASES, payload: response.data})

            //for test:
            setTimeout(() => {
                dispatch({type: CovidDataTypes.FETCH_DISEASED_PEOPLE, payload: 135214})
            }, 2000)
        } catch (e) {
            console.log(e);
            dispatch({type: CovidDataTypes.FETCH_DISEASED_PEOPLE, payload: 0})
        }
    }
}

export const fetchDiseasedPeopleForDay = () => {
    return async (dispatch: Dispatch<CovidDataAction>) => {
        try {
            // const response = await axios.get("")
            // dispatch({type: CovidDataTypes.FETCH_OVERALL_CASES, payload: response.data})

            //for test:
            setTimeout(() => {
                dispatch({type: CovidDataTypes.FETCH_DISEASED_PEOPLE_FOR_DAY, payload: 669})
            }, 2000)
        } catch (e) {
            console.log(e);
            dispatch({type: CovidDataTypes.FETCH_DISEASED_PEOPLE_FOR_DAY, payload: 0})
        }
    }
}

export const fetchDiseasedPeopleForDate = (startDate: Moment, endDate: Moment) => {
    return async (dispatch: Dispatch<CovidDataAction>) => {
        try {
            dispatch({
                type: CovidDataTypes.FETCH_DISEASED_PEOPLE_FOR_DATE,
                payload: {
                    data: [],
                    startDate: startDate,
                    endDate: endDate,
                    loading: true
                }
            })
            // const response = await axios.get("")
            // dispatch({type: CovidDataTypes.FETCH_OVERALL_CASES, payload: response.data})

            //for test:
            setTimeout(() => {
                //test random data
                let  dataTmp = []
                let iter = startDate.clone()
                while (iter <= endDate) {
                    dataTmp.push(
                        {
                            date: iter.toDate(),
                            amount: Math.floor(Math.random() * (1000000 - 500000 + 1)) + 500000
                        }
                    )
                    iter.add(1, "day")
                }
                
                dispatch({
                    type: CovidDataTypes.FETCH_DISEASED_PEOPLE_FOR_DATE,
                    payload: {
                        data: dataTmp,
                        startDate: startDate,
                        endDate: endDate,
                        loading: false
                    }
                })
            }, 2000)
        } catch (e) {
            console.log(e);
            dispatch({
                type: CovidDataTypes.FETCH_DISEASED_PEOPLE_FOR_DATE,
                payload: {
                    data: [],
                    startDate: startDate,
                    endDate: endDate,
                    loading: false
                }
            })
        }
    }
}

export const fetchTestsPerformed = () => {
    return async (dispatch: Dispatch<CovidDataAction>) => {
        try {
            // const response = await axios.get("")
            // dispatch({type: CovidDataTypes.FETCH_OVERALL_CASES, payload: response.data})

            //for test:
            setTimeout(() => {
                dispatch({type: CovidDataTypes.FETCH_TESTS_PERFORMED, payload: 378992})
            }, 2000)
        } catch (e) {
            console.log(e);
            dispatch({type: CovidDataTypes.FETCH_TESTS_PERFORMED, payload: 0})
        }
    }
}

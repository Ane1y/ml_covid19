import {CovidDataAction, CovidDataTypes} from "../../types/covidData"
import {Dispatch} from "redux"
import moment, {Moment} from "moment";
import axios from "axios";

const diffMouthAmount = 4;

const dataNormalizationByMonth = (startDate: Moment, data: [{ date: string, count: number }]): [{ date: Date, count: number }] | any[] => {
    let returnData: [{ date: Date; count: number }] | any[] = [];

    let dataElem = {
        date: new Date(startDate.format("YYYY-MM") + "T00:00"),
        count: 0
    }

    data.forEach((item) => {
        if (moment(item.date, "YYYY-MM-DD").isSame(dataElem.date, "month")) {
            dataElem.count += item.count
        } else if (moment(item.date, "YYYY-MM-DD").isAfter(dataElem.date, "month")) {
            returnData.push(dataElem)
            dataElem = {
                date: new Date(moment(item.date, "YYYY-MM-DD").format("YYYY-MM") + "T00:00"),
                count: item.count
            }
        }
    })
    returnData.push(dataElem)
    return returnData
}

export const fetchOverallCases = () => {
    return async (dispatch: Dispatch<CovidDataAction>) => {
        try {
            const response = await axios.get("http://localhost:8080/covidInfo/overallCasesCount")
            dispatch({type: CovidDataTypes.FETCH_OVERALL_CASES, payload: response.data.value})
        } catch (e) {
            console.log(e);
            dispatch({type: CovidDataTypes.FETCH_OVERALL_CASES, payload: 0})
        }
    }
}

export const fetchOverallCasesForDay = (date: Moment) => {
    return async (dispatch: Dispatch<CovidDataAction>) => {
        try {
            const response = await axios.get("http://localhost:8080/covidInfo/overallCasesWithPeriod", {
                params: {
                    start: date.format("YYYY-MM-DD"),
                    end: date.format("YYYY-MM-DD")
                }
            })
            dispatch({type: CovidDataTypes.FETCH_OVERALL_CASES_FOR_DAY, payload: response.data.amount})
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
                    allAmount: 0,
                    loading: true
                }
            })
            const response = await axios.get("http://localhost:8080/covidInfo/overallCasesWithPeriod", {
                params: {
                    start: startDate.format("YYYY-MM-DD"),
                    end: endDate.format("YYYY-MM-DD")
                }
            })
            dispatch({
                type: CovidDataTypes.FETCH_OVERALL_CASES_FOR_DATE,
                payload: {
                    data: endDate.diff(startDate, "month") >= diffMouthAmount ? (
                        dataNormalizationByMonth(startDate, response.data.data)
                    ) : (
                        response.data.data.map((item: { date: string, count: number }) => {
                            return {
                                date: new Date(item.date + "T00:00"),
                                count: item.count
                            }
                        })
                    ),
                    startDate: moment(response.data.dateStart),
                    endDate: moment(response.data.dateEnd),
                    allAmount: response.data.amount,
                    loading: false
                }
            })
        } catch (e) {
            console.log(e);
            dispatch({
                type: CovidDataTypes.FETCH_OVERALL_CASES_FOR_DATE,
                payload: {
                    data: [],
                    startDate: startDate,
                    endDate: endDate,
                    allAmount: 0,
                    loading: false
                }
            })
        }
    }
}

export const fetchRecoveredPeople = () => {
    return async (dispatch: Dispatch<CovidDataAction>) => {
        try {
            const response = await axios.get("http://localhost:8080/covidInfo/recovered")
            dispatch({type: CovidDataTypes.FETCH_RECOVERED_PEOPLE, payload: response.data.value})
        } catch (e) {
            console.log(e);
            dispatch({type: CovidDataTypes.FETCH_RECOVERED_PEOPLE, payload: 0})
        }
    }
}

export const fetchRecoveredPeopleForDay = (date: Moment) => {
    return async (dispatch: Dispatch<CovidDataAction>) => {
        try {
            const response = await axios.get("http://localhost:8080/covidInfo/recoveredWithPeriod", {
                params: {
                    start: date.format("YYYY-MM-DD"),
                    end: date.format("YYYY-MM-DD")
                }
            })
            dispatch({type: CovidDataTypes.FETCH_RECOVERED_PEOPLE_FOR_DAY, payload: response.data.amount})
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
                    allAmount: 0,
                    loading: true
                }
            })
            const response = await axios.get("http://localhost:8080/covidInfo/recoveredWithPeriod", {
                params: {
                    start: startDate.format("YYYY-MM-DD"),
                    end: endDate.format("YYYY-MM-DD")
                }
            })
            dispatch({
                type: CovidDataTypes.FETCH_RECOVERED_PEOPLE_FOR_DATE,
                payload: {
                    data: endDate.diff(startDate, "month") >= diffMouthAmount ? (
                        dataNormalizationByMonth(startDate, response.data.data)
                    ) : (
                        response.data.data.map((item: { date: string, count: number }) => {
                            return {
                                date: new Date(item.date + "T00:00"),
                                count: item.count
                            }
                        })
                    ),
                    startDate: moment(response.data.dateStart),
                    endDate: moment(response.data.dateEnd),
                    allAmount: response.data.amount,
                    loading: false
                }
            })
        } catch (e) {
            console.log(e);
            dispatch({
                type: CovidDataTypes.FETCH_RECOVERED_PEOPLE_FOR_DATE,
                payload: {
                    data: [],
                    startDate: startDate,
                    endDate: endDate,
                    allAmount: 0,
                    loading: false
                }
            })
        }
    }
}

export const fetchDiseasedPeople = () => {
    return async (dispatch: Dispatch<CovidDataAction>) => {
        try {
            const response = await axios.get("http://localhost:8080/covidInfo/dead")
            dispatch({type: CovidDataTypes.FETCH_DISEASED_PEOPLE, payload: response.data.value})
        } catch (e) {
            console.log(e);
            dispatch({type: CovidDataTypes.FETCH_DISEASED_PEOPLE, payload: 0})
        }
    }
}

export const fetchDiseasedPeopleForDay = (date: Moment) => {
    return async (dispatch: Dispatch<CovidDataAction>) => {
        try {
            const response = await axios.get("http://localhost:8080/covidInfo/deadWithPeriod", {
                params: {
                    start: date.format("YYYY-MM-DD"),
                    end: date.format("YYYY-MM-DD")
                }
            })
            dispatch({type: CovidDataTypes.FETCH_DISEASED_PEOPLE_FOR_DAY, payload: response.data.amount})
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
                    allAmount: 0,
                    loading: true
                }
            })
            const response = await axios.get("http://localhost:8080/covidInfo/deadWithPeriod", {
                params: {
                    start: startDate.format("YYYY-MM-DD"),
                    end: endDate.format("YYYY-MM-DD")
                }
            })
            dispatch({
                type: CovidDataTypes.FETCH_DISEASED_PEOPLE_FOR_DATE,
                payload: {
                    data: endDate.diff(startDate, "month") >= diffMouthAmount ? (
                        dataNormalizationByMonth(startDate, response.data.data)
                    ) : (
                        response.data.data.map((item: { date: string, count: number }) => {
                            return {
                                date: new Date(item.date + "T00:00"),
                                count: item.count
                            }
                        })
                    ),
                    startDate: moment(response.data.dateStart),
                    endDate: moment(response.data.dateEnd),
                    allAmount: response.data.amount,
                    loading: false
                }
            })
        } catch (e) {
            console.log(e);
            dispatch({
                type: CovidDataTypes.FETCH_DISEASED_PEOPLE_FOR_DATE,
                payload: {
                    data: [],
                    startDate: startDate,
                    endDate: endDate,
                    allAmount: 0,
                    loading: false
                }
            })
        }
    }
}

export const fetchTestsPerformed = () => {
    return async (dispatch: Dispatch<CovidDataAction>) => {
        try {
            const response = await axios.get("http://localhost:8080/covidInfo/test")
            dispatch({type: CovidDataTypes.FETCH_TESTS_PERFORMED, payload: response.data.value})
        } catch (e) {
            console.log(e);
            dispatch({type: CovidDataTypes.FETCH_TESTS_PERFORMED, payload: 0})
        }
    }
}

export const fetchLatestUpdateDate = () => {
    return async (dispatch: Dispatch<CovidDataAction>) => {
        try {
            const response = await axios.get("http://localhost:8080/covidInfo/date")
            dispatch({type: CovidDataTypes.FETCH_LATEST_UPDATE_DATE, payload: moment(response.data.value, "YYYY-MM-DD")})
        } catch (e) {
            console.log(e);
            dispatch({type: CovidDataTypes.FETCH_LATEST_UPDATE_DATE, payload: moment()})
        }
    }
}

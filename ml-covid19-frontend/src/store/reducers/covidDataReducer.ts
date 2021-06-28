import {CovidDataAction, CovidDataState, CovidDataTypes} from "../../types/covidData";

const initialState : CovidDataState = {
    overallCases: 0,
    overallCasesForDay: 0,
    overallCasesForDate: {
        data: [],
        startDate: null,
        endDate: null,
        loading: false
    },
    recoveredPeople: 0,
    recoveredPeopleForDay: 0,
    recoveredPeopleForDate: {
        data: [],
        startDate: null,
        endDate: null,
        loading: false
    },
    diseasedPeople: 0,
    diseasedPeopleForDay: 0,
    diseasedPeopleForDate: {
        data: [],
        startDate: null,
        endDate: null,
        loading: false
    },
    testsPerformed: 0
}

const covidDataReducer = (state = initialState, action: CovidDataAction): CovidDataState => {
    switch (action.type) {
        case CovidDataTypes.FETCH_OVERALL_CASES:
            return {...state, overallCases: action.payload}
        case CovidDataTypes.FETCH_OVERALL_CASES_FOR_DAY:
            return {...state, overallCasesForDay: action.payload}
        case CovidDataTypes.FETCH_OVERALL_CASES_FOR_DATE:
            return {...state, overallCasesForDate: action.payload}
        case CovidDataTypes.FETCH_RECOVERED_PEOPLE:
            return {...state, recoveredPeople: action.payload}
        case CovidDataTypes.FETCH_RECOVERED_PEOPLE_FOR_DAY:
            return {...state, recoveredPeopleForDay: action.payload}
        case CovidDataTypes.FETCH_RECOVERED_PEOPLE_FOR_DATE:
            return {...state, recoveredPeopleForDate: action.payload}
        case CovidDataTypes.FETCH_DISEASED_PEOPLE:
            return {...state, diseasedPeople: action.payload}
        case CovidDataTypes.FETCH_DISEASED_PEOPLE_FOR_DAY:
            return {...state, diseasedPeopleForDay: action.payload}
        case CovidDataTypes.FETCH_DISEASED_PEOPLE_FOR_DATE:
            return {...state, diseasedPeopleForDate: action.payload}
        case CovidDataTypes.FETCH_TESTS_PERFORMED:
            return {...state, testsPerformed: action.payload}
        default:
            return state;
    }
}

export default covidDataReducer;

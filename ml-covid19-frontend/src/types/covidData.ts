import {Moment} from "moment";

export interface DataForChart {
    data: any[];
    startDate: Moment | null;
    endDate: Moment | null;
    loading: boolean;
}

export enum CovidDataTypes {
    FETCH_OVERALL_CASES = "FETCH_OVERALL_CASES",
    FETCH_OVERALL_CASES_FOR_DAY = "FETCH_OVERALL_CASES_FOR_DAY",
    FETCH_OVERALL_CASES_FOR_DATE = "FETCH_OVERALL_CASES_FOR_DATE",
    FETCH_RECOVERED_PEOPLE = "FETCH_RECOVERED_PEOPLE",
    FETCH_RECOVERED_PEOPLE_FOR_DAY = "FETCH_RECOVERED_PEOPLE_FOR_DAY",
    FETCH_RECOVERED_PEOPLE_FOR_DATE = "FETCH_RECOVERED_PEOPLE_FOR_DATE",
    FETCH_DISEASED_PEOPLE = "FETCH_DISEASED_PEOPLE",
    FETCH_DISEASED_PEOPLE_FOR_DAY = "FETCH_DISEASED_PEOPLE_FOR_DAY",
    FETCH_DISEASED_PEOPLE_FOR_DATE = "FETCH_DISEASED_PEOPLE_FOR_DATE",
    FETCH_TESTS_PERFORMED = "FETCH_TESTS_PERFORMED"
}

interface fetchOverallCasesAction {
    type: CovidDataTypes.FETCH_OVERALL_CASES;
    payload: number;
}

interface fetchOverallCasesForDayAction {
    type: CovidDataTypes.FETCH_OVERALL_CASES_FOR_DAY;
    payload: number;
}

interface fetchOverallCasesForDateAction {
    type: CovidDataTypes.FETCH_OVERALL_CASES_FOR_DATE;
    payload: DataForChart;
}

interface fetchRecoveredPeopleAction {
    type: CovidDataTypes.FETCH_RECOVERED_PEOPLE;
    payload: number;
}

interface fetchRecoveredPeopleForDayAction {
    type: CovidDataTypes.FETCH_RECOVERED_PEOPLE_FOR_DAY;
    payload: number;
}

interface fetchRecoveredPeopleForDateAction {
    type: CovidDataTypes.FETCH_RECOVERED_PEOPLE_FOR_DATE;
    payload: DataForChart;
}

interface fetchDiseasedPeopleAction {
    type: CovidDataTypes.FETCH_DISEASED_PEOPLE;
    payload: number;
}

interface fetchDiseasedPeopleForDayAction {
    type: CovidDataTypes.FETCH_DISEASED_PEOPLE_FOR_DAY;
    payload: number;
}

interface fetchDiseasedPeopleForDateAction {
    type: CovidDataTypes.FETCH_DISEASED_PEOPLE_FOR_DATE;
    payload: DataForChart;
}

interface fetchTestsPerformedAction {
    type: CovidDataTypes.FETCH_TESTS_PERFORMED;
    payload: number;
}

export type CovidDataAction =
    fetchOverallCasesAction |
    fetchOverallCasesForDayAction |
    fetchOverallCasesForDateAction |
    fetchRecoveredPeopleAction |
    fetchRecoveredPeopleForDayAction |
    fetchRecoveredPeopleForDateAction |
    fetchDiseasedPeopleAction |
    fetchDiseasedPeopleForDayAction |
    fetchDiseasedPeopleForDateAction |
    fetchTestsPerformedAction;

export interface CovidDataState {
    overallCases: number;
    overallCasesForDay: number;
    overallCasesForDate: DataForChart;
    recoveredPeople: number;
    recoveredPeopleForDay: number;
    recoveredPeopleForDate: DataForChart;
    diseasedPeople: number;
    diseasedPeopleForDay: number;
    diseasedPeopleForDate: DataForChart;
    testsPerformed: number;
}

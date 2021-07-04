import React, {useEffect} from "react"
import {useActions} from "../../hooks/useActions"
import {linkDetailedData} from "../../store/reducers/navbarReducer"
import "./detailedData.scss"
import CovidChart from "../CovidChart"
import {useTypedSelector} from "../../hooks/useTypedSelector"
import moment from "moment";
import Footer from "../footer/Footer"

const DetailedData: React.FC = () => {
    const {
        overallCases,
        recoveredPeople,
        diseasedPeople,
        overallCasesForDate,
        recoveredPeopleForDate,
        diseasedPeopleForDate
    } = useTypedSelector(state => state.covidData)
    const {
        setPage,
        fetchOverallCases,
        fetchRecoveredPeople,
        fetchDiseasedPeople,
        fetchOverallCasesForDate,
        fetchRecoveredPeopleForDate,
        fetchDiseasedPeopleForDate
    } = useActions()

    useEffect(() => {
        setPage(linkDetailedData.id)
        fetchOverallCases()
        fetchRecoveredPeople()
        fetchDiseasedPeople()
        fetchOverallCasesForDate(moment().subtract(7, "days"), moment())
        fetchRecoveredPeopleForDate(moment().subtract(7, "days"), moment())
        fetchDiseasedPeopleForDate(moment().subtract(7, "days"), moment())
    }, [])

    return (
        <div className="background">
            <div className="detailed-data">
                <div className="content-wrapper">
                    <div className="main-heading">Ситуация с Covid-19</div>
                    <CovidChart title="Выявлено случаев"
                                amount={overallCases}
                                isReverse={false}
                                fetchDataForDate={fetchOverallCasesForDate}
                                dataForChart={overallCasesForDate}
                    />
                    <CovidChart title="Человек выздоровело"
                                amount={recoveredPeople}
                                isReverse={true}
                                fetchDataForDate={fetchRecoveredPeopleForDate}
                                dataForChart={recoveredPeopleForDate}
                    />
                    <CovidChart title="Человек умерло"
                                amount={diseasedPeople}
                                isReverse={false}
                                fetchDataForDate={fetchDiseasedPeopleForDate}
                                dataForChart={diseasedPeopleForDate}
                    />
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default DetailedData;

import React, {useEffect} from "react"
import {useActions} from "../../hooks/useActions"
import {linkDetailedData} from "../../store/reducers/navbarReducer"
import "./detailedData.scss"
import CovidChart from "../CovidChart"
import {useTypedSelector} from "../../hooks/useTypedSelector"
import Footer from "../footer/Footer"

const DetailedData: React.FC = () => {
    const {
        overallCasesForDate,
        recoveredPeopleForDate,
        diseasedPeopleForDate,
        latestUpdateDate
    } = useTypedSelector(state => state.covidData)
    const {
        setPage,
        fetchOverallCasesForDate,
        fetchRecoveredPeopleForDate,
        fetchDiseasedPeopleForDate,
        fetchLatestUpdateDate
    } = useActions()

    useEffect(() => {
        setPage(linkDetailedData.id)
        fetchLatestUpdateDate()
        fetchOverallCasesForDate(latestUpdateDate.clone().subtract(1, "month"), latestUpdateDate)
        fetchRecoveredPeopleForDate(latestUpdateDate.clone().subtract(1, "month"), latestUpdateDate)
        fetchDiseasedPeopleForDate(latestUpdateDate.clone().subtract(1, "month"), latestUpdateDate)
    }, [])

    return (
        <div className="background">
            <div className="detailed-data">
                <div className="content-wrapper">
                    <div className="main-heading">Ситуация с Covid-19</div>
                    <CovidChart title="Выявлено случаев"
                                latestDayUpdate={latestUpdateDate}
                                isReverse={false}
                                fetchDataForDate={fetchOverallCasesForDate}
                                dataForChart={overallCasesForDate}
                    />
                    <CovidChart title="Человек выздоровело"
                                latestDayUpdate={latestUpdateDate}
                                isReverse={true}
                                fetchDataForDate={fetchRecoveredPeopleForDate}
                                dataForChart={recoveredPeopleForDate}
                    />
                    <CovidChart title="Человек умерло"
                                latestDayUpdate={latestUpdateDate}
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

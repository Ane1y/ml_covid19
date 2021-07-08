import React, {useEffect} from "react";
import {useActions} from "../../hooks/useActions";
import {linkData} from "../../store/reducers/navbarReducer";
import "./data.scss"
import Footer from "../footer/Footer";
import {useTypedSelector} from "../../hooks/useTypedSelector";

const Data: React.FC = () => {
    const {
        testsPerformed,
        overallCases,
        recoveredPeople,
        diseasedPeople,
        overallCasesForDay,
        recoveredPeopleForDay,
        diseasedPeopleForDay,
        latestUpdateDate
    } = useTypedSelector(state => state.covidData)

    const {
        setPage,
        fetchTestsPerformed,
        fetchOverallCases,
        fetchRecoveredPeople,
        fetchDiseasedPeople,
        fetchOverallCasesForDay,
        fetchRecoveredPeopleForDay,
        fetchDiseasedPeopleForDay,
        fetchLatestUpdateDate
    } = useActions()

    useEffect(() => {
        setPage(linkData.id)
        fetchLatestUpdateDate()
        fetchTestsPerformed()
        fetchOverallCases()
        fetchOverallCasesForDay(latestUpdateDate)
        fetchRecoveredPeople()
        fetchRecoveredPeopleForDay(latestUpdateDate)
        fetchDiseasedPeople()
        fetchDiseasedPeopleForDay(latestUpdateDate)
    }, [])

    return (
        <div className="background-data">
            <div className="data">
                <div className="content-wrapper-data">
                    <div className="content-row-reversed">
                        <div className="main-heading-data">Оперативные данные</div>
                        <div className="button-data-active">
                            <div className="button-data-active-number">{"> " + testsPerformed.toLocaleString('ru-RU')}</div>
                            <div className="button-data-text">Пройдено тестов</div>
                        </div>
                    </div>
                    <div className="content-row">
                        <div className="button-data-all">
                            <div className="button-data-all-number">{overallCases.toLocaleString('ru-RU')}</div>
                            <div className="button-data-text">Выявлено случаев</div>
                        </div>
                        <div className="button-data-healthy">
                            <div className="button-data-healthy-number">{recoveredPeople.toLocaleString('ru-RU')}</div>
                            <div className="button-data-text">Человек выздоровело</div>
                        </div>
                        <div className="button-data-deadly">
                            <div className="button-data-deadly-number">{diseasedPeople.toLocaleString('ru-RU')}</div>
                            <div className="button-data-text">Человек умерло</div>
                        </div>
                    </div>
                    <div className="content-row">
                        <div className="button-data-per_day">
                            <div className="button-data-per_day-number">{overallCasesForDay.toLocaleString('ru-RU')}</div>
                            <div className="button-data-text">Выявлено случаев за сутки</div>
                        </div>
                        <div className="button-data-healthy-per_day">
                            <div className="button-data-healthy-per_day-number">{recoveredPeopleForDay.toLocaleString('ru-RU')}</div>
                            <div className="button-data-text">Человек выздоровело за сутки</div>
                        </div>
                        <div className="button-data-deadly-per_day">
                            <div className="button-data-deadly-per_day-number">{diseasedPeopleForDay.toLocaleString('ru-RU')}</div>
                            <div className="button-data-text">Человек умерло за сутки</div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Data;

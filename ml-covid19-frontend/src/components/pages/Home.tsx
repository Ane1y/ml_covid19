import React, {useEffect} from "react";
import {useActions} from "../../hooks/useActions";
import {linkHome} from "../../store/reducers/navbarReducer";
import "./home.scss"
import {useTypedSelector} from "../../hooks/useTypedSelector";
import { NavLink } from "react-router-dom";

const Home: React.FC = () => {
    const {setPage, fetchLatestUpdateDate} = useActions()
    const {links} = useTypedSelector(state => state.navbar)
    const {latestUpdateDate} = useTypedSelector(state => state.covidData)

    useEffect(() => {
        setPage(linkHome.id)
        fetchLatestUpdateDate()
    }, [])

    return(
        <div className="background-home">
            <div className="home">
                <div className="content-wrapper-home">
                    <div className="main-heading-home">Подробная статистика данных Covid-19</div>
                    <div className="sub-heading-home">По состоянию на {latestUpdateDate?.format("DD.MM.YYYY")}</div>

                    <NavLink className="data-button-home" to={links[1].page}>
                        <div className="data-button-text-home">посмотреть данные</div>
                        <div className="data-button-icon-home">
                            <svg fill="none" height="60" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="60.8" xmlns="http://www.w3.org/2000/svg"><polyline points="6 9 12 15 18 9"/></svg>
                        </div>
                    </NavLink>
                </div>
            </div>
        </div>
    )
}

export default Home;

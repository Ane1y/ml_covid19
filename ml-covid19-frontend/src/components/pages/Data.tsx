import React, {useEffect} from "react";
import {useActions} from "../../hooks/useActions";
import {linkData} from "../../store/reducers/navbarReducer";
import "./data.scss"
import Footer from "../footer/Footer";

const Data: React.FC = () => {
    const {setPage} = useActions()

    useEffect(() => {
        setPage(linkData.id)
    }, [])

    return (
        <div className="background-data">
            <div className="data">
                <div className="content-wrapper-data">
                    <div className="content-row-reversed">
                        <div className="main-heading-data">Оперативные данные</div>
                        <div className="button-data-active">
                            <div className="button-data-active-number">296 350</div>
                            <div className="button-data-text">Число активных случаев</div>
                        </div>
                    </div>
                    <div className="content-row">
                        <div className="button-data-all">
                            <div className="button-data-all-number">5 264 047</div>
                            <div className="button-data-text">Выявлено случаев</div>
                        </div>
                        <div className="button-data-healthy">
                            <div className="button-data-healthy-number">4 839 705</div>
                            <div className="button-data-text">Человек выздоровело</div>
                        </div>
                        <div className="button-data-deadly">
                            <div className="button-data-deadly-number">127 992</div>
                            <div className="button-data-text">Человек умерло</div>
                        </div>
                    </div>
                    <div className="content-row">
                        <div className="button-data-per_day">
                            <div className="button-data-per_day-number">14 057</div>
                            <div className="button-data-text">Выявлено случаев за сутки</div>
                        </div>
                        <div className="button-data-healthy-per_day">
                            <div className="button-data-healthy-per_day-number">11 205</div>
                            <div className="button-data-text">Человек выздоровело за сутки</div>
                        </div>
                        <div className="button-data-deadly-per_day">
                            <div className="button-data-deadly-per_day-number">416</div>
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

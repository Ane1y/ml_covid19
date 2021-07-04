import React, {useEffect} from "react";
import {useActions} from "../../hooks/useActions";
import {linkInformation} from "../../store/reducers/navbarReducer";
import "./information.scss"
import Footer from "../footer/Footer";

const Information: React.FC = () => {
    const {setPage} = useActions()

    useEffect(() => {
        setPage(linkInformation.id)
    }, [])

    return(
        <div className="background-info">
            <div className="information">
                <div className="main-heading-info">Информация о Covid-19</div>
                <div className="content-wrapper-info">
                    <div className="card-info-symptoms">
                        <div className="card-title">Основные симптомы коронавируса</div>
                        <div className="title-line"/>
                        <div className="info-line-content">
                            <div className="img-first"/>
                            <div className="info-line-text">Высокая температура тела</div>
                        </div>
                        <div className="info-line-content">
                            <div className="img-second"/>
                            <div className="info-line-text">Кашель (сухой или с небольшим количеством мокроты)</div>
                        </div>
                        <div className="info-line-content">
                            <div className="img-third"/>
                            <div className="info-line-text">Одышка</div>
                        </div>
                        <div className="info-line-content">
                            <div className="img-fourth"/>
                            <div className="info-line-text">Боль в мышцах</div>
                        </div>
                        <div className="info-line-content">
                            <div className="img-fifth"/>
                            <div className="info-line-text">Утомляемость</div>
                        </div>
                        <div className="info-line-content">
                            <div className="img-sixth"/>
                            <div className="info-line-text">Нарушение или потеря обоняния</div>
                        </div>
                        <div className="info-line-content">
                            <div className="img-seventh"/>
                            <div className="info-line-text">Потеря вкуса</div>
                        </div>
                        <div className="first-card-text">Симптомы могут проявиться в течение 14 дней после контакта с инфекционным больным.</div>
                    </div>
                    <div className="card-info-how-to-transmitted">
                        <div className="card-title">Как передается коронавирус?</div>
                        <div className="title-line"/>
                        <div className="info-line-content">
                            <div className="img-second"/>
                            <div className="info-line-text">Воздушно-капельным путем (при кашле или чихании)</div>
                        </div>
                        <div className="info-line-content">
                            <div className="img-eight"/>
                            <div className="info-line-text-last">Контактным путем (поручни в транспорте, дверные ручки и другие загрязненные поверхности и предметы)</div>
                        </div>
                        <div className="background-ellipse">
                            <div className="ellipse-text">Как и другие респираторные вирусы, коронавирус распространяется через капли, которые образуются, когда инфицированный человек кашляет или чихает.</div>
                        </div>
                        <div className="background-ellipse">
                            <div className="ellipse-text">Кроме того, он может распространяться, через загрязненные поверхности, например, дверные ручки.
                                Люди заражаются, когда они касаются загрязненными руками, носа или глаз.</div>
                        </div>
                    </div>
                    <div className="card-info-seven-steps">
                        <div className="card-title">7 шагов по профилактике коронавирусной инфекции</div>
                        <div className="title-line"/>
                        <div className="info-line-content">
                            <div className="circle">
                                <div className="circle-number">1</div>
                            </div>
                            <div className="last-card-text">При посещении общественных мест обязательно используйте медицинские маски и соблюдайте социальную дистанцию 1,5 - 2 метра</div>
                            <div className="circle">
                                <div className="circle-number">2</div>
                            </div>
                            <div className="last-card-text">Не касайтесь грязными руками глаз, лица и рта</div>
                            <div className="circle">
                                <div className="circle-number">3</div>
                            </div>
                            <div className="last-card-text">Избегайте близких контактов и пребывания в одном помещении с людьми, имеющими видимые признаки ОРВИ
                                (кашель, чихание, выделения из носа)</div>
                            <div className="circle">
                                <div className="circle-number">4</div>
                            </div>
                            <div className="last-card-text">Тщательно мойте руки с мылом и водой после возвращения с улицы и контактов с людьми, дезинфицируйте гаджеты и рабочие поверхности</div>
                            <div className="circle">
                                <div className="circle-number">5</div>
                            </div>
                            <div className="last-card-text">Дезинфицируйте гаджеты, оргтехнику и поверхности, к которым прикасаетесь</div>
                            <div className="circle">
                                <div className="circle-number">6</div>
                            </div>
                            <div className="last-card-text">Ограничьте по возможности при приветствии тесные объятия и рукопожатия</div>
                            <div className="circle">
                                <div className="circle-number">7</div>
                            </div>
                            <div className="last-card-text">Пользуйтесь только индивидуальными предметами личной гигиены (полотенце, зубная щетка)</div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Information;

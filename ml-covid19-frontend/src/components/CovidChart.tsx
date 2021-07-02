import React from "react"
import "./covidChart.scss"
import DatePicker from "./DatePicker"
import {fetchOverallCasesForDate} from "../store/actions/covidData";
import {DataForChart} from "../types/covidData"
import {Chart} from "react-google-charts";

interface CovidChartType {
    title: string;
    amount: number;
    isReverse: boolean;
    dataForChart: DataForChart;
    fetchDataForDate: typeof fetchOverallCasesForDate;
}

const CovidChart = (props: CovidChartType) => {
    let chartData = [
        ["date", "Количество"],
    ];

    props.dataForChart.data.forEach((item) => {
        chartData.push([item.date, item.amount])
    })

    return (
        <div className={props.isReverse ? "covid-chart covid-chart-reverse" : "covid-chart"}>
            <div className="filter-card">
                <div className="card-title">
                    {props.title}
                </div>
                <div className="data-number">
                    {props.amount.toLocaleString('ru-RU')}
                </div>
                <div className="card-text">
                    временной промежуток
                </div>
                <div className="card-date-picker">
                    <DatePicker fetchDataForDate={props.fetchDataForDate}
                                startDate={props.dataForChart.startDate}
                                endDate={props.dataForChart.endDate}
                    />
                </div>
            </div>
            <div className="chart-wrapper">
                <div className="chart-title-line">
                    <div className="chart-title">
                        {props.dataForChart.data.length ? (
                            props.dataForChart.startDate?.format("DD.MM.YYYY") +
                                    " - " +
                            props.dataForChart.endDate?.format("DD.MM.YYYY")
                        ) : (
                            <div style={{color: "transparent"}}>
                                Нет даты
                            </div>
                        )}
                    </div>
                </div>
                <div className="chart">
                    {props.dataForChart.loading ? (
                            <div className="chart-content-center">
                                <div className="lds-ellipsis">
                                    <div/>
                                    <div/>
                                    <div/>
                                    <div/>
                                </div>
                            </div>
                    ) : (
                        <div className="chart-content">
                            {props.dataForChart.data.length ? (
                                <Chart
                                    chartType={"ColumnChart"}
                                    width="100%"
                                    height="100%"
                                    data={chartData}
                                    options={{
                                        chartArea: {
                                            width: '90%',
                                            top: 30,
                                            bottom: 35
                                        },
                                        colors: ['#E69685'],
                                        vAxis: {
                                            minValue: 0,
                                            format: "short"
                                        },
                                        hAxis: {
                                            baselineColor: 'transparent',
                                            gridlineColor: 'transparent',
                                            ticks: [props.dataForChart.data[0].date, props.dataForChart.data[props.dataForChart.data.length - 1].date],
                                            gridlines: {
                                                count: 0
                                            },
                                        },
                                        legend: "none",
                                        backgroundColor: "transparent",
                                        bar: {groupWidth: "90%"},
                                        fontName: "Roboto",
                                        tooltip: {isHtml: true}
                                    }}
                                />
                            ) : (
                                <div>
                                    <div className="chart-content-center">
                                        Пожалуйста, укажите дату
                                    </div>
                                </div>
                            )}
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default CovidChart;

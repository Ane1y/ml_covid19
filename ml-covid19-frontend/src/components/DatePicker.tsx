import React, {useState} from "react";
import moment, {Moment} from "moment";
import 'moment/locale/ru'
import {fetchOverallCasesForDate} from "../store/actions/covidData";
import 'react-dates/initialize';
import {DateRangePicker, FocusedInputShape, isInclusivelyBeforeDay} from "react-dates";
import 'react-dates/lib/css/_datepicker.css';
import './datePicker.css'

interface DatePickerPropsType {
    startDate: Moment | null,
    endDate: Moment | null,
    fetchDataForDate: typeof fetchOverallCasesForDate;
    latestDayUpdate: Moment;
}

const DatePicker = (props: DatePickerPropsType) => {
    const [startDate, setStartDate] = useState<Moment | null>(props.startDate)
    const [endDate, setEndDate] = useState<Moment | null>(props.endDate)
    const [focusedInput, setFocusedInput] = useState<FocusedInputShape | null>(
        null
    )

    const onDatesChange = (arg: {
        startDate: Moment | null
        endDate: Moment | null
    }) => {
        setStartDate(arg.startDate)
        setEndDate(arg.endDate)
    }

    const onClose = (arg: {
        startDate: Moment | null
        endDate: Moment | null
    }) => {
        if (arg.startDate && arg.endDate) {
            props.fetchDataForDate(arg.startDate, arg.endDate)
        } else if (arg.startDate) {
            props.fetchDataForDate(arg.startDate, arg.startDate)
        } else if (arg.endDate) {
            props.fetchDataForDate(arg.endDate, arg.endDate)
        }
    }

    const onFocusChange = (arg: FocusedInputShape | null) => {
        setFocusedInput(arg)
    }

    return (
        <div>
            <DateRangePicker
                startDate={startDate}
                startDateId="start_date_id"
                startDatePlaceholderText={"Начало"}
                endDate={endDate}
                endDateId="end_date_id"
                endDatePlaceholderText={"Конец"}
                onDatesChange={onDatesChange}
                focusedInput={focusedInput}
                onFocusChange={onFocusChange}
                displayFormat={() => "DD.MM.YYYY"}
                onClose={onClose}
                isOutsideRange={day =>
                    !day.isAfter(moment("2020-03-24", "YYYY-MM-DD")) ||
                    !isInclusivelyBeforeDay(day, props.latestDayUpdate)
                }
                block
                readOnly
            />
        </div>
    )
}

export default DatePicker;

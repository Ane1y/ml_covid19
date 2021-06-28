import navbarReducer from "./navbarReducer";
import covidDataReducer from "./covidDataReducer";
import {combineReducers} from "redux";

export const rootReducer = combineReducers({
    navbar: navbarReducer,
    covidData: covidDataReducer
})

export type RootState = ReturnType<typeof rootReducer>

import navbarReducer from "./navbarReducer";
import {combineReducers} from "redux";

export const rootReducer = combineReducers({
    navbar: navbarReducer,
})

export type RootState = ReturnType<typeof rootReducer>

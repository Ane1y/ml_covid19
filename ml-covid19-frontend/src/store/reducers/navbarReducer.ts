import {NavbarAction, NavbarActionTypes, NavbarState} from "../../types/navbar"

interface LinkType {
    title: string;
    page: string;
    id: number;
    selected: boolean
}

export const linkHome: LinkType = {
    title: "logo",
    page: "/",
    id: 0,
    selected: false
}

export const linkData: LinkType = {
    title: "Оперативные данные",
    page: "/data",
    id: 1,
    selected: false
}

export const linkDetailedData: LinkType = {
    title: "Ситуация с Covid-19",
    page: "/detailed-data",
    id: 2,
    selected: false
}

export const linkInformation: LinkType = {
    title: "Информация",
    page: "/information",
    id: 3,
    selected: false
}

const initialState : NavbarState = {
    links: [linkHome, linkData, linkDetailedData, linkInformation],
    selectedId: 0
}

const navbarReducer = (state = initialState, action: NavbarAction): NavbarState => {
    switch (action.type) {
        case NavbarActionTypes.CHANGE_PAGE:
            state.links.forEach((item, index) => {
                item.selected = index === action.payload;
            })
            return {...state, selectedId: action.payload}
        default:
            return state
    }
}

export default navbarReducer;

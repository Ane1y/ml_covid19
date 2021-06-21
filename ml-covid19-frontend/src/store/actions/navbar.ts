import {NavbarAction, NavbarActionTypes} from "../../types/navbar";

export function setPage(page: number):NavbarAction {
    return {type: NavbarActionTypes.CHANGE_PAGE, payload: page}
}

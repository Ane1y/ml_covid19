export enum NavbarActionTypes {
    CHANGE_PAGE = "CHANGE_PAGE"
}

interface ChangePageAction {
    type: NavbarActionTypes.CHANGE_PAGE;
    payload: number;
}

export type NavbarAction = ChangePageAction; //.. | ... | ...

export interface NavbarState {
    links: any[];
    selectedId: number;
}

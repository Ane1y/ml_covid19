interface IStatusFilters {
    [key: string]: string
}

export const StatusFilters: IStatusFilters = {
    All: 'all',
    Active: 'active',
    Completed: 'completed',
}

const initialState = {
    status: StatusFilters.All,
    colors: Array<string>()
}

type actionType = {
    type: string,
    payload?: any
}

export default function filtersReducer(state = initialState, action: actionType) {
    switch (action.type) {
        case 'filters/statusFilterChanged': {
            return {
                ...state,
                status: action.payload
            }
        }
        case 'filters/colorFilterChanged': {
            let {color, changeType} = action.payload;
            const {colors} = state;

            switch (changeType) {
                case 'added': {
                    if (colors.includes(color)) {
                        return state;
                    }

                    return {
                        ...state,
                        colors: state.colors.concat(color)
                    }
                }
                case 'removed': {
                    return {
                        ...state,
                        colors: state.colors.filter(
                            (existingColor) => existingColor !== color
                        )
                    }
                }
                default: return state;
            }
        }
        default: return state;
    }
}

//Action creators
export const colorFilterChanged = (color: string, changeType: string) => {
    return {
        type: 'filters/colorFilterChanged',
        payload: {color, changeType}
    }
}
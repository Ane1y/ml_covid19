import {createStore, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';

import rootReducer from './reducer';

export type todoItemType = {
    id: number,
    text: string,
    completed: boolean,
    color?: string
}

export type stateType = {
    todos: todoItemType[],
    filters: {
        status: string,
        colors: string[]
    }
}

const composedEnhancer = composeWithDevTools(applyMiddleware(thunkMiddleware));

const store = createStore(rootReducer, composedEnhancer);

export default store;
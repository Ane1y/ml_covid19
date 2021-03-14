import {combineReducers} from 'redux';

import todosReducer from './components/todos/todosSlice';
import filtersReducer from './components/filters/filtersSlice';

const rootReducer = combineReducers({
    todos: todosReducer,
    filters: filtersReducer
})

export default rootReducer;
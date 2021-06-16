import {createSelector} from 'reselect';

import {client} from '../../api/client';
import {stateType, todoItemType} from '../../store';
import {StatusFilters} from "../filters/filtersSlice";

type actionType = {
    type: string,
    payload?: any
}

const initialState = Array<todoItemType>();

export default function todosReducer(state = initialState, action: actionType) {
    switch (action.type) {
        case 'todos/todoAdded': {
            return [...state, action.payload]
        }
        case 'todos/todoToggled': {
            return state.map(todo => {
                if (todo.id !== action.payload) {
                    return todo;
                }

                return {
                    ...todo,
                    completed: !todo.completed
                }
            })
        }
        case 'todos/todoColorChanged': {
            const {todoId, color} = action.payload;
            return state.map((todo: todoItemType) => {
                if (todo.id !== todoId) {
                    return todo;
                }

                return {
                    ...todo,
                    color
                }
            })
        }
        case 'todos/todoDeleted': {
            return state.filter((todo: todoItemType) => todo.id !== action.payload);
        }
        case 'todos/allCompleted': {
            return state.map((todo: todoItemType) => {
                return {
                    ...todo,
                    completed: true
                }
            })
        }
        case 'todos/clearCompleted': {
            return state.filter((todo: todoItemType) => !todo.completed);
        }
        case 'todos/todosLoaded': {
            return action.payload;
        }
        default: return state;
    }
}

//Action creator
export const todosLoaded = (todos: todoItemType[]) => {
    return {
        type: 'todos/todosLoaded',
        payload: todos
    }
}

export const todoAdded = (todo: todoItemType) => {
    return {
        type: 'todos/todoAdded',
        payload: todo
    }
}

//Thunk functions
export const fetchTodos = () => async (dispatch: (action: actionType) => void) => {
    const response = await client.get('/fakeApi/todos')
    dispatch(todosLoaded(response.todos))
}

export function saveNewTodo(text: string) {
    return async function saveNewTodoThunk(dispatch: (action: actionType) => void) {
        const initialTodo = {text};
        const response = await client.post('/fakeApi/todos', { todo: initialTodo});
        dispatch(todoAdded(response.todo));
    }
}

//Memoizing Selectors
export const selectTodoIds = createSelector(
    (state: stateType) => state.todos,
    (todos: todoItemType[]) => todos.map(todo => todo.id)
);

export const selectFilteredTodos  = createSelector(
    (state: stateType) => state.todos,
    (state: stateType) => state.filters,
    (todos: todoItemType[], filters: {colors: string[], status: string}) => {
        const {colors, status} = filters;
        const showAllCompletions: boolean = status === StatusFilters.All;
        if (showAllCompletions && colors.length === 0) {
            return todos;
        }

        const completedStatus = status === StatusFilters.Completed;
        return todos.filter((todo: todoItemType) => {
            const statusMatches = showAllCompletions || todo.completed === completedStatus;
            const colorMatches = colors.length === 0 || (todo.color && colors.includes(todo.color));
            return statusMatches && colorMatches;
        });
    }
);

export const selectFilteredTodoIds = createSelector(
    selectFilteredTodos,
    (filteredTodos: todoItemType[]) => filteredTodos.map((todo: todoItemType) => todo.id)
);
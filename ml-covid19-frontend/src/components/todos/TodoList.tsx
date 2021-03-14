import React from 'react';
import {useSelector, shallowEqual} from 'react-redux';

import TodoListItem from './TodoListItem';
import {stateType} from "../../store";

const selectTodosId = (state: stateType) => state.todos.map(todo => todo.id);

const TodoList: React.FC = () => {
    const todoIds: number[] = useSelector(selectTodosId, shallowEqual);

    const renderedListItems = todoIds.map(todoId => {
        return <TodoListItem key={todoId} id={todoId}/>
    })

    return <ul className='todo-list'>{renderedListItems}</ul>
}

export default TodoList
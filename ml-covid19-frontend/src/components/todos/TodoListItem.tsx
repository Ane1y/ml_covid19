import React from 'react';
import {useSelector, useDispatch} from 'react-redux';

import { ReactComponent as TimesSolid } from './times-solid.svg';
import {availableColors, capitalize} from '../filters/colors';
import {stateType, todoItemType} from '../../store';

const selectTodoById = (state: stateType, todoId: number) => {
    return state.todos.find(todo => todo.id === todoId);
}

interface ITodoListItem {
    id: number
}

const TodoListItem: React.FC<ITodoListItem> = ({id}) => {
    const todo: todoItemType = useSelector((state: stateType) => selectTodoById(state, id));
    const {text, completed, color} = todo;

    const dispatch = useDispatch();

    const handleCompleteChanged = () => {
        dispatch({type: 'todos/todoToggled', payload: todo.id});
    }

    const handleColorChanged = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const color = e.target.value;
        dispatch({type: 'todos/todoColorChanged', payload: {todoId: todo.id, color: color}});
    }

    const handleDeleteBtn = () => {
        dispatch({type: 'todos/todoDeleted', payload: todo.id});
    }

    const colorOptions = availableColors.map((c: string) => (
        <option key={c} value={c}>
            {capitalize(c)}
        </option>
    ))

    return (
        <li>
            <div className='view'>
                <div className='segment label'>
                    <input
                        className='toggle'
                        type='checkbox'
                        checked={completed}
                        onChange={handleCompleteChanged}
                    />
                    <div className='todo-text'>{text}</div>
                </div>
                <div className='segment buttons'>
                    <select
                        className='colorPicker'
                        value={color}
                        style={{ color }}
                        onChange={handleColorChanged}
                    >
                        <option value=''> </option>
                        {colorOptions}
                    </select>
                    <button className='destroy' onClick={handleDeleteBtn} >
                        <TimesSolid />
                    </button>
                </div>
            </div>
        </li>
    );
}

export default TodoListItem
import React, {useState} from 'react';
import {useDispatch} from 'react-redux';

import {saveNewTodo} from '../todos/todosSlice';

const Header = () => {
    const [text, setText] = useState('');
    const dispatch = useDispatch();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setText(e.target.value);
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
        const element = e.target as HTMLInputElement;
        const trimmedText: string = element.value.trim();

        if (e.key === 'Enter' && trimmedText) {
            dispatch(saveNewTodo(trimmedText));
            setText('');
        }
    }

    return (
        <header className='header'>
            <input
                type='text'
                placeholder='What needs to be done?'
                autoFocus={true}
                className='new-todo'
                value={text}
                onChange={handleChange}
                onKeyDown={handleKeyDown}
            />
        </header>
    );
}

export default Header
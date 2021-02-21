import React, {FormEvent, useState} from "react";
import './TodoApp.scss'
import {TodoList, itemsType} from "./TodoList";

export default function TodoApp() {
    const [items, setItems] = useState<itemsType[]>([]);
    const [text, setText] = useState('');

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        if (text.length === 0) {
            return;
        }
        const newItem = {
          id: Date.now(),
          text
        };
        const newList = [...items, newItem];
        setItems(newList);
        setText('');
    }

    return(
        <div className='todo-app'>
            <div className='todo-app__wrapper'>
                <h1 className='todo-app__title'>TodoApp</h1>
                <TodoList items={items}/>
                <form className='todo-app__form' onSubmit={(e) => handleSubmit(e)}>
                    <label>
                        What needs to be done?
                        <input
                            type='text'
                            className='todo-app__item'
                            onChange={(e) => setText(e.target.value)}
                            value={text}
                        />
                    </label>
                    <button className='todo-app__btn'>
                        Add task #{items.length + 1}
                    </button>
                </form>
            </div>
        </div>
    );
}
import React, {FunctionComponent} from 'react'

export type itemsType = {
    id: number,
    text: string
};

type TodoListProps = {
    items: itemsType[]
}

export const TodoList: FunctionComponent<TodoListProps> = ({items}) => {
    return(
        <ul className='todo-list'>
            {items.map(item => (
                <li key={item.id}>{item.text}</li>
            ))}
        </ul>
    );
}
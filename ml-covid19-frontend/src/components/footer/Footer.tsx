import React from 'react';
import {useSelector, useDispatch} from 'react-redux';

import {StatusFilters, colorFilterChanged} from '../filters/filtersSlice';
import {availableColors, capitalize} from '../filters/colors';
import {stateType, todoItemType} from '../../store';

const RemainingTodos: React.FC<{count: number}> = (props) => {
    const suffix = props.count === 1 ? '' : 's';

    return (
        <div className='todo-count'>
            <h5>Remaining Todos</h5>
            <strong>{props.count}</strong> item{suffix} left
        </div>
    )
}

type statusFilterProps = {
    status: string,
    onChange: (s: string) => void
}

const StatusFilter: React.FC<statusFilterProps> = ({status, onChange}) => {

    const renderedFilters = Object.keys(StatusFilters).map((key) => {
        const value: string = StatusFilters[key];
        const handleClick = () => onChange(value);
        const className: string = value === status ? 'selected' : '';

        return (
            <li key={value}>
                <button className={className} onClick={handleClick}>
                    {key}
                </button>
            </li>
        )
    })

    return (
        <div className='filters statusFilters'>
            <h5>Filter by Status</h5>
            <ul>{renderedFilters}</ul>
        </div>
    )
}

type colorFilterProps = {
    colors: string[],
    onChange: (color: string, changeType: string) => void
}

const ColorFilters: React.FC<colorFilterProps> = ({colors, onChange}) => {
    const renderedColors = availableColors.map((color) => {
        const checked: boolean = colors.includes(color);
        const handleChange = () => {
            const changeType: string = checked ? 'removed' : 'added';
            onChange(color, changeType);
        }

        return (
          <label key={color}>
              <input
                  type='checkbox'
                  name={color}
                  checked={checked}
                  onChange={handleChange}
              />
              <span
                  className='color-block'
                  style={{
                      backgroundColor: color,
                  }}
              > </span>
              {capitalize(color)}
          </label>
        );
    })

    return (
        <div className='filters colorFilters'>
            <h5>Filter by Color</h5>
            <form className='colorSelection'>{renderedColors}</form>
        </div>
    )
}

const Footer: React.FC = () => {
    const todosRemaining: number = useSelector((state: stateType) => {
        const uncompletedTodos: todoItemType[] = state.todos.filter(todo => !todo.completed);
        return uncompletedTodos.length;
    })

    const {status, colors} = useSelector((state: stateType) => state.filters);
    const dispatch = useDispatch();

    const markAllCompleted = () => {
        dispatch({type: 'todos/allCompleted'});
    }

    const clearCompleted = () => {
        dispatch({type: 'todos/clearCompleted'});
    }

    const onStatusChange = (status: string) => {
        dispatch({type: 'filters/statusFilterChanged', payload: status});
    }

    const onColorChange = (color: string, changeType: string) => {
        dispatch(colorFilterChanged(color, changeType));
    };

    return (
        <footer className='footer'>
            <div className='actions'>
                <h5>Actions</h5>
                <button className='button' onClick={markAllCompleted}>Mark All Completed</button>
                <button className='button' onClick={clearCompleted}>Clear Completed</button>
            </div>

            <RemainingTodos count={todosRemaining} />
            <StatusFilter status={status} onChange={onStatusChange} />
            <ColorFilters colors={colors} onChange={onColorChange} />
        </footer>
    );
}

export default Footer;
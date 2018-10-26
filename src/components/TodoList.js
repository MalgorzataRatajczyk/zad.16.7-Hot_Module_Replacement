import React from 'react';
import Todo from './Todo';
import style from '../containers/TodoList.css';

const TodoList = props => {
    
    const tasklist = props.data.map(element => <Todo text={element.text}/>); 

    return (
        <ul className={style.TodoList}>
            {tasklist}
        </ul>
    )
    
}
    
export default TodoList;

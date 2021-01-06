import React , { useContext } from 'react'

import { TodoContext } from '../../TodoContext'
import './style.css';

import CheckIcon from '@material-ui/icons/Check';
import DeleteIcon from '@material-ui/icons/Delete';

function Todo(props) {
    const { contextTodos } = useContext(TodoContext);

    const [todos,setTodos] = contextTodos;

    const deleteHandler = () => {
        setTodos(todos.filter((item) => item.id !== props.currentTodo.id));
    }

    const clickHandler = () => {

        if(!props.currentTodo.status){
            setTodos(todos.map((item) => {
                if(item.id === props.currentTodo.id){
                    return {
                        ...item,status: !item.status
                    }
                }
                return item;
            }));
            
        }else{
            setTodos(todos.map((item) => {
                if(item.id === props.currentTodo.id){
                    return {
                        ...item,status: !item.status
                    }
                }
                return item;
            }));
        }
    }

    return (
        <>
            <div className={`todo ${props.currentTodo.status ? "todo--completed" : ""}`} id="todo">
                <input readOnly className={`todo__context ${props.currentTodo.status ? "todo__context--completed" : ""}`} type="text" value={props.text}/>
                <span onClick={clickHandler} className={`todo__button--status ${props.currentTodo.status ? "todo__button--status--completed" : ""}`} id="todo__button--status">
                    <CheckIcon className="todo__icon--check" fontSize="inherit"/>
                </span>
                <span onClick={deleteHandler} className="todo__button--delete" id="todo__button--delete">
                    <DeleteIcon className="todo__icon--delete" fontSize="inherit"/>
                </span>
            </div>
        </>
    )
}

export default Todo

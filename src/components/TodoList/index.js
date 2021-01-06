import React , { useContext , useEffect } from 'react';

import { TodoContext } from '../../TodoContext';

import Todo from './Todo';

import { motion } from 'framer-motion';

function TodoList() {
    const { contextTodos, contextFilter, contextFilteredTodos} = useContext(TodoContext);

    const [todos,setTodos] = contextTodos;
    const [filter,setFilter] = contextFilter;
    const [filteredTodos,setFilteredTodos] = contextFilteredTodos;

    //motion.js animation variants for even and odd elements of the todolist
    const variantsEven = {
        hidden: { opacity: 0 , x: "-100%"},
        visible: { opacity: 1 , x: 0},
    }

    const variantsOdd = {
        hidden: { opacity: 0 , x: "100%"},
        visible: { opacity: 1 , x: 0},
    }

    useEffect(() => {
        switch(filter){
            case 'completed':
                setFilteredTodos(todos.filter(todo => todo.status === true ));
                break;
            case 'uncompleted':
                setFilteredTodos(todos.filter(todo => todo.status === false ));
                break;
            default:
                setFilteredTodos(todos);
        }
    },[filter,todos]);

    return (
        <div id="todoList" style={{width: '100%'}}>
            {filteredTodos.map((todo,index) => (
                <motion.div key={todo.id} initial="hidden"
                animate="visible"
                transition={{ duration: 0.5, delay: .1 }}
                variants={index % 2 === 0 ? variantsEven : variantsOdd}>
                    <Todo text={todo.todoText} currentTodo={todo}/>
                </motion.div>
            ))}
        </div>
    )
}

export default TodoList

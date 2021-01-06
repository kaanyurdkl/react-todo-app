import { useState , createContext , useEffect } from 'react';

export const TodoContext = createContext();

export const TodoProvider = (props) => {
    const [todos, setTodos] = useState([]);
    const [todo, setTodo] = useState('');
    const [filter, setFilter] = useState('all');
    const [filteredTodos, setFilteredTodos] = useState([]);

    //Get todos from Local Storage
    useEffect(() => {
        getLocalTodos();
    },[]);

    //Save the todos to Local Storage
    useEffect(() => {
        saveLocalTodos();
    },[todos,filter]);

    //Function that saves the todos to Local Storage
    const saveLocalTodos = () => {
        localStorage.setItem("todos", JSON.stringify(todos));
    };

    //Function that gets the todos from Local Storage
    const getLocalTodos = () => {
        if(localStorage.getItem("todos") === null){
            localStorage.setItem("todos", JSON.stringify([]));
        }else{
            let todoLocal = JSON.parse(localStorage.getItem("todos"));
            setTodos(todoLocal);
        }
    }

    return (
        <TodoContext.Provider 
                value={{
                    contextTodo: [todo,setTodo],
                    contextTodos: [todos,setTodos],
                    contextFilter: [filter,setFilter],
                    contextFilteredTodos: [filteredTodos,setFilteredTodos]
                        }}>
            {props.children}
        </TodoContext.Provider>
    )
}
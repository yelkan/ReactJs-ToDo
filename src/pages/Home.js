import React, { useState, useEffect, useContext } from "react";
import { v4 as uuidv4 } from "uuid";
import Header from "../functionBased/components/Header";
import TodosList from "../functionBased/components/TodosList";
import InputTodo from '../functionBased/components/InputTodo';
import { ThemeContext } from "../functionBased/contexts/ThemeContext";
import { AuthContext } from "../functionBased/contexts/AuthContext";

const Home = (props) => {

    const { state: { isLoggedIn } } = useContext(AuthContext);

    const [todos, setTodos] = useState(getInitialTodos());
    const { theme } = useContext(ThemeContext);

    useEffect(() => {
        //storing todos items.
        const temp = JSON.stringify(todos);
        localStorage.setItem("todos", temp);
    }, [todos]);


    function getInitialTodos() {
        const temp = localStorage.getItem("todos");
        const loadedTodos = JSON.parse(temp);
        return loadedTodos || []
    }

    const handleChange = (id) => {
        setTodos(prevState => (
            prevState.map(todo => {
                if (todo.id === id) {
                    return {
                        ...todo,
                        completed: !todo.completed
                    }
                }
                return todo;
            })
        ))
    }

    const delTodo = id => {
        setTodos(
            [
                ...todos.filter(todo => {
                    return todo.id !== id;
                })
            ]
        )
    }

    const addTodoItem = title => {
        const newTodo = {
            id: uuidv4(),
            title: title,
            completed: false
        };
        setTodos([...todos, newTodo]);
    }

    const setUpdate = (updatedTitle, id) => {
        setTodos(
            todos.map(todo => {
                if (todo.id === id) {
                    todo.title = updatedTitle
                }
                return todo
            })
        )
    }

    return (<div className="container">
        <div className="inner">
            <Header />
            <InputTodo addTodoProps={addTodoItem} />
            <TodosList
                todos={todos}
                handleChangeProps={handleChange}
                deleteTodoProps={delTodo}
                setUpdateProps={setUpdate}
            />
        </div>
    </div>)
}

export default Home;


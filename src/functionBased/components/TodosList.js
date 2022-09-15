import React from "react";
import TodoItem from "./TodoItem";
import Timeline from '@mui/lab/Timeline';

const TodosList = props => {
    return (
        <Timeline position="alternate">
            {props.todos.map(todo => (
                <TodoItem
                    key={todo.id}
                    todo={todo}
                    handleChangeProps={props.handleChangeProps}
                    deleteTodoProps={props.deleteTodoProps}
                    setUpdateProps={props.setUpdateProps}
                />
            ))}
        </Timeline>
    )
}

export default TodosList;
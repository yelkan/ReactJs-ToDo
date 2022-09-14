import React, { useState, useEffect} from "react";
import styles from "./TodoItem.module.css"
import { FaTrash } from "react-icons/fa"

const TodoItem = props => {

    const [editing, setEditing] = useState(false);

    useEffect(()=>{
        return()=>{
            console.log("Cleaning up");
        }
    },[]);

    const handleEditing = () => {
        setEditing(true);
    }

    const handleOnKeyDown = e => {
        if (e.key === "Enter") {
            setEditing(false);
        }
    }

    const completedStyle = {
        fontStyle: "italic",
        color: "#595959",
        opacity: 0.4,
        textDecoration: "line-through",
    }

    const { id, title, completed } = props.todo;

    let viewMode = {};
    let editMode = {};

    editing
        ? viewMode.display = "none"
        : editMode.display = "none";

    return (
        <li className={styles.item}>
            <div onDoubleClick={handleEditing} style={viewMode}>
                <input
                    type="checkbox"
                    className={styles.checkbox}
                    checked={completed}
                    onChange={() => props.handleChangeProps(id)}
                />
                <span style={completed ? completedStyle : null}>
                    {title}
                </span>
                <button onClick={() => props.deleteTodoProps(id)}> <FaTrash style={{ color: "orangered", fontSize: "16px" }} /> </button>
            </div>
            <input
                type="text"
                style={editMode}
                className={styles.textInput}
                value={title}
                onChange={e => props.setUpdateProps(e.target.value, id)}
                onKeyDown={handleOnKeyDown}
            />
        </li>
    )

}

export default TodoItem;
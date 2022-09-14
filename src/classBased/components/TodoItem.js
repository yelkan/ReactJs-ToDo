import React from "react";
import styles from "./TodoItem.module.css"

class TodoItem extends React.Component {

    state = {
        editing: false
    }

    handleEditing = () => {
        this.setState({
            editing: true
        });
        console.log("edit mode activated");
    }

    handleOnKeyDown = e =>{
        if(e.key === "Enter"){
            this.setState({editing:false});
        }
    }

    render() {
        const completedStyle = {
            fontStyle: "italic",
            color: "#595959",
            opacity: 0.4,
            textDecoration: "line-through",
        }

        const { id, title, completed } = this.props.todo;


        let viewMode = {};
        let editMode = {};

        this.state.editing
            ? viewMode.display = "none"
            : editMode.display = "none";

        return (
            <li className={styles.item}>
                <div onDoubleClick={this.handleEditing} style={viewMode}>
                    <input
                        type="checkbox"
                        className={styles.checkbox}
                        checked={completed}
                        onChange={() => this.props.handleChangeProps(id)}
                    />
                    <span style={completed ? completedStyle : null}>
                        {title}
                    </span>
                    <button onClick={() => this.props.deleteTodoProps(id)}> Delete </button>
                </div>
                <input
                    type="text"
                    style={editMode}
                    className={styles.textInput}
                    value={title}
                    onChange={e => this.props.setUpdateProps(e.target.value, id)}
                    onKeyDown = {this.handleOnKeyDown}
                />
            </li>
        )
    }
}

export default TodoItem;
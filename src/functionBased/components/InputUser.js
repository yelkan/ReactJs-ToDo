import React, { useState, useContext } from "react"
import { MdLogin } from "react-icons/md"
import { AuthContext } from "../contexts/AuthContext"

const InputUser = props => {

    const { functions } = useContext(AuthContext);

    const [inputText, setInputText] = useState({
        username: "",
        password: ""
    })

    const onChange = e => {
        setInputText({
            ...inputText,
            [e.target.name]: e.target.value,
        })
    }

    const handleSubmit = e => {
        e.preventDefault()
        const { username, password } = inputText;

        if (username.length < 3) {
            alert("Username minimum length must greater than 3");
            return;
        }
        if (password.length < 3) {
            alert("Password minimum length must greater than 3");
            return;
        }

        functions.login(username, password);
        setInputText({
            username: "",
            password: ""
        });
    }

    const inputStyle = {
        border: "1px solid gray",
    }

    return (
        <form onSubmit={handleSubmit} className="form-container login">
            <h1>{props.title}</h1>
            <input
                required
                type="text"
                className="input-text"
                style={inputStyle}
                placeholder="Username..."
                value={inputText.title}
                name="username"
                onChange={onChange}
            />
            <input
                type="password"
                required
                className="input-text"
                style={inputStyle}
                placeholder="Password..."
                value={inputText.title}
                name="password"
                onChange={onChange}
            />
            <button className="input-submit"><MdLogin style={{ color: "darkcyan", fontSize: "20px", marginTop: "2px" }} /></button>
        </form>
    )
}

export default InputUser
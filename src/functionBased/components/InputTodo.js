import React, { useState } from "react"
import { FaPlusCircle } from "react-icons/fa"
import { IconContext } from "react-icons"
import Button from '@mui/material/Button';
import { Box, IconButton, TextField } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import ClearIcon from '@mui/icons-material/Clear';


const InputTodo = props => {
    const [inputText, setInputText] = useState({
        title: "",
    })

    const onChange = e => {
        setInputText({
            ...inputText,
            [e.target.name]: e.target.value,
        })
    }

    const handleClearClick = () => {
        setInputText({
            title: "",
        })
    };
    const handleSubmit = e => {
        e.preventDefault()
        if (inputText.title.trim()) {
            props.addTodoProps(inputText.title)
            setInputText({
                title: "",
            })
        } else {
            alert("Please write item")
        }
    }

    return (
        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
            <TextField
                onChange={onChange}
                variant="outlined"
                defaultValue={inputText.title}
                fullWidth
                value={inputText.title}
                name="title"
                InputProps={{
                    endAdornment: (
                        <>
                            <IconButton
                                sx={{ visibility: inputText.title ? "visible" : "hidden" }}
                                onClick={handleClearClick}
                            >
                                <ClearIcon />
                            </IconButton>
                            <IconButton
                                sx={{ visibility: inputText.title ? "visible" : "hidden" }}
                                onClick={handleSubmit}
                            >
                                <AddIcon />
                            </IconButton>
                        </>
                    ),
                }}
            />

        </Box>
    )
}

export default InputTodo
import React, { useState, useEffect } from "react";
import styles from "./TodoItem.module.css"

import { TimelineItem, TimelineOppositeContent } from '@mui/lab';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import DeleteIcon from '@mui/icons-material/Delete';
import Typography from '@mui/material/Typography';
import CheckCircleOutlineOutlinedIcon from '@mui/icons-material/CheckCircleOutlineOutlined';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { Box, Checkbox, IconButton, TextField } from "@mui/material";
import AddCircleIcon from '@mui/icons-material/AddCircle';
import ChangeCircleIcon from '@mui/icons-material/ChangeCircle';

const TodoItem = props => {

    const [editing, setEditing] = useState(false);

    useEffect(() => {
        return () => {
            console.log("Cleaning up");
        }
    }, []);

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
        color: "red",
        opacity: 0.4,
        textDecoration: "line-through",
    }

    const { id, title, completed, date, changeDate } = props.todo;

    let viewMode = {};
    let editMode = {};

    editing
        ? viewMode.display = "none"
        : editMode.display = "none";

    return (
        <TimelineItem>
            <TimelineOppositeContent
                sx={{ m: 'auto 0' }}
                align="right"
                variant="body2"
                color="text.secondary"
            >
                <IconButton aria-label="delete" color="error" onClick={() => props.deleteTodoProps(id)}>
                    <DeleteIcon />
                </IconButton>
            </TimelineOppositeContent>
            <TimelineSeparator>
                <TimelineConnector />
                <TimelineDot variant="outlined" color="primary" sx={{ py: '0px', px: 0 }}>
                    <Checkbox
                        onChange={() => props.handleChangeProps(id)}
                        checked={completed}
                        icon={<CheckCircleOutlineOutlinedIcon />}
                        checkedIcon={<CheckCircleIcon />}
                    />
                </TimelineDot>
                <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent onDoubleClick={handleEditing} sx={{ py: '12px', px: 2 }}>
                <Box style={viewMode}>
                    <Typography
                        style={completed ? completedStyle : null}
                        variant="h6"
                        component="span"
                    >
                        {title}
                    </Typography>

                    <Box style={{ opacity: "50%", fontSize: "5px" }}>
                        <Typography > <AddCircleIcon /> {date}</Typography>
                        {changeDate && <Typography> <ChangeCircleIcon /> {changeDate}</Typography>}
                    </Box >
                </Box>
                <Box style={editMode}>
                    <TextField
                        className={styles.textInput}
                        value={title}
                        onChange={e => props.setUpdateProps(e.target.value, id)}
                        onKeyDown={handleOnKeyDown}
                    />
                </Box>
            </TimelineContent>
        </TimelineItem>
    )
}

export default TodoItem;


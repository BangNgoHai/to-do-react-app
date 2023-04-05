import { Fab, Paper, TextField } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import React, { useState } from 'react';
import './content.css';
import Note from "./Note";

const Content = (props) => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const {onAddNote} = props;
    function clickHandler(e) {
       if(title === "",content === ""){
            console.log("Nothing to display");
       }else{
        e.preventDefault();
        setTitle("");
        setContent("");
        onAddNote({
            newtitle: title,
            newcontent: content,
       })
       }
    }
    return (
        <Paper style={{margin:"10px 10%",padding: "25px 50px"}}>
            <form>
                <TextField label="Title" style={{marginBottom:"10px"}} onChange={(e)=>{setTitle(e.target.value)}} value={title}/>
                <TextField label="Content" multiline rows={5} style={{marginBottom:"25px"}} onChange={(e)=>{setContent(e.target.value)}} value={content}/>
                <Fab onClick={clickHandler}>
                    <AddIcon/>
                </Fab>
            </form>
        </Paper>
    )
}

export default Content;

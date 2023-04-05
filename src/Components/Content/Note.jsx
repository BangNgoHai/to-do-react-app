import { Button, Paper } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete';
import React from 'react'

const Note = (props) => {
    const {id, title, content, notes, setNotes} = props;
    function clickHandler() {
        const updatedNotes = notes.filter(note => note.id !== id); 
        //notes.filter() is a built-in JavaScript function that returns a new array
        //with all the elements that pass the test implemented by the provided function.
        //In this case, we're using it to remove the note with the matching id from the notes array.
        //So, the line const updatedNotes = notes.filter(note => note.id !== id); creates a new array 
        //(updatedNotes) that includes all the notes in the notes array except for the one with the matching id.
        //To do this, we're using an arrow function that takes in a single parameter (note) and checks if its 
        //id value is not equal to the id value of the note we want to remove.
        //If the condition is true, the note is included in the new array, and if it's false, the note is excluded.
        setNotes(updatedNotes);
    }
    return (
        <Paper style={{minWidth:"200px",minHeight:"100px",padding:"10px",margin:"20px",display:"inline-flex"}}>
            <div>
                <h1 style={{marginBottom:"20px",fontFamily:"sans-serif",fontWeight:"100"}}>{title}</h1>
                <p style={{fontFamily:"sans-serif"}}>{content}</p>
            </div>
            <Button style={{ marginLeft:"120px"}} onClick={clickHandler}>
                <DeleteIcon style={{color:"red"}}/>
            </Button>
        </Paper>
    )
}

export default Note

//notes.filter() is a built-in JavaScript function that returns a new array with all the elements that pass the test implemented by the provided function. In this case, we're using it to remove the note with the matching id from the notes array.So, the line const updatedNotes = notes.filter(note => note.id !== id); creates a new array (updatedNotes) that includes all the notes in the notes array except for the one with the matching id.To do this, we're using an arrow function that takes in a single parameter (note) and checks if its id value is not equal to the id value of the note we want to remove. If the condition is true, the note is included in the new array, and if it's false, the note is excluded.

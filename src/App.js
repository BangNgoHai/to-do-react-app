import { useState } from 'react';
import './App.css';
import Content from './Components/Content/Content';
import Note from './Components/Content/Note';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [notes, setNotes] = useState([]);
  console.log(notes);
  function addNote(note){
      const newNote = {...note, id: uuidv4()};
      setNotes([...notes, newNote]);
  }
  return (
    <div className="App">
        <Header/>
        <Content onAddNote={addNote}/>
        {notes.map((note,index)=>(
          <Note key={note.id} id={note.id} title={note.newtitle} content={note.newcontent} notes={notes} setNotes={setNotes}/>
        ))}
        <Footer/>
    </div>
  );
}

export default App;


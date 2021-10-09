import React, {useReducer, useState} from 'react';
import Note from './components/Note';

function reducer(notes, action){

    switch(action.type)
    {
        case "add": return [...notes, createNote(action.payload.note)]; break;
        case "delete": return notes.filter((note) => note.id != action.payload.id); break;
        case "complete": return notes.map((item) => {
            if(item.id === action.payload.id){
                return {...item, complete : !item.complete};
            }
            return item;
        }); break;
        case "priority": return notes.map((item) => {
            if(item.id === action.payload.id){
                return {...item, priority : !item.priority};
            }
        })
        default: 
            return notes;
    }
}

function createNote(note){
    return {
        id: Date.now(),
        content: note,
        complete: false,
        priority: false
    }
}

function App(){

    const [note, setNote] = useState(""); 
    const [notes, dispatch] = useReducer(reducer, []);

    function handleSubmit(e){
        e.preventDefault();
        dispatch({type:"add", payload: {note:note}});
        setNote("");//empty the Notes after submit 
    }//handleSubmit

    console.log(notes);

    return(
        <div>
            <h1>Notes</h1>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" placeholder="Add Task" 
                    value={note} onChange={(e) => setNote(e.target.value)}/>
                <button type="submit">Add</button>
            </form>
            {notes.map((item) => {return <Note key={item.id} Noteitem={item} dispatch={dispatch}/>})}
        </div>
        );
}

export default App;
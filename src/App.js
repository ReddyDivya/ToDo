import React, {useReducer, useState} from 'react';
import Note from './components/Note';
import {Card, CardTitle , CardText, Button, Row, Col} from 'reactstrap';
import "bootstrap/dist/css/bootstrap.min.css";

function reducer(notes, action){
    switch(action.type)
    {
        case "add": return [...notes, createNote(action.payload.note)]; break;
        case "delete": { document.getElementById("task").style.border = "1px solid #e0e0e0";
            return notes.filter((note) => note.id != action.payload.id); break;}
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
    if(note == "")  
    {
        document.getElementById("task").style.border = "2px solid red";
        alert("Please add your task.");
    }
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

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <Row>
                        <Col sm="12" className="mx-auto w-75 mt-4">
                            <Card>
                                <CardTitle><h1 className="text-dark">Add Task(s)</h1></CardTitle>
                                <CardText>
                                    <small className="form-text text-muted">You can add multiple tasks</small>
                                    <input id="task"
                                        type="text" className="form-control" placeholder="Add Task" 
                                        value={note} onChange={(e) => setNote(e.target.value)}
                                    />
                                </CardText>
                                <br/>
                                <Button sm="5" className="mx-auto w-75" type="submit" color="primary">Add</Button> 
                                <br/>
                            </Card>
                        </Col>
                    </Row>
                </div>
            </form>
            {notes.map((item) => {return item.content != "" && <Note key={item.id} Noteitem={item} dispatch={dispatch}/>})}
        </div>
        );
}

export default App;
import React from 'react';

function Note({Noteitem, dispatch}){
    return(
        <div>
            <p style={{textDecoration: Noteitem.complete ? "line-through" : "none", border: Noteitem.priority ? "2px solid red": "none" }}>
                {Noteitem.content}
            </p>
            <button onClick={() => {dispatch({type: "delete", payload: {id : Noteitem.id}}) }}>Delete</button>
            <button onClick={() => {dispatch({type:"complete", payload: {id: Noteitem.id}}) }}>Complete</button>
            <button onClick={() => {dispatch({type: "priority", payload: {id: Noteitem.id}}) }}>Priority</button>
        </div>
    );
}

export default Note;
import React from 'react';
import {Card, CardTitle , CardText, Button, Row, Col} from 'reactstrap';
import "bootstrap/dist/css/bootstrap.min.css";

function Note({Noteitem, dispatch}){
    return(
        <div>
            <Row>
                <Col sm="12" className="mx-auto w-75 mt-2">
                    <Card>
                        <br/>
                        <CardText>
                            <small style={{textDecoration: Noteitem.complete ? "line-through" : "none", border: Noteitem.priority ? "2px solid red": "none" }}>
                                {Noteitem.content}
                            </small> &nbsp;&nbsp;   
                            <Button color="danger" onClick={() => {dispatch({type: "delete", payload: {id : Noteitem.id}}) }}>Delete</Button>&nbsp;
                            <Button color="success" onClick={() => {dispatch({type:"complete", payload: {id: Noteitem.id}}) }}>Complete</Button>&nbsp;
                            <Button color="warning" onClick={() => {dispatch({type: "priority", payload: {id: Noteitem.id}}) }}>Priority</Button>
                        </CardText>
                        &nbsp;
                    </Card>
                </Col>
            </Row>
        </div>
    );
}

export default Note;
import React from 'react'
//Boostrap Section
import ListGroup from 'react-bootstrap/ListGroup'
import Badge from 'react-bootstrap/Badge'
import Button from 'react-bootstrap/Button'

const ScannedSection = (props) => {
    const handleClick = (id) =>{
        props.onDelete(id);
    }
    //---------------------------------------------------------------------//
    const scannedList = props.scannedList ?
    (
    <ListGroup>
        <ListGroup.Item  variant="dark">Scanned <Badge variant="light">{props.scannedList.length}</Badge></ListGroup.Item>
        {props.scannedList.map(item => 
        <ListGroup.Item key={item.id}>
            <h5>{item.trackingNumber} 
        { <Button 
                variant="danger" 
                className="float-right"
                onClick={()=>handleClick(item.trackingNumber)}
                >Delete
        </Button>}
            </h5>
            <p>{item.type}</p>
            <ListGroup horizontal>
                <ListGroup.Item>{item.scanParcel}</ListGroup.Item>
                <ListGroup.Item>{item.scanAmount}</ListGroup.Item>
            </ListGroup>
            </ListGroup.Item>)}
    </ListGroup>
    ) : 
    <ListGroup>
    <ListGroup.Item  variant="dark">Scanned <Badge variant="light">0</Badge></ListGroup.Item>
    <ListGroup.Item>No Item.</ListGroup.Item>
    </ListGroup>
    //----------------------------------------------------------------------------------//
    return (
        <div>
            {scannedList}
        </div>
    )
}

export default ScannedSection

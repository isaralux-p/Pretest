import React from 'react'
// Bootstrap Section
import ListGroup from 'react-bootstrap/ListGroup'
import Badge from 'react-bootstrap/Badge'

const PendingSection = (props) => {
    const pendingList =
    <ListGroup>
        <ListGroup.Item variant="dark">
            Pending Tracking 
            <Badge variant="light">{props.pendingList.length}</Badge>
        </ListGroup.Item>
        {props.pendingList.map(item => 
        <ListGroup.Item key={item.id}>
            <h3>{item.trackingNumber}</h3>
            <p>{item.location}</p>
            <small>{item.type}</small>
            </ListGroup.Item>)}
    </ListGroup>
    
    return (
        <div>
            {pendingList}
        </div>
    )
}

export default PendingSection

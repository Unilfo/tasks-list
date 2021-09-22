import React from 'react'
import {Card} from 'react-bootstrap'


const TaskCard = ({task}) => {
    return (
        <Card key={task.id} >
            <Card.Header>Featured</Card.Header>
            <Card.Body>
                <Card.Title>{task.title}</Card.Title>
                <Card.Text>
                    {task.title}
                </Card.Text>
                <Card.Footer className="text-muted">{task.date}</Card.Footer>
            </Card.Body>
        </Card>
    )
}

export default TaskCard
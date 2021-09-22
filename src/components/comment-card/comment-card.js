import React from 'react'
import {ListGroup} from 'react-bootstrap'

const CommentCard = ({comment}) => {
    return (
        <ListGroup key={comment.id}>
            <ListGroup.Item variant="light">{comment.body}</ListGroup.Item>
        </ListGroup>
    )
}

export default CommentCard
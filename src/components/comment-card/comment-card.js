import React from 'react'

const CommentCard = ({comment}) => {
    return (
        <div key={comment.id}>{comment.body}</div>
    )
}

export default CommentCard
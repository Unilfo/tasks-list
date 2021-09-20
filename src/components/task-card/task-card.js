import React from 'react'

const TaskCard = ({task}) => {
    return (
        <div key={task.id}>{task.title}{task.date}</div>
    )
}

export default TaskCard
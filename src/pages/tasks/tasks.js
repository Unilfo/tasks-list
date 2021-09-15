import React from 'react'
import {useSelector} from 'react-redux'
import {useHistory} from 'react-router-dom'

const Tasks = () => {
    const history = useHistory()
    const tasks = useSelector(state => state.tasks)

    return (
        <div>
            {tasks.map(el => <div key={el.id} onClick={() => history.push(`/${el.id}`)}>{el.title}</div>)}
        </div>
    )
}

export default Tasks
import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {fetchTaskByID} from '../../store/actions'
import {useParams} from 'react-router-dom'

const TaskDetail = () => {
    const dispatch = useDispatch()
    const {id} = useParams()
    const task = useSelector(state => state.tasks[0])
    const loading = useSelector(state => state.loading)

    useEffect(() => {
        dispatch(fetchTaskByID(id))
    },[id, dispatch])

    if(loading){
        return (
            <div>Loading...</div>
        )
    }

    return (
        <div>
            TaskDetail
            <div>
                {task && task.title}
            </div>
        </div>
    )
}

export default TaskDetail
import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {fetchCommentsByID, fetchTaskByID} from '../../store/actions'
import {useParams} from 'react-router-dom'
import CommentCard from '../../components/comment-card'
import TaskCard from '../../components/task-card'

const TaskDetail = () => {
    const dispatch = useDispatch()
    const {id} = useParams()
    const task = useSelector(state => state.tasks)
    const loading = useSelector(state => state.loading)
    const comments = useSelector(state => state.comments)

    useEffect(() => {
        dispatch(fetchTaskByID(id))
        dispatch(fetchCommentsByID(id))
    },[id, dispatch])

    if(loading){
        return (
            <div>Loading...</div>
        )
    }

    return (
        <div>
            <p>TaskDetail</p>
            <div>{task.map(el => <TaskCard key={el.id} task={el}/>)}</div>
            <div>{comments.map(el => <CommentCard key={el.id} comment={el}/>)}</div>
        </div>
    )
}

export default TaskDetail
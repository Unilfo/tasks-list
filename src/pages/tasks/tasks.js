import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {useHistory} from 'react-router-dom'
import {fetchTasks} from '../../store/actions'

const Tasks = () => {
    const dispatch = useDispatch()
    const history = useHistory()
    const tasks = useSelector(state => state.tasks)
    const loading = useSelector(state => state.loading)

    useEffect(()=>{
        dispatch(fetchTasks())
    },[dispatch])

    if(loading){
        return (
            <div>Loading...</div>
        )
    }

    return (
        <div>
            {tasks.map(el => <div key={el.id} onClick={() => history.push(`/tasks/${el.id}`)}>{el.title}</div>)}
        </div>
    )
}

export default Tasks
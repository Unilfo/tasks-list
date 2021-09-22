import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {fetchTasks} from '../../store/actions'
import TableTasks from '../../components/table'

const Tasks = () => {
    const dispatch = useDispatch()
    const tasks = useSelector(state => state.tasks)
    const loading = useSelector(state => state.loading)

    useEffect(() => {
        dispatch(fetchTasks(false))
    }, [dispatch])

    if (loading) {
        return (
            <div>Loading...</div>
        )
    }

    return <TableTasks tasks={tasks}/>
}

export default Tasks
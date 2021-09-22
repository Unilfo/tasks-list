import React, {useEffect} from 'react'
import TableTasks from '../../components/table'
import {useDispatch, useSelector} from 'react-redux'
import {fetchTasks} from '../../store/actions'

const CompletedTasks = () => {
    const dispatch = useDispatch()
    const tasks = useSelector(state => state.tasks)
    const loading = useSelector(state => state.loading)

    useEffect(() => {
        dispatch(fetchTasks(true))
    }, [dispatch])

    if (loading) {
        return (
            <div>Loading...</div>
        )
    }

    return <TableTasks tasks={tasks}/>
}

export default CompletedTasks
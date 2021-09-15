import React, {useEffect} from 'react'
import {useDispatch} from 'react-redux'
import {requestTaskSuccessByID} from '../../store/actions'

const TaskDetail = () => {
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(requestTaskSuccessByID(2))
    },[])

    return (
        <div>TaskDetail</div>
    )
}

export default TaskDetail
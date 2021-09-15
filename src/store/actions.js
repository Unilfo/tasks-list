import {
    FETCHED_TASKS,
    REQUESTED_TASK_SUCCEEDED_BY_ID,
    REQUESTED_TASKS,
    REQUESTED_TASKS_FAILED,
    REQUESTED_TASKS_SUCCEEDED
} from './types'

export const requestTasks = () => {
    return {
        type: REQUESTED_TASKS
    }
}

export const requestTasksSuccess = (data) => {
    return {
        type: REQUESTED_TASKS_SUCCEEDED,
        tasks: data
    }
}

export const requestTaskSuccessByID = (data) => {
    return {
        type: REQUESTED_TASK_SUCCEEDED_BY_ID,
        id: data
    }
}

export const requestTasksError = () => {
    return {
        type: REQUESTED_TASKS_FAILED
    }
}

export const fetchTasks = () => {
    return {
        type: FETCHED_TASKS
    }
}

import {
    FETCHED_COMMENTS_BY_ID,
    FETCHED_TASK_BY_ID,
    FETCHED_TASKS, REQUESTED_COMMENTS_BY_ID,
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
        tasks: data
    }
}

export const requestCommentsByID = (data) => {
    return {
        type: REQUESTED_COMMENTS_BY_ID,
        comments: data
    }
}

export const requestTasksError = () => {
    return {
        type: REQUESTED_TASKS_FAILED
    }
}

export const fetchTasks = (status) => {
    return {
        type: FETCHED_TASKS,
        status
    }
}

export const fetchTaskByID = (id) => {
    return {
        type: FETCHED_TASK_BY_ID,
        id: id
    }
}

export const fetchCommentsByID = (id) => {
    return {
        type: FETCHED_COMMENTS_BY_ID,
        id: id
    }
}
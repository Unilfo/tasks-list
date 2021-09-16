import {
    REQUESTED_TASK_SUCCEEDED_BY_ID,
    REQUESTED_TASKS,
    REQUESTED_TASKS_FAILED,
    REQUESTED_TASKS_SUCCEEDED
} from './types'

const initialState = {
    tasks: [],
    loading: false,
    error: false
}

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case REQUESTED_TASKS:
            return {
                tasks: [],
                loading: true,
                error: false
            }
        case REQUESTED_TASKS_SUCCEEDED:
            return {
                tasks: action.tasks,
                loading: false,
                error: false
            }
        case REQUESTED_TASKS_FAILED:
            return {
                tasks: [],
                loading: false,
                error: true
            }
        case REQUESTED_TASK_SUCCEEDED_BY_ID:
            return {
                ...state,
                tasks: [action.tasks],
                loading: false,
                error: false
            }
        default:
            return state
    }
}

export default rootReducer
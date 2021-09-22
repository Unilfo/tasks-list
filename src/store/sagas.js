import {put, takeEvery, call} from 'redux-saga/effects'
import {
    requestCommentsByID,
    requestTasks,
    requestTasksError,
    requestTasksSuccess,
    requestTaskSuccessByID
} from './actions'
import {FETCHED_COMMENTS_BY_ID, FETCHED_TASK_BY_ID, FETCHED_TASKS} from './types'

export default function* watchFetchTasks() {
    yield takeEvery(FETCHED_TASKS, fetchTasksAsync)
    yield takeEvery(FETCHED_TASK_BY_ID, fetchTasksAsyncById)
    yield takeEvery(FETCHED_COMMENTS_BY_ID, fetchCommentsAsuncByID)
}

function* fetchTasksAsync({status}) {

    try {
        yield put(requestTasks())
        const data = yield call(() => {
                return fetch(`http://localhost:3001/tasks?status=${status}`)
                    .then(res => res.json())
            }
        )
        yield put(requestTasksSuccess(data))
    } catch (error) {
        yield put(requestTasksError())
    }
}

function* fetchTasksAsyncById(action){
    const id = action.id

    try {
        yield put(requestTasks())
        const data = yield call(() => {
                return fetch('http://localhost:3001/tasks/'+id)
                    .then(res => res.json())
            }
        )
        yield put(requestTaskSuccessByID(data))
    } catch (error) {
        yield put(requestTasksError())
    }
}

function* fetchCommentsAsuncByID(action){
    const id = action.id

    try {
        yield put(requestTasks())
        const data = yield call(() => {
                return fetch('http://localhost:3001/comments?tasksId='+id)
                    .then(res => res.json())
            }
        )
        yield put(requestCommentsByID(data))
    } catch (error) {
        yield put(requestTasksError())
    }
}

// 1. Отправляется действие FETCHED_DOG
// 2. Сага-наблюдатель (watcher saga) watchFetchDog получает это действие и вызывает сагу-рабочего (worker saga) fetchDogAsync.
// 3. Отправляется действие по отображению индикатора загрузки.
// 4. Происходит вызов API метода.
// 5. Отправляется действие по обновлению состояния (успех или провал)
import {put, takeEvery, call} from 'redux-saga/effects'
import {requestTasks, requestTasksError, requestTasksSuccess, requestTaskSuccessByID} from './actions'
import {FETCHED_TASKS, REQUESTED_TASK_SUCCEEDED_BY_ID} from './types'

export default function* watchFetchTasks() {
    yield takeEvery(FETCHED_TASKS, fetchTasksAsync)
    yield takeEvery(REQUESTED_TASK_SUCCEEDED_BY_ID, fetchTasksAsyncById)
}

function* fetchTasksAsync() {
    try {
        yield put(requestTasks())
        const data = yield call(() => {
                return fetch('http://localhost:3001/tasks')
                    .then(res => res.json())
            }
        )
        yield put(requestTasksSuccess(data))
    } catch (error) {
        yield put(requestTasksError())
    }
}

function* fetchTasksAsyncById(action){  // fixed
    const id = action.id
    console.log(action)
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

// 1. Отправляется действие FETCHED_DOG
// 2. Сага-наблюдатель (watcher saga) watchFetchDog получает это действие и вызывает сагу-рабочего (worker saga) fetchDogAsync.
// 3. Отправляется действие по отображению индикатора загрузки.
// 4. Происходит вызов API метода.
// 5. Отправляется действие по обновлению состояния (успех или провал)
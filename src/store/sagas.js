import {put, takeEvery, call} from 'redux-saga/effects'
import {requestDog, requestDogError, requestDogSuccess} from './actions'

export default function* watchFetchDog() {
    yield takeEvery('FETCHED_DOG', fetchDogAsync)
}

function* fetchDogAsync() {
    try {
        yield put(requestDog())
        const data = yield call(() => {
                return fetch('https://dog.ceo/api/breeds/image/random')
                    .then(res => res.json())
            }
        )
        yield put(requestDogSuccess(data))
    } catch (error) {
        yield put(requestDogError())
    }
}

// 1. Отправляется действие FETCHED_DOG
// 2. Сага-наблюдатель (watcher saga) watchFetchDog получает это действие и вызывает сагу-рабочего (worker saga) fetchDogAsync.
// 3. Отправляется действие по отображению индикатора загрузки.
// 4. Происходит вызов API метода.
// 5. Отправляется действие по обновлению состояния (успех или провал)
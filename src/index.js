import React from 'react'
import ReactDOM from 'react-dom'
import {createStore, applyMiddleware, compose} from 'redux'
import createSagaMiddleware from 'redux-saga'
import {Provider} from 'react-redux'
import watchFetchDog from './store/sagas'
import rootReducer from './store/reducers'
import Routes from './components/routes'
import {
    BrowserRouter as Router,
} from 'react-router-dom'
import {fetchTasks} from './store/actions'

// create the saga middleware
const sagaMiddleware = createSagaMiddleware()

// mount it on the Store
const store = createStore(
    rootReducer,
    compose(applyMiddleware(sagaMiddleware),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    ))

// then run the saga
sagaMiddleware.run(watchFetchDog)
store.dispatch(fetchTasks())

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <Router>
                <Routes/>
            </Router>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
)


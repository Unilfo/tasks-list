import React from 'react'
import ReactDOM from 'react-dom'
import {createStore, applyMiddleware, compose} from 'redux'
import createSagaMiddleware from 'redux-saga'
import {Provider} from 'react-redux'
import watchFetchTasks from './store/sagas'
import rootReducer from './store/reducers'
import Routes from './components/routes'
import {
    BrowserRouter as Router,
} from 'react-router-dom'
import Navigation from './components/nav'
import 'normalize.css'
import 'bootstrap/dist/css/bootstrap.min.css'


// create the saga middleware
const sagaMiddleware = createSagaMiddleware()

// mount it on the Store
const store = createStore(
    rootReducer,
    compose(applyMiddleware(sagaMiddleware),
        typeof window.__REDUX_DEVTOOLS_EXTENSION__ === "undefined"
            ? a => a
            : window.__REDUX_DEVTOOLS_EXTENSION__ &&
            window.__REDUX_DEVTOOLS_EXTENSION__()
    ))

// then run the saga
sagaMiddleware.run(watchFetchTasks)

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <Router>
                <Navigation/>
                <Routes/>
            </Router>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
)


import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger'
import reducer from '../reducers'
import { composeWithDevTools } from 'redux-devtools-extension';

const logger = createLogger()

const store = createStore(
    reducer, composeWithDevTools(
    applyMiddleware(thunk, logger))
)

window.store = store

export default store

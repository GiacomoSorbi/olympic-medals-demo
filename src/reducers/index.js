import { createStore, applyMiddleware } from 'redux'
import { createLogger } from 'redux-logger'
import rootReducer, { initialState } from './reducers'
import thunkMiddleware from 'redux-thunk'

const loggerMiddleware = createLogger()

const store = createStore(
  rootReducer(),
  initialState,
  applyMiddleware(thunkMiddleware, loggerMiddleware),
)

export default store

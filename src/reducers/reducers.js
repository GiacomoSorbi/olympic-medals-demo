import { combineReducers } from 'redux'
// more reducers would go here
import interfaceReducer from './interfaceReducer'
import medalsDataReducer from './medalsDataReducer'

export const initialState = {}

const baseReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state
  }
}

const rootReducer = () =>
  combineReducers({
    baseReducer,
    interface: interfaceReducer,
    medalsData: medalsDataReducer,
  })

export default rootReducer

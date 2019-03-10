import { EDIT_ROW, DELETE_ROW } from '../actions/constants'
import { removeRow, sortTable } from '../utilities'
import { olympicMedalsByCountry } from '../fixtures/data'

const initialState = {
  medalsData: olympicMedalsByCountry,
}

const medalsDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case EDIT_ROW:
      return {
        ...state,
        medalsData: [
          action.payload,
          ...removeRow(state.medalsData, action.payload.name),
        ],
      }
    case DELETE_ROW:
      return {
        ...state,
        medalsData: removeRow(state.medalsData, action.payload),
      }
    default:
      return state
  }
}

export default medalsDataReducer

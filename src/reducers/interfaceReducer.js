import { TOGGLE_MODAL, CHANGE_SORTING } from '../actions/constants'
const initialState = {
  modal: null,
  sortCriteria: 'gold-desc',
}

const interfaceReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_MODAL:
      return {
        ...state,
        openModal: state.openModal === action.payload ? null : action.payload,
      }
    case CHANGE_SORTING:
      return {
        ...state,
        sortCriteria: action.payload,
      }
    default:
      return state
  }
}

export default interfaceReducer

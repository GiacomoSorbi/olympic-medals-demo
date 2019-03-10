import { TOGGLE_MODAL } from '../actions/constants'
const initialState = {
  modal: null,
}

const interfaceReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_MODAL:
      return {
        ...state,
        openModal: state.openModal === action.payload ? null : action.payload,
      }
    default:
      return state
  }
}

export default interfaceReducer

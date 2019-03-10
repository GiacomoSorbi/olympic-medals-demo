import actionCreators from '.'

export const toggleModal = dispatch => (payload = {}) => {
  dispatch(actionCreators.toggleModal(payload))
}

export const editRow = dispatch => (payload = {}) => {
  dispatch(actionCreators.editRow(payload))
  dispatch(actionCreators.toggleModal(null))
}

export const deleteRow = dispatch => (country = null) => {
  dispatch(actionCreators.deleteRow(country))
  dispatch(actionCreators.toggleModal(null))
}

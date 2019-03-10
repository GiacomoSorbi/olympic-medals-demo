import actionCreators from '.'

export const deleteRow = dispatch => (country = null) => {
  dispatch(actionCreators.deleteRow(country))
  dispatch(actionCreators.toggleModal(null))
}

export const editRow = dispatch => (payload = {}) => {
  dispatch(actionCreators.editRow(payload))
  dispatch(actionCreators.toggleModal(null))
}

export const changeSorting = dispatch => (payload = {}) => {
  dispatch(actionCreators.changeSorting(payload))
}

export const toggleModal = dispatch => (payload = {}) => {
  dispatch(actionCreators.toggleModal(payload))
}

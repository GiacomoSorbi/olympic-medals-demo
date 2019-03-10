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

// export const editRow = dispatch => async (filters = {}) => {
//   // dispatching action triggering a loader on
//   dispatch(actionCreators.getAuctions())
//   try {
//     // starting the request
//     const res = await Api.getAuctions(filters)
//     // success clause, reduces the loader counter and update the store with the payload
//     dispatch(actionCreators.getAuctionsSuccess(res))
//   } catch (err) {
//     // failure clause, reduces the loader counter and displays an error message
//     dispatch(actionCreators.getAuctionsFailure(err))
//   }
// }

// export const submitNewAuction = dispatch => async (newAuction = {}) => {
//   dispatch(actionCreators.submitNewAuction())
//   try {
//     const res = await Api.submitNewAuction(newAuction)
//     dispatch(actionCreators.submitNewAuctionSuccess(res.id))
//   } catch (err) {
//     dispatch(actionCreators.submitNewAuctionFailure(err))
//   }
// }

// export const getConfig = dispatch => async () => {
//   dispatch(actionCreators.getConfig())
//   try {
//     const res = await Api.getConfig()
//     dispatch(actionCreators.getConfigSuccess(res))
//   } catch (err) {
//     dispatch(actionCreators.getConfigFailure(err))
//   }
// }

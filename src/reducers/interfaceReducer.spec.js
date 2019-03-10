import interfaceReducer, { initialState } from './interfaceReducer'
import { TOGGLE_MODAL, CHANGE_SORTING } from '../actions/constants'

describe('interfaceReducer should', () => {
  it('exist', () => {
    expect(interfaceReducer).not.toBeUndefined()
  })

  it('change the openModal property', () => {
    const payload = 'newCountry'
    expect(
      interfaceReducer({ ...initialState }, { type: TOGGLE_MODAL, payload }),
    ).toEqual({ ...initialState, openModal: payload })
  })

  it('change the sortCriteria property', () => {
    const payload = 'bronze-asc'
    expect(
      interfaceReducer({ ...initialState }, { type: CHANGE_SORTING, payload }),
    ).toEqual({ ...initialState, sortCriteria: payload })
  })
})

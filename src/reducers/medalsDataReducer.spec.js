import medalsDataReducer, { initialState } from './medalsDataReducer'
import { EDIT_ROW, DELETE_ROW } from '../actions/constants'

describe('medalsDataReducer should', () => {
  const initialState = {
    medalsData: [
      { name: 'USA' },
      { name: 'Germany' },
      { name: 'France' },
      { name: 'Japan' },
      { name: 'Brazil' },
      { name: 'Russia' },
    ],
  }
  it('exist', () => {
    expect(medalsDataReducer).not.toBeUndefined()
  })

  it('change an existing row', () => {
    const payload = { name: 'Latvia' }
    expect(
      medalsDataReducer(
        { medalsData: [].concat(initialState.medalsData) },
        { type: EDIT_ROW, payload },
      ),
    ).toEqual({
      medalsData: [{ name: 'Latvia' }].concat(initialState.medalsData),
    })
  })

  it('change an existing row', () => {
    const payload = 'Brazil'
    expect(
      medalsDataReducer(
        { medalsData: [].concat(initialState.medalsData) },
        { type: DELETE_ROW, payload },
      ),
    ).toEqual({
      medalsData: initialState.medalsData.filter(
        country => country.name !== payload,
      ),
    })
  })
})

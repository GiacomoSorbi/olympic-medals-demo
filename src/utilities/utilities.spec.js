import { getFormPayload, removeRow, getAvailableCountries } from './'
import { olympicMedalsByCountry } from '../fixtures/data'

describe('removeRow should', () => {
  it('exist', () => {
    expect(removeRow).not.toBeUndefined()
  })

  it('remove the required country', () => {
    const testCountry = 'USA'
    const expected = olympicMedalsByCountry.filter(
      country => country.name !== testCountry,
    )
    expect(removeRow(olympicMedalsByCountry, testCountry)).toEqual(expected)
  })

  it('return the initial set if no country matches the second parameter', () => {
    const testCountry = 'Narnia'
    expect(removeRow(olympicMedalsByCountry, testCountry)).toEqual(
      olympicMedalsByCountry,
    )
  })
})
describe('getFormPayload should', () => {
  it('exist', () => {
    expect(removeRow).not.toBeUndefined()
  })

  it('create a proper payload for a new country', () => {
    const testEvent = {
      currentTarget: {
        querySelector: query => {
          switch (query) {
            case '#name':
              return { value: 'Brazil' }
            case '#gold':
              return { value: 1 }
            case '#silver':
              return { value: 2 }
            case '#bronze':
              return { value: 3 }
            default:
              return 'Pippi'
          }
        },
      },
    }
    const testCountry = 'NewCountry'
    const expected = {
      name: 'Brazil',
      gold: 1,
      silver: 2,
      bronze: 3,
      total: 6,
    }
    expect(getFormPayload(testEvent, testCountry)).toEqual(expected)
  })

  it('create a proper payload for an existing country', () => {
    const testEvent = {
      currentTarget: {
        querySelector: query => {
          switch (query) {
            case '#gold':
              return { value: 1 }
            case '#silver':
              return { value: 2 }
            case '#bronze':
              return { value: 3 }
            default:
              return 'Pippi'
          }
        },
      },
    }
    const testCountry = 'Japan'
    const expected = {
      name: 'Japan',
      gold: 1,
      silver: 2,
      bronze: 3,
      total: 6,
    }
    expect(getFormPayload(testEvent, testCountry)).toEqual(expected)
  })
})

describe('getAvailableCountries should', () => {
  it('exist', () => {
    expect(getAvailableCountries).not.toBeUndefined()
  })

  it('filter the available countries', () => {
    const flags = {
      USA: null,
      Japan: null,
      Colombia: null,
      Argentina: null,
      Germany: null,
    }
    const currentlyUsed = [
      { name: 'USA' },
      { name: 'Germany' },
      { name: 'UK' },
      { name: 'Belgium' },
      { name: 'Sweden' },
      { name: 'Colombia' },
    ]
    expect(getAvailableCountries(flags, currentlyUsed)).toEqual([
      'Japan',
      'Argentina',
    ])
  })

  it('not filter countries if there are no available matching countries', () => {
    const flags = {
      USA: null,
      Japan: null,
      Colombia: null,
      Argentina: null,
      Germany: null,
    }
    const currentlyUsed = [
      { name: 'France' },
      { name: 'Spain' },
      { name: 'UK' },
      { name: 'Belgium' },
      { name: 'Sweden' },
      { name: 'Netherlands' },
    ]
    expect(getAvailableCountries(flags, currentlyUsed)).toEqual([
      'USA',
      'Japan',
      'Colombia',
      'Argentina',
      'Germany',
    ])
    expect(getAvailableCountries(flags, [])).toEqual([
      'USA',
      'Japan',
      'Colombia',
      'Argentina',
      'Germany',
    ])
  })
})

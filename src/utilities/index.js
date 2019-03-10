import { ascend, descend, prop, sortWith } from 'ramda'

export const removeRow = (medalsData, countryName) =>
  medalsData.filter(country => country.name !== countryName)

export const sortTable = medalsData =>
  sortWith([ascend(prop['total'])], medalsData)

export const medalTypes = ['gold', 'silver', 'bronze']

export const getFormPayload = (event, currentCountry) => {
  const payload = {}
  payload.name =
    currentCountry || event.currentTarget.querySelector('#name').value
  payload.total = 0
  medalTypes.forEach(medal => {
    payload[medal] = +event.currentTarget.querySelector(`#${medal}`).value
    payload.total += payload[medal]
  })
  return payload
}

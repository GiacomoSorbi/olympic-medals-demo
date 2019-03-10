export const removeRow = (medalsData, countryName) =>
  medalsData.filter(country => country.name !== countryName)

export const sortTable = (medalsData, key, order) => {
  return medalsData.sort(
    (a, b) => (order === 'desc' ? -1 : 1) * (a[key] - b[key]),
  )
}

export const medalTypes = ['gold', 'silver', 'bronze']
export const medalTypesTotal = medalTypes.concat('total')

export const getFormPayload = (event, currentCountry) => {
  const payload = {}
  payload.name =
    currentCountry === 'NewCountry'
      ? event.currentTarget.querySelector('#name').value
      : currentCountry
  payload.total = 0
  medalTypes.forEach(medal => {
    payload[medal] = +event.currentTarget.querySelector(`#${medal}`).value
    payload.total += payload[medal]
  })
  return payload
}

export const getAvailableCountries = (flags, currentlyUsed) => {
  const availableCountries = new Set(Object.keys(flags))
  currentlyUsed.forEach(country => availableCountries.delete(country.name))
  return Array.from(availableCountries)
}

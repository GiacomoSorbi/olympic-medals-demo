import { pathOr } from 'ramda'

const interfaceSelectors = {
  getMedalsData: pathOr(null, ['medalsData', 'medalsData']),
}

export default interfaceSelectors

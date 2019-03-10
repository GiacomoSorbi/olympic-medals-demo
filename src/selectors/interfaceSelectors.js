import { pathOr } from 'ramda'

const interfaceSelectors = {
  getOpenModal: pathOr(null, ['interface', 'openModal']),
  getSortCriteria: pathOr(null, ['interface', 'sortCriteria']),
}

export default interfaceSelectors

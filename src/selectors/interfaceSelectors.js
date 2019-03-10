import { pathOr } from 'ramda'

const interfaceSelectors = {
  getOpenModal: pathOr(null, ['interface', 'openModal']),
}

export default interfaceSelectors

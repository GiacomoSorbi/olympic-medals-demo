import stateFixture from './stateFixture'
import interfaceSelectors from './interfaceSelectors'

describe('interfaceSelectors should', () => {
  it('getOpenModal', () => {
    expect(interfaceSelectors.getOpenModal(stateFixture)).toBe(
      stateFixture.interface.openModal,
    )
  })
})

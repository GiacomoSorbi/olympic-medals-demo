import stateFixture from './stateFixture'
import medalsDataSelectors from './medalsDataSelectors'

describe('medalsDataSelectors should', () => {
  it('getMedalsData', () => {
    expect(medalsDataSelectors.getMedalsData(stateFixture)).toBe(
      stateFixture.medalsData.medalsData,
    )
  })
})

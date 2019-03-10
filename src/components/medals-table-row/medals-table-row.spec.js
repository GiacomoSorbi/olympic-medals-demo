import * as React from 'react'
import { mount } from 'enzyme'
import toJson from 'enzyme-to-json'

import MedalsTableRow from './'

describe('MedalsTableRow should', () => {
  it('exist', () => {
    expect(MedalsTableRow).not.toBeUndefined()
  })

  it('have a consistent structure', () => {
    const wrapper = mount(
      <MedalsTableRow
        countryData={{
          name: 'PippiLand',
          gold: 99,
          silver: 66,
          bronze: 33,
          total: 198,
        }}
        onEdit={jest.fn()}
      />,
    )
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})

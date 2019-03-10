import * as React from 'react'
import { mount } from 'enzyme'
import toJson from 'enzyme-to-json'

import MedalsTable from './'

describe('MedalsTable should', () => {
  it('exist', () => {
    expect(MedalsTable).not.toBeUndefined()
  })

  it('have a consistent structure', () => {
    const wrapper = mount(
      <MedalsTable
        sortCriteria='bronze-desc'
        data={[]}
        changeSorting={jest.fn()}
        onEdit={jest.fn()}
      />,
    )
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})

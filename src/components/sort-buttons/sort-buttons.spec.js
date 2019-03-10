import * as React from 'react'
import { mount } from 'enzyme'
import toJson from 'enzyme-to-json'

import SortButtons from './'

describe('SortButtons should', () => {
  it('exist', () => {
    expect(SortButtons).not.toBeUndefined()
  })

  it('have a consistent structure', () => {
    const wrapper = mount(
      <SortButtons
        sortCriteria='silver-desc'
        color='bronze'
        onClick={jest.fn()}
      />,
    )
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})

import * as React from 'react'
import { mount } from 'enzyme'
import toJson from 'enzyme-to-json'

import Medal from './'

describe('Medal should', () => {
  it('exist', () => {
    expect(Medal).not.toBeUndefined()
  })

  it('have a consistent structure', () => {
    const wrapper = mount(<Medal color='silver' />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})

import * as React from 'react'
import { mount } from 'enzyme'
import toJson from 'enzyme-to-json'

import AddButton from './'

describe('AddButton should', () => {
  it('exist', () => {
    expect(AddButton).not.toBeUndefined()
  })

  it('have a consistent structure', () => {
    const wrapper = mount(<AddButton onClick={jest.fn()} />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})

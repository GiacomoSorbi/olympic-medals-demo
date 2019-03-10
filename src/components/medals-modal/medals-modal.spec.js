import * as React from 'react'
import { mount } from 'enzyme'
import toJson from 'enzyme-to-json'

import MedalsModal from './'

describe('MedalsModal should', () => {
  it('exist', () => {
    expect(MedalsModal).not.toBeUndefined()
  })

  it('have a consistent structure', () => {
    const wrapper = mount(
      <MedalsModal
        isOpen='NewCountry'
        data={[]}
        deleteRow={jest.fn()}
        editRow={jest.fn()}
        toggleModal={jest.fn()}
      />,
    )
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})

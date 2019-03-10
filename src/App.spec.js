import React from 'react'
import ReactDOM from 'react-dom'
import { App } from './App'

describe('App should', () => {
  it('exist', () => {
    expect(App).not.toBeUndefined()
  })
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<App sortCriteria='gold-asc' data={[]} />, div)
    ReactDOM.unmountComponentAtNode(div)
  })
})

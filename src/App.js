import React, { Component } from 'react'
import logo from './icons/olympic-logo.svg'
import './App.css'
import { olympicMedalsByCountry } from './fixtures/data'
import MedalsTable from './components/medals-table'

class App extends Component {
  render() {
    return (
      <div className='App'>
        <img src={logo} className='olympic-logo' alt='logo' />
        <MedalsTable
          data={olympicMedalsByCountry}
          onEdit={event =>
            alert(`Now you edit: ${event.currentTarget.dataset.country}`)
          }
        />
      </div>
    )
  }
}

export default App

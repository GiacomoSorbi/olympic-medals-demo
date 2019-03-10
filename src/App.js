import React, { Component } from 'react'
import './App.css'
import { connect } from 'react-redux'
import { editRow, deleteRow, toggleModal } from './actions/actionDispatchers'
import MedalsTable from './components/medals-table'
import MedalsModal from './components/medals-modal'
import { getFormPayload } from './utilities'
import { default as selectors } from './selectors'

const { interfaceSelectors, medalsDataSelectors } = selectors

export class App extends Component {
  deleteRow = event => this.props.deleteRow(this.props.openModal)
  editRow = event => {
    event.preventDefault()
    const payload = getFormPayload(event, this.props.openModal)
    this.props.editRow(payload)
  }
  toggleModal = event =>
    this.props.toggleModal(event.currentTarget.dataset.country)

  render() {
    return (
      <div className='App'>
        <MedalsModal
          deleteRow={this.deleteRow}
          toggleModal={this.toggleModal}
          editRow={this.editRow}
          isOpen={this.props.openModal}
          data={this.props.data}
        />
        <MedalsTable data={this.props.data} onEdit={this.toggleModal} />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  data: medalsDataSelectors.getMedalsData(state),
  openModal: interfaceSelectors.getOpenModal(state),
})

const mapDispatchToProps = dispatch => ({
  deleteRow: deleteRow(dispatch),
  editRow: editRow(dispatch),
  toggleModal: toggleModal(dispatch),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App)

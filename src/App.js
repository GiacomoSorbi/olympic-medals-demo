import React, { Component } from 'react'
import './App.css'
import { connect } from 'react-redux'
import {
  changeSorting,
  deleteRow,
  editRow,
  toggleModal,
} from './actions/actionDispatchers'
import AddButton from './components/add-button'
import MedalsTable from './components/medals-table'
import MedalsModal from './components/medals-modal'
import { getFormPayload, sortTable } from './utilities'
import { default as selectors } from './selectors'

const { interfaceSelectors, medalsDataSelectors } = selectors

export class App extends Component {
  changeSorting = event =>
    this.props.changeSorting(event.currentTarget.dataset.sortDirection)
  deleteRow = event => this.props.deleteRow(this.props.openModal)
  editRow = event => {
    event.preventDefault()
    const payload = getFormPayload(event, this.props.openModal)
    this.props.editRow(payload)
  }
  toggleModalEdit = event =>
    this.props.toggleModal(event.currentTarget.dataset.country)
  toggleModalNew = event => this.props.toggleModal('NewCountry')

  render() {
    return (
      <div className='App'>
        <AddButton onClick={this.toggleModalNew} />
        <MedalsModal
          deleteRow={this.deleteRow}
          toggleModal={this.toggleModalEdit}
          editRow={this.editRow}
          isOpen={this.props.openModal}
          data={this.props.data}
        />
        <MedalsTable
          changeSorting={this.changeSorting}
          data={sortTable(
            this.props.data,
            ...this.props.sortCriteria.split('-'),
          )}
          onEdit={this.toggleModalEdit}
          sortCriteria={this.props.sortCriteria}
        />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  data: medalsDataSelectors.getMedalsData(state),
  openModal: interfaceSelectors.getOpenModal(state),
  sortCriteria: interfaceSelectors.getSortCriteria(state),
})

const mapDispatchToProps = dispatch => ({
  changeSorting: changeSorting(dispatch),
  deleteRow: deleteRow(dispatch),
  editRow: editRow(dispatch),
  toggleModal: toggleModal(dispatch),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App)

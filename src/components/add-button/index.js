import React from 'react'
import { Button } from 'reactstrap'
import add from '../../icons/add.svg'
import './add-button.css'

const AddButton = props => (
  <Button
    onClick={props.onClick}
    color='primary'
    className='add-button d-flex align-items-center'
  >
    <img className='add-icon' src={add} alt='edit row' />
    <div className='add-text'>Add new Entry</div>
  </Button>
)

export default AddButton

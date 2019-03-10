import React from 'react'
import { Button } from 'reactstrap'
import './sort-buttons.css'
import arrow from '../../icons/arrow.svg'

const SortButtons = props => (
  <div className='sort-buttons d-flex flex-column'>
    <Button data-country={props.medal} color='primary' onClick={props.onEdit}>
      <img src={arrow} alt='edit row' />
    </Button>
    <Button
      data-country={props.medal}
      color='primary'
      className='reversed'
      onClick={props.onEdit}
    >
      <img src={arrow} alt='edit row' />
    </Button>
  </div>
)

export default SortButtons

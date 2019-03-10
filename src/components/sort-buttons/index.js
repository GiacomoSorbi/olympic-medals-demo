import React from 'react'
import { Button } from 'reactstrap'
import './sort-buttons.css'
import arrow from '../../icons/arrow.svg'

const SortButtons = props => (
  <div className='sort-buttons d-flex flex-column'>
    <Button
      data-sort-direction={`${props.color}-desc`}
      color={
        `${props.color}-desc` === props.sortCriteria ? 'success' : 'primary'
      }
      onClick={props.onClick}
    >
      <img src={arrow} alt='edit row' />
    </Button>
    <Button
      data-sort-direction={`${props.color}-asc`}
      color={
        `${props.color}-asc` === props.sortCriteria ? 'success' : 'primary'
      }
      className='reversed'
      onClick={props.onClick}
    >
      <img src={arrow} alt='edit row' />
    </Button>
  </div>
)

export default SortButtons

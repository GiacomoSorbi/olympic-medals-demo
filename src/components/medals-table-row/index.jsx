import React from 'react'
import { Button } from 'reactstrap'
import edit from '../../icons/edit.svg'

const MedalsTableRow = props => (
  <tr>
    <th scope='row'>{props.countryData.name}</th>
    <td>{props.countryData.gold}</td>
    <td>{props.countryData.silver}</td>
    <td>{props.countryData.bronze}</td>
    <td>
      <Button
        data-country={props.countryData.name}
        color='warning'
        onClick={props.onEdit}
      >
        <img src={edit} width='16px' alt='edit row' />
      </Button>
    </td>
  </tr>
)

export default MedalsTableRow

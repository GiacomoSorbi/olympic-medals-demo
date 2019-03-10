import React from 'react'
import { Button } from 'reactstrap'
import edit from '../../icons/edit.svg'
import { flags } from '../../fixtures/data'

const MedalsTableRow = props => {
  const country = props.countryData.name
  return (
    <tr className={props.className}>
      <th className='text-left align-middle' scope='row'>
        {flags[country] ? (
          <img height='20px' src={flags[country]} alt={country} />
        ) : null}{' '}
        {country}
      </th>
      <td className='text-right border align-middle'>
        {props.countryData.gold}
      </td>
      <td className='text-right border align-middle'>
        {props.countryData.silver}
      </td>
      <td className='text-right border align-middle'>
        {props.countryData.bronze}
      </td>
      <td className='text-right border  align-middle'>
        {props.countryData.total}
      </td>
      <td className='align-middle border'>
        <Button data-country={country} color='primary' onClick={props.onEdit}>
          <img className='edit-icon' src={edit} alt='edit row' />
        </Button>
      </td>
    </tr>
  )
}

export default MedalsTableRow

import React from 'react'
import { Table } from 'reactstrap'
import MedalsTableRow from '../medals-table-row'
import './medals-table.css'

const MedalsTable = props => (
  <div className='table-width mx-auto border border-secondary'>
    <Table>
      <thead>
        <tr>
          <th>Country</th>
          <th>Gold Medals</th>
          <th>Silver Medals</th>
          <th>Bronze Medals</th>
        </tr>
      </thead>
      <tbody>
        {props.data.map(countryData => (
          <MedalsTableRow
            key={countryData.name}
            countryData={countryData}
            onEdit={props.onEdit}
          />
        ))}
      </tbody>
    </Table>
  </div>
)

export default MedalsTable

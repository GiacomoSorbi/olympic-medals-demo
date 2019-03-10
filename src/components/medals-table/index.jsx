import React from 'react'
import { Table } from 'reactstrap'
import MedalsTableRow from '../medals-table-row'
import './medals-table.css'
import logo from '../../icons/olympic-logo.svg'
import medal from '../../icons/medal.svg'
import SortButtons from '../sort-buttons'
import Medal from '../medal'

const MedalsTable = props => (
  <div className='table-container mx-auto my-5'>
    <img src={logo} className='olympic-logo' alt='logo' />
    <div className='table-responsive border border-secondary'>
      <Table>
        <thead>
          <tr className='light'>
            <th className='align-middle border'>Country</th>
            <th className='align-middle border'>
              <div className='d-flex align-items-center justify-content-between'>
                <Medal color='gold' />
                <div className='no-mobile'>Gold Medals</div>
                <SortButtons />
              </div>
            </th>
            <th className='align-middle border'>
              <div className='d-flex align-items-center justify-content-between'>
                <Medal color='silver' />
                <div className='no-mobile'>Silver Medals</div>
                <SortButtons />
              </div>
            </th>
            <th className='align-middle border'>
              <div className='d-flex align-items-center justify-content-between'>
                <Medal color='bronze' />
                <div className='no-mobile'>Bronze Medals</div>
                <SortButtons />
              </div>
            </th>
            <th className='align-middle border'>
              <div className='d-flex align-items-center justify-content-between'>
                <Medal color='all' />
                <div className='no-mobile'>Total Medals</div>
                <SortButtons />
              </div>
            </th>
            <th className='align-middle border'>Edit</th>
          </tr>
        </thead>
        <tbody>
          {props.data.map((countryData, index) => (
            <MedalsTableRow
              key={countryData.name}
              className={index % 2 ? 'light' : ''}
              countryData={countryData}
              onEdit={props.onEdit}
            />
          ))}
        </tbody>
      </Table>
    </div>
  </div>
)

export default MedalsTable

import React from 'react'
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Modal,
  ModalBody,
  ModalHeader,
} from 'reactstrap'
import Medal from '../medal'
import { flags } from '../../fixtures/data'
import { getAvailableCountries, medalTypes } from '../../utilities'

const MedalsModal = props => {
  const currentCountry = props.data.find(
    country => country.name === props.isOpen,
  )

  return (
    <Modal isOpen={Boolean(props.isOpen)} className={props.className}>
      <ModalHeader>
        {currentCountry
          ? `Edit Details for ${props.isOpen}`
          : 'Create new Entry'}
      </ModalHeader>
      <ModalBody>
        <Form onSubmit={props.editRow}>
          {currentCountry ? null : (
            <FormGroup>
              <Label for='name'>Select Country</Label>
              <Input type='select' min='0' name='name' id='name'>
                {getAvailableCountries(flags, props.data).map(country => (
                  <option value={country} key={country}>
                    {country}
                  </option>
                ))}
              </Input>
            </FormGroup>
          )}
          {medalTypes.map(medal => (
            <FormGroup key={medal}>
              <Label for={medal}>
                <Medal color={medal} />
                {medal[0].toUpperCase() + medal.slice(1)} Medals:
              </Label>
              <Input
                type='number'
                min='0'
                name={medal}
                id={medal}
                defaultValue={currentCountry ? currentCountry[medal] : 0}
              />
            </FormGroup>
          ))}
          <FormGroup className='d-flex justify-content-around'>
            <Button
              type='submit'
              color='success'
              className='d-inline-block w-25'
            >
              Save
            </Button>
            {currentCountry ? (
              <Button
                color='danger'
                className='d-inline-block w-25'
                onClick={props.deleteRow}
              >
                Delete Row
              </Button>
            ) : null}
            <Button
              color='warning'
              className='d-inline-block w-25'
              data-country={props.isOpen}
              onClick={props.toggleModal}
            >
              Cancel
            </Button>
          </FormGroup>
        </Form>
      </ModalBody>
    </Modal>
  )
}

export default MedalsModal

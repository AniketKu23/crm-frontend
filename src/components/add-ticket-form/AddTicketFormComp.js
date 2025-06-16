import React from 'react'
import { Jumbotron, Form, Button, Row, Col } from 'react-bootstrap'
import PropTypes from 'prop-types'
import './add-ticket-formStyle.css'

export const AddTicketForm = ({handleOnSubmit, handleOnChange,frmDt}) => {
    return (
    <Jumbotron className='add-new-ticket mt-3 bg-light'>
        <h1 className='text-info text-center'>Add New Ticket</h1>
        <hr />
        <Form autoComplete='off' onSubmit={handleOnSubmit}>
                <Form.Group as={Row}>
                    <Form.Label column sm={3}>Subject</Form.Label>
                    <Col sm={9}>
                        <Form.Control
                            name="subject"
                            value={frmDt.subject}
                            onChange={handleOnChange}
                            minLength="3"
                            maxLength="100"
                            placeholder="Subject"
                            required
                        />
                    </Col>
                     
                </Form.Group>
                <Form.Group as={Row}>
                    <Form.Label column sm={3}>Issue Found</Form.Label>
                    <Col>
                        <Form.Control
                            type='date'
                            name="issueDate"
                            value={frmDt.issueDate}
                            onChange={handleOnChange}
                            required
                        />
                    </Col>
                     
                </Form.Group>
                <Form.Group>
                    <Form.Label>Issue</Form.Label>
                    <Form.Control
                        as="textarea"
                        name="detail"
                        value={frmDt.detail}
                        rows={5}
                        onChange={handleOnChange}
                        required
                    />
                     
                </Form.Group>
                <Button type="submit" variant='info' block>Add New Ticket</Button>
            </Form>
    </Jumbotron>
  )
}

AddTicketForm.propTypes={
    handleOnSubmit:PropTypes.func.isRequired,
    handleOnChange:PropTypes.func.isRequired,
    frmDt:PropTypes.object.isRequired,
}
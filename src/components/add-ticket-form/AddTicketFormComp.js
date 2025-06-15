import React from 'react'
import { Jumbotron, Form, Button, Row, Col } from 'react-bootstrap'
import PropTypes from 'prop-types'

export const AddTicketForm = ({handleOnSubmit, handleOnChange,frmDt}) => {
  console.log(frmDt)
    return (
    <Jumbotron>
        <Form autoComplete='off' onSubmit={handleOnSubmit}>
                <Form.Group as={Row}>
                    <Form.Label column sm={3}>Subject</Form.Label>
                    <Col>
                        <Form.Control
                            name="subject"
                            value={frmDt.subject}
                            onChange={handleOnChange}
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
                            value={frmDt.issueDate}
                            name="issueDate"
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
                <Button type="submit" variant='info' block>Login</Button>
            </Form>
    </Jumbotron>
  )
}

AddTicketForm.propTypes={handleOnSubmit:PropTypes.func.isRequired,
    handleOnChange:PropTypes.func.isRequired,
    frmDt:PropTypes.object.isRequired,
}
import React from 'react'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import PropTypes from 'prop-types'

export const ResetPassword = ({handleOnChange, handleOnResetSubmit,formSwitcher, email}) => {
  return (
    <Container>
        <Row>
            <Col>
            <h1 className='text-info text-center'>Reset Password</h1>
            <hr />
            <Form autoComplete='off' onSubmit={handleOnResetSubmit}>
                <Form.Group>
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control
                        type="email"
                        name="email"
                        value = {email}
                        onChange={handleOnChange}
                        placeholder="Enter Email"
                        required
                    />
                     
                </Form.Group>
               
                <Button type="submit" variant='primary'>Reset Password</Button>
            </Form>
            <hr />
            </Col>
        </Row>
        <Row>
            <Col>
            <a href='#!' onClick={() => formSwitcher('login')}>Login Now!</a>
            </Col>
        </Row>
    </Container>
  )
}

ResetPassword.propTypes = {
  handleOnChange: PropTypes.func.isRequired, 
  handleOnResetSubmit: PropTypes.func.isRequired,
  formSwitcher: PropTypes.func.isRequired,
  pass: PropTypes.string.isRequired,
};
import React, { useState } from 'react'
import { Container,Row, Col } from 'react-bootstrap'
import { PageBreadcrumb } from '../../components/breadcrumb/BreadcrumbComp'
import { AddTicketForm } from '../../components/add-ticket-form/AddTicketFormComp'



const initialFormDt = {
    subject:'',
    issueDate: "",
    detail:'',
}

export const AddTicket = () => {

    const [frmData,setFrmData] = useState(initialFormDt)
    const handleOnChange = e =>{
        const {name, value} = e.target
        setFrmData({
            ...initialFormDt,
            [name]: value,
        })
    }

    const handleOnSubmit = e =>{
        e.preventDefualt()

        console.log('Form submit request recieved.')
    }

  return (
    <Container>
        <Row>
            <Col>
            <PageBreadcrumb page="New Ticket" />
            </Col>
        </Row>

        <Row>
            <Col>
                <AddTicketForm 
                handleOnChange={handleOnChange}
                handleOnSubmit={handleOnSubmit}
                frmDt = {frmData} />
            </Col>
        </Row>
    </Container>
  )
}

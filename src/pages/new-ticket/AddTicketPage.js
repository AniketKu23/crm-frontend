import React, { useEffect, useState } from 'react'
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
    useEffect(() => {}, [frmData])

    const handleOnChange = e =>{
        const {name, value} = e.target
        setFrmData({
            ...frmData,
            [name]: value,
        })
    }

    const handleOnSubmit = e =>{
        e.preventDefualt()

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

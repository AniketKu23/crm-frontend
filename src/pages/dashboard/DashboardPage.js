import React from 'react'
import { Container,Row , Col, Button } from 'react-bootstrap'
import { TicketTable } from '../../components/ticket-table/TicketTableComp'
import tickets from '../../assets/data/dummy-tickets.json'
import { PageBreadcrumb } from '../../components/breadcrumb/BreadcrumbComp'
import { Link } from 'react-router-dom'

export const Dashboard = () => {
  return (
    <Container>
        <Row>
            <Col>
                <PageBreadcrumb page="Dashboard" />
            </Col>
        </Row>
        <Row>
            <Col className='text-center mt-5 mb -2'>
            <Link to="/add-ticket">
            <Button variant='info' style={{'fontSize':'2rem',padding:"10px 30px"}} >Add new Ticket</Button>
            </Link>
            </Col>
        </Row>
        <Row>
            <Col className='text-center mb-2'>
                <div>Total Tickets : 50</div>
                <div>Pending Tickets : 5</div>
            </Col>
        </Row>
        <Row>
            <Col className='mt-2'>
                Recently Added Tickets
            </Col>
        </Row>
        
        <hr />
        <Row>
            <Col className='recent-ticket'>
                <TicketTable tickets={tickets}/>
            </Col>
        </Row>
    </Container>
  )
}

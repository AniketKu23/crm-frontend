import React, { useEffect, useState } from 'react'
import { Container,Row, Col, Button} from 'react-bootstrap'
import { PageBreadcrumb } from '../../components/breadcrumb/BreadcrumbComp'
import { SearchForm } from '../../components/search-form/SearchFormComp'
import { TicketTable } from '../../components/ticket-table/TicketTableComp'
import tickets from '../../assets/data/dummy-tickets.json'
import { Link } from 'react-router-dom'

export const TicketListsPage = () => {

    const [str, setStr] = useState('')
    const[dispTicket, setDispTicket] = useState(tickets)

    useEffect(() => {}, [str, dispTicket])

    const handleOnChange = (e) =>{
        const {value} = e.target
        setStr(value)
        searchTicket(value)
    
    }

    const searchTicket =sttr =>{
        const displayTickets = tickets.filter(row=> 
            row.subject.toLowerCase().includes(sttr.toLowerCase())
        )

        setDispTicket(displayTickets)


    }
  return (
    <Container>
        <Row>
            <Col>
                <PageBreadcrumb page="Ticket Lists" />
            </Col>
        </Row>
        <Row className='mt-4'>
            <Col>
            <Link to="/add-ticket">
                <Button variant='info'>Add New Ticket</Button>
            </Link>
            </Col>
            <Col className='text-right'>
                <SearchForm handleOnChange={handleOnChange} str={str}/>
            </Col>
        </Row>
        <hr />
        <Row>
            <Col>
                <TicketTable tickets={dispTicket} />
            </Col>
        </Row>
    </Container>
  )
}



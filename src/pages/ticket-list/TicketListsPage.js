import React, { useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { PageBreadcrumb } from "../../components/breadcrumb/BreadcrumbComp";
import { SearchForm } from "../../components/search-form/SearchFormComp";
import { TicketTable } from "../../components/ticket-table/TicketTableComp";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { fetchAllTickets } from "./TicketAction";

export const TicketListsPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllTickets());
  }, [dispatch]);

  return (
    <Container>
      <Row>
        <Col>
          <PageBreadcrumb page="Ticket Lists" />
        </Col>
      </Row>
      <Row className="mt-4">
        <Col>
          <Link to="/add-ticket">
            <Button variant="info">Add New Ticket</Button>
          </Link>
        </Col>
        <Col className="text-right">
          <SearchForm />
        </Col>
      </Row>
      <hr />
      <Row>
        <Col>
          <TicketTable />
        </Col>
      </Row>
    </Container>
  );
};

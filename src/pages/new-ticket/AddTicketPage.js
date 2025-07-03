import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { PageBreadcrumb } from "../../components/breadcrumb/BreadcrumbComp";
import { AddTicketForm } from "../../components/add-ticket-form/AddTicketFormComp";

export const AddTicket = () => {
  return (
    <Container>
      <Row>
        <Col>
          <PageBreadcrumb page="New Ticket" />
        </Col>
      </Row>

      <Row>
        <Col>
          <AddTicketForm />
        </Col>
      </Row>
    </Container>
  );
};

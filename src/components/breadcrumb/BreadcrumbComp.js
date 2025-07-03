import React from "react";
import { Breadcrumb } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

export const PageBreadcrumb = ({ page }) => {
  return (
    <Breadcrumb style={{ position: "relative", zIndex: 0, marginTop: "2rem" }}>
      <LinkContainer to="/dashboard">
        <Breadcrumb.Item>Home</Breadcrumb.Item>
      </LinkContainer>
      <Breadcrumb.Item active>{page}</Breadcrumb.Item>
    </Breadcrumb>
  );
};

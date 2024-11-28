import React from "react";
import qrenciaLogo from "../images/qrenciaLogo.png";
import "../styles/header.css";
import { Container, Row, Col } from "react-bootstrap";
export const Header = () => {
  return (
    <div id="header">
      <Container>
        <Row>
          <Col xs={6} sm={8} lg={8}>
            <a href="https://www.qrencia.com/">
              <img src={qrenciaLogo} alt="Qrencia" />
            </a>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

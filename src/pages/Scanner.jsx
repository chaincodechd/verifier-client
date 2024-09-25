import React from "react";
import { Container, Row, Col } from "reactstrap";
//  Show scanner on the page to verify
const Scanner = () => {
  return (
    <>
      <Container
        className="d-flex align-items-center justify-content-center"
        style={{ minHeight: "100vh" }}
      >
        <Row>
          <Col>
            <div
              className="text-center"
              style={{
                width: "25vw",
                height: "50vh",
                backgroundColor: "lightgray",
              }}
            >
               
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Scanner;

import React from "react";
import { Button, Container } from "reactstrap";
import { useNavigate } from "react-router-dom";

const Verify = () => {
  const navigate = useNavigate();

  const navigateToScanner = () => {
    navigate("/scanner");
  };

  return (
    <Container
      className="d-flex flex-column align-items-center justify-content-center"
      style={{ minHeight: "100vh" }}
    >
      <h1>POLYGON VERIFY</h1>
      <Button className="bg-primary" onClick={navigateToScanner}>
        Get QR Code
      </Button>
    </Container>
  );
};

export default Verify;
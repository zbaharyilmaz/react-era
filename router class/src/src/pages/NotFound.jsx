import React from "react";
import { Container } from "react-bootstrap";
import notFound from "../img/notFound.jpeg";
const NotFound = () => {
  return (
    <Container className="text-center">
      <img src={notFound} alt="" width="500px" />
      <div>
        <button className="btn btn-info">GO HOME</button>
      </div>
    </Container>
  );
};

export default NotFound;

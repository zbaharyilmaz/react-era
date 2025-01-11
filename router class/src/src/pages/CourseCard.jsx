import React from "react";
import data from "../data.js";
import { Container, Col, Card, Row, Button } from "react-bootstrap";
const CourseCard = () => {
  //!react-bootstrap ten CourseCard componenti
  //!
  return (
    <Container className="text-center">
      <Row>
        {[].map((a) => {
         
          return (
            <Col
              className="col-sm-12 col-md-6 col-lg-4 d-flex justify-content-center"
              key={""}
            >
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={""} />
                <Card.Body>
                  <Card.Title>{}</Card.Title>
                  <Card.Text>{}</Card.Text>
                  <Button variant="danger"
                 >
                    DETAILS
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default CourseCard;

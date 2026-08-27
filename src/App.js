import React from "react";
import { Navbar, Container, Nav, Card, Row, Col } from "react-bootstrap";

function App() {
  return (
    <>
      <div className="App">
        {/* Navbar */}
        <Navbar bg="dark" variant="dark" expand="lg">
          <Container>
            <Navbar.Brand href="#home">My React App</Navbar.Brand>

            <Navbar.Toggle aria-controls="basic-navbar-nav" />

            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#about">About</Nav.Link>
                <Nav.Link href="#contact">Contact</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        {/* Main content */}
        <Container className="mt-5">
          <h1 className="text-center mb-5">
            Welcome to My First React Application
          </h1>

          <Row>
            {/* Card 1 */}
            <Col md={4} className="mb-4">
              <Card>
                <Card.Body>
                  <Card.Title>React</Card.Title>

                  <Card.Text>
                    React is a JavaScript library used to build modern and
                    interactive user interfaces.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            {/* Card 2 */}
            <Col md={4} className="mb-4">
              <Card>
                <Card.Body>
                  <Card.Title>React Bootstrap</Card.Title>

                  <Card.Text>
                    React Bootstrap provides Bootstrap components that can be
                    used directly inside React applications.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            {/* Card 3 */}
            <Col md={4} className="mb-4">
              <Card>
                <Card.Body>
                  <Card.Title>Components</Card.Title>

                  <Card.Text>
                    React applications are built using reusable components that
                    help organize the user interface.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default App;
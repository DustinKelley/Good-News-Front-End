import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

const FooterPage = () => {
  return (
    <div>
        <Navbar className="justify-content-center" variant="light" bg="light">
      <Container className="justify-content-center">
          <Navbar.Brand href="/admin">
            <img
              className="footerLogo"
              src="/BlackWorld.svg"
              alt="good news logo"
            />
          </Navbar.Brand>
          <Nav>
            <Nav.Link href="/">
              &copy; {new Date().getFullYear()} Copyright: GoodNews.com
            </Nav.Link>
          </Nav>
      </Container>
        </Navbar>
    </div>
  );
};

export default FooterPage;

import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import {Navbar, NavItem} from 'react-bootstrap';


function NavBar() {
    return (
    <Navbar bg="primary" variant="dark">
      <Container>
        <Navbar.Brand href="/" className="navbar-brand">Save The Arctic</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavItem>
              <Link to="/education" className="nav-link">Education</Link>
            </NavItem>
            <NavItem>
              <Link to="/point" className="nav-link">My Points</Link>
            </NavItem>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );

}

export default NavBar;
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import {Navbar, NavItem} from 'react-bootstrap';

const navbar_color = {backgroundColor: '#ABEBFF'};

function NavBar() {
    return (
    <Navbar style={navbar_color}  variant="dark">
      <Container>
        <Navbar.Brand href="/" className="navbar-brand mb-1 h1 fs-4">Save The Arctic</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavItem>
              <Link to="/education" className="nav-link">Education</Link>
            </NavItem>
            <NavItem>
              <Link to="/quiz" className="nav-link">Quiz</Link>
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
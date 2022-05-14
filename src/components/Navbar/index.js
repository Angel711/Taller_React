import { Navbar, Container, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";

function NavbarApp() {
  return (
    <Navbar bg="danger" expand="lg" className="navbar justify-content-center">
      <Container class="d-flex ">
        <NavLink to="/" className="navbar navbar-brand text-white">
          PokeAPI
        </NavLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavLink to="/crear" className="nav-link text-white">
              Crear pokemon
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarApp;

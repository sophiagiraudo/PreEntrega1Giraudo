import CartWidget from "./CartWidget/CartWidget";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import "../../Assets/NavBar.css";
import logo from "../../Assets/Logotransp.png";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <>
      {["md"].map((expand) => (
        <Navbar key={expand} bg="light" expand={expand} className="mb-3">
          <Container fluid>
            <Navbar.Brand href="#home">
              <Link to={`/`}>
                <img
                  src={logo}
                  width="200"
                  height="85"
                  className="d-inline-block align-top"
                  alt="logo"
                />
              </Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  <img
                    src={logo}
                    width="200"
                    height="85"
                    className="d-inline-block align-top"
                    alt="logo"
                  />
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link href="#action1">
                    <Link to={`/`}>Home</Link>
                  </Nav.Link>
                  <NavDropdown
                    title="Café"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                  >
                    <NavDropdown.Item href="#action3">
                      <NavLink to={`/category/Molido`}>Molido</NavLink>
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action4">
                      <NavLink to={`/category/Grano`}>Grano</NavLink>
                    </NavDropdown.Item>
                  </NavDropdown>
                  <Nav.Link href="#action6">Contacto</Nav.Link>
                  <CartWidget href="#cart" />
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default NavBar;

import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import Logo from "./Logo.png";

function Navigation() {
  return (
    <Navbar expand="lg" className="bar container-fluid">
      <Container fluid className="mb-5">
        <Navbar.Brand href="#">
          <img src={Logo} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll"/>
        <Navbar.Collapse id="navbarScroll" className="texte">
          <Nav
            className="ml-5 my-2 my-lg-0 float-left"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <NavLink to="/Product" className="text-white px-lg-5">
              Product
            </NavLink>
            <NavLink to="/Svice" className="text-white px-lg-5">
              Service
            </NavLink>
            <NavLink to="/Footers" className="text-white px-lg-5">
              About
            </NavLink>
            <NavLink to="#" disabled className="px-lg-5">
              <button className="bg-white text-dark rounded  border-none">
                Login
              </button>
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
export default Navigation;

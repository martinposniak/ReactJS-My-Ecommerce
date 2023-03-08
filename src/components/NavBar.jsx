import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from './CartWidget';


function NavBarMatchPointPalermo() {
  return (
    <Navbar bg="primary" expand="lg">
      <Container>
        <Navbar.Brand href={"/"}>Match Point Palermo</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href={"/catalogue"}>Catálogo</Nav.Link>
            <NavDropdown className='menu-list' title="Categorias" id="basic-nav-dropdown">
              <NavDropdown.Item href={`/category/${"raquets"}`}>Raquetas</NavDropdown.Item>
              <NavDropdown.Item href={`/category/${"shoes"}`}>
                Zapatillas
              </NavDropdown.Item>
              <NavDropdown.Item href={`/category/${"balls"}`}>Pelotas</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/About">Contacto</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
      <CartWidget/>
    </Navbar>
  );
}

export default NavBarMatchPointPalermo;

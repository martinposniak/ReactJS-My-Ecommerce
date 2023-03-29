import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from './CartWidget';
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from '../context/ShoppingCartContext';
import Logout from '../page/Logout';
import { FiUser } from 'react-icons/fi';


function NavBarMatchPointPalermo() {
  const { isLogged } = useContext(CartContext)
  return (
    <Navbar bg="primary" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to={"/"}>Match Point Palermo</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to={"/catalogue"}>Catálogo</Nav.Link>
            <NavDropdown className='menu-list' title="Categorias" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to={`/category/${"raquets"}`}>Raquetas</NavDropdown.Item>
              <NavDropdown.Item as={Link} to={`/category/${"shoes"}`}>
                Zapatillas
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to={`/category/${"balls"}`}>Pelotas</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={Link} to={"/Contact"}>Contacto</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
      {/*Acá lo que hice fue un condicional, donde diga que si está logueado que muestre el cerrar sesión, sino que muestre iniciar sesión
*/}
      {isLogged ? <Logout /> : <Nav.Link className='logInButton' as={Link} to={"/login"}><FiUser size="3rem"/><h6>Iniciar sesión</h6></Nav.Link>}
      <CartWidget/>
    </Navbar>
  );
}

export default NavBarMatchPointPalermo;

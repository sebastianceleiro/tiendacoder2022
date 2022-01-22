import {Navbar, Container, Nav} from 'react-bootstrap'
import CartWidget from './CartWidget';
import {Link} from 'react-router-dom' ;

function NavBar ()  {

    return ( 
        <>
  <Navbar bg="primary" variant="dark">
    <Container>
    <Navbar.Brand>Tienda Deportes</Navbar.Brand>
    <Nav className="me-auto">
    <Link className="nav-link" to={'/'}>Inicio</Link>
    <Link className="nav-link" to={'/'}>Acerca de nosotros</Link>
    </Nav>
    <CartWidget/>
    </Container>
  </Navbar>
</>
    )
}

export default NavBar ;
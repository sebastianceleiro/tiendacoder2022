import {Navbar, Container, Nav} from 'react-bootstrap'
import CartWidget from './CartWidget';

function NavBar ()  {

    return ( 
        <>
  <Navbar bg="success" variant="dark">
    <Container>
    <Navbar.Brand href="#home">Tienda</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="#home">Inicio</Nav.Link>
      <Nav.Link href="#features">Productos</Nav.Link>
      <Nav.Link href="#pricing">Acerca de nosotros</Nav.Link>
    </Nav>
    <CartWidget/>
    </Container>
  </Navbar>
</>
    )
}

export default NavBar ;
import {Navbar, Container, Nav} from 'react-bootstrap'

function NavBar ()  {

    return ( 
        <>
  <Navbar bg="primary" variant="dark">
    <Container>
    <Navbar.Brand href="#home">Menu</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="#home">Inicio</Nav.Link>
      <Nav.Link href="#features">Productos</Nav.Link>
      <Nav.Link href="#pricing">Acerca de nosotros</Nav.Link>
    </Nav>
    </Container>
  </Navbar>
</>
    )
}

export default NavBar ;
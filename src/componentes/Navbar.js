import {Navbar, Container, Nav} from 'react-bootstrap'
import CartWidget from './CartWidget';
import {Link} from 'react-router-dom' ;

function NavBar ()  {

    return ( 
        <>
  <Navbar bg="primary" variant="dark">
    <Container>
    <Link className="nav-link" to={'/'}>
    <Navbar.Brand>Tienda Deportes</Navbar.Brand></Link>
    <Nav className="me-auto">
    <Link className="nav-link" to={'/categoria/Camisetas'}>Camisetas</Link>
    <Link className="nav-link" to={'/categoria/Shorts'}>Shorts</Link>
    <Link className="nav-link" to={'/categoria/Otros'}>Otros</Link>
    </Nav>
    <CartWidget/>
    </Container>
  </Navbar>
</>
    )
}

export default NavBar ;
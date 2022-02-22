import {Navbar, Container, Nav, NavDropdown} from 'react-bootstrap'
import CartWidget from './CartWidget';
import {Link} from 'react-router-dom' ;

function NavBar ()  {

    return ( 
        <>
<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
  <Link className="nav-link" to={'/'}>
    <Navbar.Brand href="#home">
        <img
          alt=""
          src="/icohome.png"
          width="30"
          height="30"
          className="d-inline-block align-top"
        />{' '}
      ReactSports
      </Navbar.Brand></Link>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
    <Link className="nav-link" to={'/categoria/Camisetas'}>Camisetas</Link>
    <Link className="nav-link" to={'/categoria/Shorts'}>Shorts</Link>
    <Link className="nav-link" to={'/categoria/Otros'}>Otros</Link>
    </Nav>
    <Nav>
    <Link to={'/cart'}><CartWidget/></Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
</>
    )
}

export default NavBar ;
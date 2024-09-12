'use client'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';




export default function BarraNavegacao() {

  return (
 
<Navbar bg="dark" data-bs-theme="dark">
<Container>
  <Navbar.Brand href="/">MOVIES</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="me-auto">

      
      

      <NavDropdown title="Filmes" id="basic-nav-dropdown">
        <NavDropdown.Item href="/filmes">Filmes Populares</NavDropdown.Item>
       
        <NavDropdown.Item href="/filmes/top">Melhores Avaliados</NavDropdown.Item>

        <NavDropdown.Item href="/filmes/cartaz">Filmes em Cartaz</NavDropdown.Item>

        <NavDropdown.Item href="/filmes/lancamento">Filmes em Lançamentos</NavDropdown.Item>



        

      </NavDropdown>
    </Nav>
  </Navbar.Collapse>
</Container>
</Navbar>

    
  )
}


import { useContext } from 'react'
import { PictureContext } from '../context/PictureContext'
import { Link } from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import '../assets/css/Navigation.css'

const Navigation = () => {
  const { filterLiked } = useContext(PictureContext)

  return (
    <Navbar collapseOnSelect expand='md' fixed='top' className='nav-bar'>
      <Container>
        <h3 className='me-5 brand-text'>Street Art Gallery</h3>
        <Navbar.Toggle aria-controls='responsive-navbar-nav' />
        <Navbar.Collapse id='responsive-navbar-nav'>
          <Nav className='me-auto'>
            <Link to='/' className='me-3'> Home </Link>
            <Link to='/favoritos'> Favoritos </Link>
          </Nav>
        </Navbar.Collapse>
        <Nav className='d-flex'>
          <p className='m-0'>Obras favoritas: {filterLiked.length}</p>
        </Nav>
      </Container>

    </Navbar>
  )
}
export default Navigation

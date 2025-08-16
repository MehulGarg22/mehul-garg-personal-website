import { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './navbar.css';
import { array } from '../constant.js/constant';

function NavbarMain() {
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className='navContainer'>
      <Navbar expand="lg" className={`custom-navbar ${scrolled ? 'scrolled' : ''}`} fixed="top">
        <Container>
          <Navbar.Brand href="#home" className="brand-link">
            <img className="brand-image" src={array[2].imageSource} alt="Home"/>
            <span className="brand-text">Home</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" className="custom-toggler" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              {array.map((item, index) => (
                <Nav.Link 
                  key={index} 
                  href={`#${item.text}`} 
                  className="nav-item-link"
                >
                  <img className="nav-image" src={item.imageSource} alt={item.text}/>
                  <span className="nav-text">{item.text}</span>
                </Nav.Link>
              ))}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavbarMain;

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './navbar.css';
import { array } from '../constant.js/constant';

function NavbarMain() {

  return (
    <div className='navContainer'>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home"><img className="image" src={array[2].imageSource} alt=""/>Home</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              {
                  array.map((item)=>{
                      return <Nav.Link href={`#${item.text}`}><img className="image" src={item.imageSource} alt=""/><span className="textLine">{item.text}</span></Nav.Link>
                  })
              }
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavbarMain;
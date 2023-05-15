import React from "react";
import {Navbar,Container,Nav} from 'react-bootstrap';
import { Link } from "react-router-dom";
import {logo} from '../../assets/image/logo192.png';
import "../../assets/css/main.css";
const Navigation=()=>{
    return(
        <div >
             <Navbar  expand="lg">
      <Container className="navlink" >
        <Navbar.Brand ><Link to="/" className="navigation"><img  src="logo192.png" width={60}></img></Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav >
            <Nav.Link> <Link to="/"  className="navigation">خانه</Link></Nav.Link>
            <Nav.Link> <Link to="/Product"  className="navigation">محصولات</Link></Nav.Link>
            <Nav.Link> <Link to="/Order"  className="navigation">سفارشات</Link></Nav.Link>
            <Nav.Link>  <Link to="/About"  className="navigation">درباره ما</Link></Nav.Link>
            <Nav.Link>  <Link to="/Contact"  className="navigation">تماس با ما</Link></Nav.Link>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        </div>
    )
}
export default Navigation;
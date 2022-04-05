/*!

*/
/*eslint-disable*/
import React from "react";
// reactstrap components
import { Link } from "react-router-dom";

import {
  
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
} from "reactstrap";

class CardsFooter extends React.Component {
  render() {
    return (
      <>
        <footer className="footer ">
          <Container className="container-lg">
            <Row>
              <Col md="3">
              <div className="mr-lg-5 mt-5" to="/" tag={Link}>
                <img
                  alt="..."
                  src={require("assets/img/brand/Logo-colored.png")} 
                  width='150'
                />
                <p className="fit mt-2" style={{fontSize:'14px', fontWeight:'300'}}>To create legal awareness among the people and to make the legal 
                  services flexible, accessible for everyone.</p>
              </div>              
              
              
              </Col>
              <Col md="3">
              <h2 className="foothead mt-5">Quick Links</h2>
              <Nav className=" ml-lg-auto footlink" navbar>
                  <NavItem>
                    <NavLink
                      className="footlink"
                      href="#"
                      
                    
                      target="_blank"
                    >
                     <p>Talk To A Lawyer </p>
                    </NavLink>
                    
                  </NavItem>
                  <NavItem>
                    <NavLink
                      className="footlink"
                      href="#"
                     
                      target="_blank"
                    >
                     <p>Ask A Question  </p>
                    </NavLink>
                    
                  </NavItem>
                  <NavItem>
                    <NavLink
                      className="footlink"
                      href="#"
                      
                      target="_blank"
                    >
                      <p>Hire A Lawyer  </p>
                    </NavLink>
                    
                  </NavItem>
                  <NavItem>
                    <NavLink
                      className="footlink"
                      href="#"
                      target="_blank"
                    >
                     <p> B-Lawgs  </p>
                    
                    </NavLink>
                    
                  </NavItem>
                  <NavItem>
                    <NavLink
                      className="footlink"
                      href="#"
                      target="_blank"
                    >
                     <p> Write For Us </p>
                     
                    </NavLink>
                    
                  </NavItem>
                  
                  
                  
                </Nav>
              </Col>
              <Col md="3">
                <h2 className="foothead mt-5">Contact Us</h2>
              <Nav className=" ml-lg-auto footlink" navbar>
                  <NavItem>
                    <NavLink
                      className="footlink"
                      href="#"
                      
                    
                      target="_blank"
                    >
                     <p>info@attornea.com  </p>
                    </NavLink>
                    
                  </NavItem>
                  <NavItem>
                    <NavLink
                      className="footlink"
                      href="#"
                     
                      target="_blank"
                    >
                     <p>0335-4655480</p>
                    </NavLink>
                    
                  </NavItem>
                  <NavItem>
                    <NavLink
                      className="footlink"
                      href="#"
                      
                      target="_blank"
                    >
                      <p>Building No 977 Block J-II, Behind McDonalds Johar town, Lahore </p>
                    </NavLink>
                    
                  </NavItem>
                  
                </Nav>
              </Col>
              <Col md="3">
                <h2 className="foothead mt-5">Get Connected</h2>
                <Nav className="align-items-center justify-content-md-between" >
                  <NavItem>
                    <NavLink
                      className="footersocial "
                      href="#"
                      target="_blank"
                    >
                      <i class="fab fa-whatsapp"></i>
                    </NavLink>
                    
                  </NavItem>
                  <NavItem>
                    <NavLink
                      className="footersocial"
                      href="#"
                      target="_blank"
                    >
                      <i className="fab fa-twitter" />
                      
                    </NavLink>
                    
                  </NavItem>
                  <NavItem>
                    <NavLink
                      className="footersocial"
                      href="#"
                      
                      target="_blank"
                    >
                      
                      <i className="fab fa-instagram" />
                      
                    </NavLink>
                    
                  </NavItem>
                  <NavItem>
                    <NavLink
                      className="footersocial"
                      href="#"
                      
                      target="_blank"
                    >
                      <i class="fab fa-facebook-messenger"></i>
                      
                    </NavLink>
                    
                  </NavItem>
                  
                </Nav>
                <Nav className=" ml-lg-auto footlink" navbar>
                  
                  <NavItem>
                    <NavLink
                      className="footlink"
                      href="#"
                     
                      target="_blank"
                    >
                     <p>Play Store </p>
                    </NavLink>
                    
                  </NavItem>
                  <NavItem>
                    <NavLink
                      className="footlink"
                      href="#"
                      
                      target="_blank"
                    >
                      <p>App Store </p>
                    </NavLink>
                    
                  </NavItem>
                  
                </Nav>
              </Col>
            </Row>
          </Container>
          <Container>
            <hr />
            <Row className="align-items-center justify-content-md-between">
              <Col md="6">
              <Row>
                <Col md="12">
                <div className="copyright">
                 
                
                
                  <Nav className="nav-footer ">
                  <NavItem>
                    <NavLink>
                  © {new Date().getFullYear()}{" "}
                  <a
                    href="#"
                    target="_blank"
                  >
                   Attornea. All rights reserved
                  </a>
                  .
                  </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      href="#"
                      target="_blank"
                    >
                      Privacy
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      href="#"
                      target="_blank"
                    >
                      Terms
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      href="#"
                      target="_blank"
                    >
                      Sitemap
                    </NavLink>
                  </NavItem>
                 
                </Nav>
                </div>
                </Col>
                </Row>
              </Col>
               <Col md="3">
               
              </Col> 
            </Row>
          </Container>
        </footer>
      </>
    );
  }
}

export default CardsFooter;

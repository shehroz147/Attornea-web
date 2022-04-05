/*!


*/
import React from "react";
import { Link } from "react-router-dom";
// JavaScript plugin that hides or shows a component based on your scroll
// reactstrap components
import {
Progress,
  UncontrolledCollapse,
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
  UncontrolledDropdown,
  Button,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
 
} from "reactstrap";
import UnreadMessageMenu from "views/IndexSections/UnreadMessageMenu";
import ReadMessageMenu from "views/IndexSections/ReadMessageMenu";
import { LinkOff } from "@material-ui/icons";


// class Modals extends React.Component {
//   state = {};
//   toggleModal = state => {
//     this.setState({
//       [state]: !this.state[state]
//     });
//   };
// }
class DemoNavbar extends React.Component {
  onClick = (e) => {
    e.preventDefault()
    
  }
  state = {
    collapseClasses: "",
    collapseOpen: false
  };

  onExiting = () => {
    this.setState({
      collapseClasses: "collapsing-out"
    });
  };

  onExited = () => {
    this.setState({
      collapseClasses: ""
    });
  };
  state = {};
  toggleModal = state => {
    this.setState({
      [state]: !this.state[state]
    });}
  render() {
    return (
      <>
        <header className="header-global">
          <Navbar
            className="navbar-main navbar-transparent shadow profilenav"
            expand="lg"
            id="navbar-main"
            style={{ "background-color":"#fff ", color:"#181818" }}
          >
            <Container>
              <div className="mr-lg-5 " to="/" tag={Link}>
                <img
                  alt="..."
                  src={require("assets/img/brand/Logo-colored.png")} 
                  width='150'
                />
              </div>
              <button className="navbar-toggler " id="navbar_global">
              <i class="fas fa-bars become"></i>
              </button>
              <UncontrolledCollapse
                toggler="#navbar_global"
                navbar
                className={this.state.collapseClasses}
                onExiting={this.onExiting}
                onExited={this.onExited}
              >
                <div className="navbar-collapse-header">
                  <Row>
                    <Col className="collapse-brand" xs="6">
                      <Link to="/">
                        <img
                          alt="..."
                          // src={require("assets/img/brand/")}
                        />
                      </Link>
                    </Col>
                    <Col className="collapse-close" xs="6">
                      <button className="navbar-toggler" id="navbar_global">
                        <span />
                        <span />
                      </button>
                    </Col>
                  </Row>
                </div>
                <Nav className="navbar-nav-hover align-items-lg-center ml-lg-auto profilenav" navbar>
                <NavItem>
                    <NavLink to="/listing" tag={Link}>
                      Home
                    </NavLink>
                  </NavItem>
                  
                  <UncontrolledDropdown nav>
                    <DropdownToggle nav>
                      <i className="ni ni-collection d-lg-none mr-1" />
                      <span className="nav-link-inner--text ">services</span>
                    </DropdownToggle>
                    <DropdownMenu>
                      <DropdownItem to="/landing-page" tag={Link}>
                      Make A Document
                      </DropdownItem>
                      <DropdownItem to="/profile-page" tag={Link}>
                      Ask A Question
                      </DropdownItem>
                      <DropdownItem to="/login-page" tag={Link}>
                      Talk To A lawyer
                      </DropdownItem>
                      <DropdownItem to="/register-page" tag={Link}>
                      Hire A Lawyer
                      </DropdownItem>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                  <NavItem>
                    <NavLink to="/listing" tag={Link}>
                      
                      <Link to = "/login"><Button
                        className=" "
                        
                        href="#"
                        size="lg"
                        style={{background:'#29406c', color:'#fff'}}


                        
                      >
                      <span className="btn-inner--text" style={{ color:'#fff', fontWeight:'300' }}>Login</span>
                      </Button></Link>
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink to="/listing" tag={Link}>
                      
                     <Link to = "/register"> <Button
                        className=" "
                        
                        href="#"
                        size="lg"
                        style={{background:'#29406c', color:'#fff'}}


                        
                      >
                      <span className="btn-inner--text"  style={{ color:'#fff', fontWeight:'300' }}>Sign up</span>
                      </Button></Link>
                    </NavLink>
                  </NavItem>
                </Nav>
                {/* <Nav className="navbar-nav-hover align-items-lg-center ml-lg-auto profilenav" navbar>
                 
                  <NavItem>
                    <NavLink>
                    <i class="fas fa-search"></i>
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink to="/listing" tag={Link}>
                      Create Listing
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink>
                    Bookings
                    </NavLink>
                  </NavItem>
                  <NavItem>
                  <UncontrolledDropdown alignright nav>
                    <DropdownToggle nav>
                    <i class="fas fa-bell"></i>  
                    </DropdownToggle>
                    <DropdownMenu alignright className="dropdown-menu-right mymenu"
                    style={{positon:"absolute", minWidth:'25rem'}}
                    >
                      <DropdownItem className="p-0"> 
                      <h4 className="p-3 pl-4 ">Notification <span class="text-right pr-4" style={{float:'right' }}><i class="fas fa-ellipsis-v"></i></span> </h4>
                      <p className="notilabel pl-3 pb-1 pt-3"> Today</p>
                      <UnreadNotifyMenu />
                      </DropdownItem>
                      <p className="notilabel pl-3 pb-1 pt-3"> Yesterday</p>
                      <DropdownItem className="p-0"> 
                      <ReadNotifyMenu />
                      </DropdownItem>
                      
                     
                      
              
                      <DropdownItem
                      className="text-center">
                        <p>See all</p>
                      </DropdownItem>
                     
                      
                    </DropdownMenu>
                  </UncontrolledDropdown>
                    
                  </NavItem>

                  <NavItem>
                  <UncontrolledDropdown alignright nav>
                    <DropdownToggle nav>
                    <i class="fas fa-envelope"></i>
                    </DropdownToggle>
                    <DropdownMenu alignright className="dropdown-menu-right mymenu"
                    style={{positon:"absolute", minWidth:'25rem'}}
                    >
                      <DropdownItem className="p-0"> 
                      <h4 className="p-3 pl-4 ">Messages <span class="text-right pr-4" style={{float:'right' }}><i class="fas fa-ellipsis-v"></i></span> </h4>
                      <p className="notilabel pl-3 pb-1 pt-3"> Today</p>
                      <UnreadMessageMenu />
                      </DropdownItem>
                      <p className="notilabel pl-3 pb-1 pt-3"> Yesterday</p>
                      <DropdownItem className="p-0"> 
                      <ReadMessageMenu />
                      </DropdownItem>
                      
                     
                      
              
                      <DropdownItem
                      className="text-center">
                        <p>See all</p>
                      </DropdownItem>
                     
                      
                    </DropdownMenu>
                  </UncontrolledDropdown>
                    
                  </NavItem>
                  
                  
                  <NavItem>
                    <UncontrolledDropdown alignright nav>
                    <DropdownToggle nav>
                    <i class="far fa-user text-black p-0 userback" ></i>  
                    </DropdownToggle>
                    <DropdownMenu alignright className="dropdown-menu-right mymenu px-lg-2"
                    
                    style={{positon:"absolute", }}
                    >
                      <DropdownItem>
                      <Row>
                        <Col sm="4" xs="4">
                        <img
                          alt="..."
                          className="img-fluid rounded "
                          src={require("assets/img/theme/john.png")}
                          style={{ width: "auto" }}
                        />
                        </Col>
                        <Col sm="8" xs="8" className="p-0">
                        <h4 className="fit mb-0">John</h4>
                        <span className="list">JohnDoe@gmail.com</span>
                        </Col>
                        </Row>
                        <p className="mb-0 listt">3 steps left</p>
                        <Progress max="100" value="25" color="success" />
                        <span className="modee">Complete your profile in order to publish listing.</span>
                      </DropdownItem>
                     
                      
              
                      <DropdownItem
                      className="bordery"
                      >
                        <Row>
                          <Col sm="10" xs="10" >
                        <span className="modee">You are currently in Provider Mode</span>
                        <p className="mb-0 mt-3 sitch">Switch to User </p>
                        </Col>
                        <Col sm="2" xs="2"  >
                        <img className="mt-5" src={sitch} />
                        </Col>
                        </Row>
                      </DropdownItem>
                      <DropdownItem
                      className="bordery"
                      >
                        <Row>
                          <Col sm="10" xs="10" >
                        <span></span>
                        <p className="mb-0 listt">Provider Management </p>
                        </Col>
                        <Col sm="2" xs="2"  >
                        <img className="alignend" src={arow} />
                        </Col>
                        </Row>
                      </DropdownItem>
                      <DropdownItem
                      className="bordery"
                      >
                        <Row>
                          <Col sm="10" xs="10" >
                        <span></span>
                        <p className="mb-0 listt">Profile </p>
                        </Col>
                        <Col sm="2" xs="2"  >
                        <img className="alignend" src={arow} />
                        </Col>
                        </Row>
                      </DropdownItem>
                      <DropdownItem
                      className="bordery"
                      >
                        <Row>
                          <Col sm="10" xs="10" >
                        <span></span>
                        <p className="mb-0 listt">Financials </p>
                        </Col>
                        <Col sm="2" xs="2"  >
                        <img className="alignend" src={arow} />
                        </Col>
                        </Row>
                      </DropdownItem>
                      <DropdownItem
                      className="bordery"
                      >
                        <Row>
                          <Col sm="10" xs="10" >
                        <span></span>
                        <p className="mb-0 listt">Performance </p>
                        </Col>
                        <Col sm="2" xs="2"  >
                        <img className="alignend" src={arow} />
                        </Col>
                        </Row>
                      </DropdownItem>
                      <DropdownItem
                      className="bordery"
                      >
                        <Row>
                          <Col sm="10" xs="10" >
                        <span></span>
                        <p className="mb-0 listt">Network & Sharing </p>
                        </Col>
                        <Col sm="2" xs="2"  >
                        <img className="alignend" src={arow} />
                        </Col>
                        </Row>
                      </DropdownItem>
                      <DropdownItem
                      className="bordery"
                      >
                        <Row>
                          <Col sm="10" xs="10" >
                        <span></span>
                        <p className="mb-0 listt">Tools</p>
                        </Col>
                        <Col sm="2" xs="2"  >
                        <img className="alignend" src={arow} />
                        </Col>
                        </Row>
                      </DropdownItem>
                      <DropdownItem
                      className="bordery"
                      >
                        <Row>
                          <Col sm="10" xs="10" >
                        <span></span>
                        <p className="mb-0 listt">Security </p>
                        </Col>
                        <Col sm="2" xs="2"  >
                        <img className="alignend" src={arow} />
                        </Col>
                        </Row>
                      </DropdownItem>
                      <DropdownItem
                      className="bordery"
                      >
                        <Row>
                          <Col sm="10" xs="10" >
                        <span></span>
                        <p className="mb-0 listt">Trust & Safety </p>
                        </Col>
                        <Col sm="2" xs="2"  >
                        <img className="alignend" src={arow} />
                        </Col>
                        </Row>
                      </DropdownItem>
                      <DropdownItem
                      className="bordery"
                      >
                        <Row>
                          <Col sm="10" xs="10" >
                        <span></span>
                        <p className="mb-0 listt">Support </p>
                        </Col>
                        <Col sm="2" xs="2"  >
                        <img className="alignend" src={arow} />
                        </Col>
                        </Row>
                      </DropdownItem>
                      <DropdownItem
                      className="bordery"
                      >
                        <Row>
                          <Col sm="10" xs="10" >
                        <span></span>
                        <p className="mb-0 listt">Legal </p>
                        </Col>
                        <Col sm="2" xs="2"  >
                        <img className="alignend" src={arow} />
                        </Col>
                        </Row>
                      </DropdownItem>
                      <DropdownItem
                      className="bordery"
                      >
                        <Row>
                          <Col sm="10" xs="10" >
                        <span></span>
                        <p className="mb-0 listt">Logout</p>
                        </Col>
                        <Col sm="2" xs="2"  >
                        
                        </Col>
                        </Row>
                      </DropdownItem>
                     
                      
                    </DropdownMenu>
                  </UncontrolledDropdown>
                  </NavItem>
                  
                </Nav> */}
                
              </UncontrolledCollapse>
            </Container>
          </Navbar>
        </header>
      </>
    );
  }
}





export default () => {
  return(
    <>
      <DemoNavbar />
      
    </>
  )
}
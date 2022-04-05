import React, { Component } from 'react'
// reactstrap components
import { Button, Card, Container, Row , Col } from "reactstrap";
import { getUser, removeUserSession } from '../../Utils/Common';

import pic from "../../assets/img/theme/profile.svg"

// core components
import ProfileNavbar from "components/Navbars/ProfileNavbar.js";
import CardsFooter from "components/Footers/CardsFooter";
import Breadcrumbs from "components/Navbars//Breadcrumbs"
import { Link } from 'react-router-dom';
export class Create extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    };

    render() {
     
        return (
           <>
           <ProfileNavbar />
           <Breadcrumbs />
        <main 
        className="profile-page " 
        ref="main" 
        style={{background:"#F8FAFF" }}
        >
          <section className="section ">
            <Container>
              <Row>
                <Col md="12">
                  <div className="text-center">
                    <p className="acounthead mb-1">Create a listing</p>
                    <p className="servicesubheadmain">Let's get your listings online. Add the Services, Events, or Facilities you want 
                      <br />  offer, so people can book them</p>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col md='4' sm="1">
                  <Card className="card-profile serviceslist mt-0 shadow ">
                    <div className="px-4 pt-9 textback">
                        <a className="servicehead mb-1" href="/list" tag={Link} >      
                        Services (+ Virtual)
                        </a>
                        <p className= "servicesubhead">
                        Add Services people can book here
                        </p>
                    </div>                   
                  </Card>
                </Col>
                <Col md='4' sm="1">
                  <Card className="card-profile eventlist mt-0 shadow ">
                    <div className="px-4 pt-9 textback">
                        <p className="servicehead mb-1">      
                        Events (+ Virtual)
                        </p>
                        <p className= "servicesubhead">
                          Add Events people can book here
                        </p>
                    </div>                   
                  </Card>
                </Col>
                <Col md='4' sm="1">
                  <Card className="card-profile facilitylist mt-0 shadow ">
                    <div className="px-4 pt-9 textback">
                        <p className="servicehead mb-1">      
                        Facilities
                        </p>
                        <p className= "servicesubhead">
                        Add Facilities customers can rent here
                        </p>
                    </div>                   
                  </Card>
                </Col>
              </Row>
            </Container>
            
          </section>
          <CardsFooter />
        </main>
           </>
        )
    }
}

export default Create

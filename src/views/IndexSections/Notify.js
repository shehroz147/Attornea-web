import React, { Component } from 'react'
// reactstrap components
import { Button, Card, Container , Row , Col } from "reactstrap";




export class Notify extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    };

    render() {

        return (
           <>
                <Container>
                    <Col sm="2">
                        <label className="notilabel pt-4 pl-4">
                        Today    
                        </label>
                    </Col> 
                </Container>
                <Row
                className="unread m-0 pt-4"
                >

                <Col md="12 px-7">
                   
                    <Row className="borderbot1 pb-4">
                        <Col sm="1" xs="1">
                        <div className="reddot"></div>
                        <img
                        alt="..."
                        className="img-fluid rounded "
                        src={require("assets/img/theme/john.png")}
                        style={{ width: "auto" }}
                        />
                        </Col>
                        <Col sm="8" xs="8" className="p-0">
                        <h4 className="small-text  mb-0 mt-0">You received a new Booking</h4>
                        <span className="formsublabel ">11:10 PM</span>
                        </Col>
                    </Row>
                </Col>
                </Row>
                <Row
                className="unread m-0 pt-4"
                >

                <Col md="12 px-7">
                   
                    <Row className="borderbot1 pb-4">
                        <Col sm="1" xs="1">
                        <div className="reddot"></div>
                        <img
                        alt="..."
                        className="img-fluid rounded "
                        src={require("assets/img/theme/john.png")}
                        style={{ width: "auto" }}
                        />
                        </Col>
                        <Col sm="8" xs="8" className="p-0">
                        <h4 className="small-text  mb-0 mt-0">You received a new Booking</h4>
                        <span className="formsublabel ">11:10 PM</span>
                        </Col>
                    </Row>
                </Col>
                </Row>
                <Container>
                    <Col sm="2">
                        <label className="notilabel pt-4 pl-4">
                        Yesterday    
                        </label>
                    </Col> 
                </Container>
                <Row
                className=" m-0 pt-4"
                >

                <Col md="12 px-7">
                   
                    <Row className="borderbot1 pb-4">
                        <Col sm="1" xs="1">
                        <img
                        alt="..."
                        className="img-fluid rounded "
                        src={require("assets/img/theme/john.png")}
                        style={{ width: "auto" }}
                        />
                        </Col>
                        <Col sm="8" xs="8" className="p-0">
                        <h4 className="small-text  mb-0 mt-0">You received a new Booking</h4>
                        <span className="formsublabel ">11:10 PM</span>
                        </Col>
                    </Row>
                </Col>
                </Row>
                <Row
                className=" m-0 pt-4"
                >

                <Col md="12 px-7">
                   
                    <Row className="borderbot1 pb-4">
                        <Col sm="1" xs="1">
                        <img
                        alt="..."
                        className="img-fluid rounded "
                        src={require("assets/img/theme/john.png")}
                        style={{ width: "auto" }}
                        />
                        </Col>
                        <Col sm="8" xs="8" className="p-0">
                        <h4 className="small-text  mb-0 mt-0">You received a new Booking</h4>
                        <span className="formsublabel ">11:10 PM</span>
                        </Col>
                    </Row>
                </Col>
                </Row>
                
                
              
        
           </>
        )
    }
}

export default Notify

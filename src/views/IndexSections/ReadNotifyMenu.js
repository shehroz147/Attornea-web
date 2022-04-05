import React, { Component } from 'react'
// reactstrap components
import { Button, Card, Container , Row , Col } from "reactstrap";




export class ReadNotifyMenu extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    };

    render() {

        return (
           <>
            <Row
                className=" m-0 pt-4"
                >

                <Col md="12 px-5">
                   
                    <Row className="borderbot1 pb-4">
                        <Col sm="4" xs="4">
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

export default ReadNotifyMenu

import React from "react";

import {
    Container,
    Row,
    Col,
    FormGroup,
    Button,
    Input,
    InputGroup,
  } from "reactstrap";

export default function HireALawyer() {
  return (
    <Container
      style={{
        width: "60%",
        backgroundColor: "#706561",
        opacity: "1",
        paddingLeft: "40px",
      }}
    >
      <Row>
        <Col
          className="text-center Select-container"
          lg="12"
          style={{ padding: "10px 3px 10px 3px" }}
        >
          <span>PROVINCE</span>
          <select
            name="province"
            id="provice"
            style={{
              padding: "20px 50px 10px 10px",
              marginRight: "10px",
              backgroundColor: "white",
            }}
          >
            <option value="Punjab">Punjab</option>
            <option value="Sindh">Sindh</option>
            <option value="Blochistan">Blochistan</option>
            <option value="KPK">KPK</option>
          </select>
          <span>CITY</span>
          <select
            name="city"
            id="city"
            style={{
                padding: "20px 50px 10px 10px",
              marginRight: "10px",
              backgroundColor: "white",
            }}
          >
            <option value="Lahore">Lahore</option>
            <option value="Karachi">Karachi</option>
            <option value="Faisalabad">Faisalabad</option>
            <option value="Islamabad">Islamabad</option>
          </select>
          <span>SELECT</span>
          <select
            name="select"
            id="select"
            style={{
                padding: "20px 50px 10px 10px",
              marginRight: "10px",
              backgroundColor: "white",
            }}
          >
            <option value="areaoflaw">Area of Law</option>
            <option value="criminallaw">Criminal Law</option>
            <option value="familylaw">Family Law</option>
            <option value="others">Others</option>
          </select>
        </Col>
        <Col>
          <Input style ={{width : "93%",marginLeft:"15px"}}></Input>
          <textarea name="" id="" cols="60" rows="7" style={{marginLeft:'20px',marginTop:"10px"}}>
          </textarea> 
          <button className="querybtn">Post A Query</button>
      </Col>
        
      </Row>
    </Container>
  );
}

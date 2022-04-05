/*!




*/
import React from "react";
import './hero.css';
import icon from "./../../assets/img/icons/common/search.svg";
// reactstrap components
import {
  Container,
  Row,
  Col,
  FormGroup,
  Button,
  Input,
  InputGroup,
} from "reactstrap";
import TalkToLawyer from "./TalkToLawyer";
import AskAQuestion from "./AskAQuestion";

import { useState } from "react";
import HireALawyer from "./HireALawyer";

const Hero = ()=> {
  const [talkalayer, settalkalayer] = useState(false)
  const [askaquestion, setaskalayer] = useState(false)
  const [hirealayer, sethirealayer] = useState(false)
  
  const SwitchToTalkALayer = () =>{
    settalkalayer(true)
    setaskalayer(false)
    sethirealayer(false)
  }
  const SwitchToAskALaywer = () =>{
    settalkalayer(false)
    setaskalayer(true)
    sethirealayer(false)
  }
  const SwitchToHireALaywer = () =>{
    settalkalayer(false)
    setaskalayer(false)
    sethirealayer(true)
  }
    return (
      <>
        <div className="position-relative">
          {/* Hero for FREE version */}
          <section className="section  hero-cover">
            {/* Background circles */}

            <Container className="shape-container d-flex align-items-center py-lg">
              <div className="col px-0">
                <Row className="align-items-center justify-content-center">
                  <Col className="text-center" lg="10">
                    <p className="text-white hero-large">
                      Only Place To Find A Lawyer In Pakistan
                    </p>
                    <div className="btn-wrapper mb-4 mt-4">
                      <Button
                        className="btn-white btn-icon mb-3 mb-sm-0 ml-1"
                        color="default"
                        onClick = {()=>SwitchToAskALaywer()}
                       >
                        <span className="btn-inner--text">Ask A Question</span>
                      </Button>
                      <Button
                        className="btn-white btn-icon mb-3 mb-sm-0 ml-1"
                        color="default"
                        onClick ={()=>SwitchToTalkALayer()}
                      >
                        <span className="btn-inner--text">
                          Talk To A Lawyer
                        </span>
                      </Button>
                      <Button
                        className="btn-white btn-icon mb-3 mb-sm-0 ml-1"
                        color="default"
                        onClick = {()=>SwitchToHireALaywer()}
                       
                      >
                        <span className="btn-inner--text">Hire A Lawyer</span>
                      </Button>
                    </div>
                  </Col>
                </Row>
                {
                  talkalayer&&
                  <TalkToLawyer/>
                }
                {
                  askaquestion&&
                  <AskAQuestion/>
                }
                {
                  hirealayer&&
                  <HireALawyer/>
                }
              </div>
            </Container>
          </section>
        </div>
      </>
    );
  }

export default Hero;

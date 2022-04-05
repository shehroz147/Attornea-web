import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'

export default function AskAQuestionBtn() {
  return <div id="askbtn">
  <Link to = "/askaquestion"><button className="askbtn">Ask A Question</button></Link>
  </div>;
}


import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "assets/vendor/nucleo/css/nucleo.css";
// import 'react-bootstrap-range-slider/dist/react-bootstrap-range-slider.css';

import "assets/vendor/font-awesome/css/all.min.css";
import "assets/vendor/font-awesome/css/brands.min.css";
import "assets/vendor/font-awesome/css/regular.min.css";
import "assets/vendor/font-awesome/css/font-awesome.min.css";
import "assets/vendor/font-awesome/css/solid.min.css";
import 'react-phone-number-input/style.css'
import 'assets/css/index.less';
import 'rc-tooltip/assets/bootstrap.css';


import "assets/scss/argon-design-system-react.scss?v1.1.0";
import "assets/css/main.css";

import Login from '../src/components/Login/Login'
import Register from '../src/components/Register/Register'
import Index from "views/Index.js";
import Landing from "views/examples/Landing.js";

import NavBar from '../src/components/Home/NavBar'
import AskAQuestionBtn from '../src/components/Home/AskAQuestionBtn'
import AskForm from '../src/components/Home/AskForm'
import Displayposts from '../src/components/Home/Displayposts'
import Footer from '../src/components/Home/Footer'
import LeftContainer from '../src/components/Home/LeftContainer'
import RightContainer from '../src/components/Home/RightContainer'
import Post from '../src/components/Home/Post'
import PostInput from '../src/components/Home/PostInput'



ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" exact render={props => <Index {...props} />} />
      <Route
        path="/landing-page"
        exact
        render={props => <Landing {...props} />}
      />
      <Route exact path="/login">
        <Login />
      </Route>
      <Route exact path="/homepage">
      <NavBar />
            <AskAQuestionBtn />
            <div className="container3">
              <LeftContainer />
              <div className="main-content">
                <PostInput />
                <Post />
              </div>
              <RightContainer />
            </div>
            <Footer />
      </Route>

      <Route exact path="/register">
        <Register />

      </Route>
      <Redirect to="/" />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);

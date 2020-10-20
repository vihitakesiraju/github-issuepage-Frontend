import React, { Component } from "react";
import { Route, withRouter } from "react-router-dom";
import cookie from "react-cookies";
import Issues from "./components/Issues/issues";
//import navbar from "./components/Navbar/navbar";
import Issuedetails from "./components/Issuedetails/issuedetails";
class Main extends Component {
  render() {
    // let navbarrender = "";
    // navbarrender = <Route path="/" component={navbar} />;
    return (
      <div>
        * <Route exact path="/" component={Issues} />
        <Route exact path="/issues" component={Issues} />
        <Route exact path="/issues/issue/:issueID" component={Issuedetails} />
      </div>
    );
  }
}

export default Main;

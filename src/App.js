import React, { Component } from "react";
//import "./App.css";
import Main from "./Main";
import { BrowserRouter } from "react-router-dom";
import { CookiesProvider } from "react-cookie";
import "./App.css";

//App Component
class App extends Component {
  render() {
    return (
      //Use Browser Router to route to different pages
      <BrowserRouter>
        <CookiesProvider>
          <div>
            <Main />
          </div>
        </CookiesProvider>
      </BrowserRouter>
    );
  }
}
//Export the App component so that it can be used in index.js
export default App;

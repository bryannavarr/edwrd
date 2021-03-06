import React from "react";
import { Route } from "react-router-dom";
// import MiniPaint from "./MiniPaint";

class LayoutRouter extends React.Component {
  render() {
    return (
      <div className="App">
        {/* header/navbar */}

        <div id="main" role="main">
          <React.Fragment>
            <Route path="/minipaint" component={()=> window.location.href = 'http://edwrd.herokuapp.com/'} />
          </React.Fragment>
        </div>
      </div>
    );
  }
}

export default LayoutRouter

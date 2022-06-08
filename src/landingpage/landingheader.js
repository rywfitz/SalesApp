import React from "react";
import Banner from 'react-js-banner';

import logo from "../soccer_ball.svg";

export class LandingHeader extends React.Component {
  render() {
      return(
        <header className="LandingHeader">
            <img src={logo} alt="" />
            <h1>MovieLand</h1>
        </header>
      );
  }
}


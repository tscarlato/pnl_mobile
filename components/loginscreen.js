import React, { Component } from "react";
// import { Button } from "react-bootstrap";
import styled from "styled-components";
// import "../Styles/loginscreen.css";

const BackgroundGrad = styled.div`
  --darkpink: #000000;
  --lightpink: blue;
  background: var(--darkpink); /* Old browsers */
  background: -moz-linear-gradient(
    top,
    var(--darkpink) 0%,
    var(--lightpink) 100%
  ); /* FF3.6+ */
  background: -webkit-linear-gradient(
    top,
    var(--darkpink) 0%,
    var(--lightpink) 100%
  ); /* Chrome10+,Safari5.1+ */
  background: -o-linear-gradient(
    top,
    var(--darkpink) 0%,
    var(--lightpink) 100%
  ); /* Opera 11.10+ */
  background: -ms-linear-gradient(
    top,
    var(--darkpink) 0%,
    var(--lightpink) 100%
  ); /* IE10+ */
  background: linear-gradient(
    to bottom,
    var(--darkpink) 0%,
    var(--lightpink) 100%
  ); /* W3C */
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#1e5799', endColorstr='#7db9e8', GradientType=0); /* IE6-9 */
  height: 100vh;
`;

const LogoContainer = styled.div`
  position: relative;
  color: #fff;
  font-size: 8em;
  font-weight: 900;
  font-style: italic;
  text-align: center;
  margin-bottom: 0.7em;
  padding-top: 1em;
`;

const LogoPandL = styled.span``;

const LogoN = styled.span``;

const LoginButton = styled.div`
  text-decoration: none;
  height: 100px;
  width: 100px;
  background: #fff;
  color: blue;
  border-radius: 50%;
  padding: 1.5em 1.25em;
  position: absolute;
  font-size: 1.1em;
  font-weight: 600;
  text-align: center;
  left: 50%;
  margin-left: -50px;
  cursor: pointer;
`;

class LoginScreen extends Component {
  login() {
    this.props.auth.login();
  }

  render() {
    return (
      <BackgroundGrad>
        <div>
          <LogoContainer>
            <LogoPandL> P </LogoPandL> <LogoN> n </LogoN>{" "}
            <LogoPandL> L </LogoPandL>{" "}
          </LogoContainer>{" "}
          <LoginButton onClick={this.login.bind(this)}>
            Start poppin '{" "}
          </LoginButton>{" "}
        </div>{" "}
      </BackgroundGrad>
    );
  }
}

export default LoginScreen;

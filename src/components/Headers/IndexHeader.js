/*!

=========================================================
* Paper Kit React - v1.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-kit-react

* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/paper-kit-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container } from "reactstrap";

// core components

function IndexHeader() {
  return (
    <>
      <div
        className="page-header section-dark"
        style={{
          backgroundImage:
            "url(" + require("assets/img/antoine-barres.jpg") + ")",
        }}
      >
        <div className="filter" />
        <div className="content-center">
          <Container>
            <div className="title-brand">
              <img
                  alt="Valorant Team"
                  className="creative-tim-logo"
                  width="300"
                  src={require("assets/img/team/logos/valorant-team-logo-small-2.png")}
              />
              <br />
              <br />
              <h1 className="presentation-title">VALORANT TEAM</h1>
              <div className="fog-low">
                <img alt="..." src={require("assets/img/fog-low.png")} />
              </div>
              <div className="fog-low right">
                <img alt="..." src={require("assets/img/fog-low.png")} />
              </div>
            </div>
            <h2 className="presentation-subtitle text-center">
              <a href="http://ctp.di.fct.unl.pt/~tir/IPM/" target="_blank"><b>Human-Computer Interaction</b></a>
              <br />
              Project (2020/2021) - Group 12
              <br />
              @ <a href="https://www.fct.unl.pt/en" target="_blank"><b>FCT NOVA</b></a>
            </h2>
          </Container>
        </div>
        <div
          className="moving-clouds"
          style={{
            backgroundImage: "url(" + require("assets/img/clouds.png") + ")",
          }}
        />
        <h6 className="category category-absolute">
          Designed and coded by{" "}
          <a
            href="https://www.creative-tim.com?ref=pkr-index-page"
            target="_blank"
          >
            <img
              alt="Creative Tim"
              className="creative-tim-logo"
              src={require("assets/img/team/logos/creative-tim-white-slim.png")}
            />
          </a>&nbsp;&nbsp;&nbsp;|&nbsp;
          Adapted by{" "}
          <a
            href="https://valorant-team.github.io/"
            target="_blank"
          >
            <img
              alt="Valorant Team"
              className="creative-tim-logo"
              src={require("assets/img/team/logos/valorant-team-logo-2.png")}
            />
          </a>
        </h6>
      </div>
    </>
  );
}

export default IndexHeader;

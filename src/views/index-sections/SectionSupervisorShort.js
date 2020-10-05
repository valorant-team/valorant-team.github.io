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
import React from "react";

// reactstrap components
import {
  Button,
  Label,
  FormGroup,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col,
} from "reactstrap";

function SectionTheTeamShort() {
  React.useEffect(() => {
    
  });
  return (
    <>
      <div className="section section-the-team">
        <Container>
          <div className="title">
            <h2><b>Supervisor</b></h2>
          </div>
          <p className="text-justify">
          Our team is supervised by:
          </p>
          <Row>
              <Col className="mr-auto ml-auto" md="3" sm="3">
                <h4 className="images-title"><center><b>Teresa Romão</b></center></h4>
                <img
                  alt="..."
                  className="img-circle img-no-padding img-responsive"
                  src={require("assets/img/faces/teresa-romao.png")}
                />
                <hr />
                <p className="text-center">Supervisor</p>
                <p className="text-center">Advisor</p>
                <p className="text-center">Professor</p>
                <hr />
                <p className="text-center">
                <i className="nc-icon nc-email-85" /> <b>E-mail [at] <br/>fct.unl.pt:</b>
                <br /><a href="mailto:ad.morais@campus.fct.unl.pt">tir</a>
                </p>
              </Col>
          </Row>
        </Container>
      </div>
      <hr/>
    </>
  );
}

export default SectionTheTeamShort;

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

function SectionProjectsOverviewShort() {
  React.useEffect(() => {
    
  });
  return (
    <>
      <div className="section section-buttons">
        <Container>
          <div className="title">
            <h2><b>Projects' Overview</b></h2>
          </div>
          <p className="text-justify">
            The <u><i><b>main project</b></i></u> being developed by the <a href="https://valorant-team.github.io/"><u><i><b>Valorant Team</b></i></u></a> are the following:
          </p>
      
          <br />
          
          <Row>
              <Col className="ml-auto mr-auto" lg="3" md="4" xs="4">
                <a href="./#/projects/masterbook/project-overview-page">
                  <div class="rounded-square" lg="3" md="4" xs="4">
                    <div class="rounded-square-img" lg="3" md="4" xs="4">  
                      <img
                      alt="Masterbook" class="assignment-img"
                      className="img-thumbnail img-no-padding img-responsive"
                      src={require("assets/img/projects/masterbook/logos/masterbook-app-logo-cover-1.jpg")}
                      />  
                     </div>
                     <div class="overlay">
                       <div class="text"><b>Masterbook</b></div>
                     </div>   
                   </div>
                 </a>
              </Col>
          </Row>
        </Container>
      </div>
      <hr/>
    </>
  );
}

export default SectionProjectsOverviewShort;

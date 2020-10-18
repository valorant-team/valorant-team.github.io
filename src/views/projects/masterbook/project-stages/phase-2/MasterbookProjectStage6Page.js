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

// Reactstrap Components
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardTitle,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col,
} from "reactstrap";

// Core Components
import PagesNavbar from "components/Navbars/PagesNavbar.js";
import ProjectStage6Header from "components/Headers/Project-Stages/Phase-2/ProjectStage6Header.js";
import Footer from "components/Footers/Footer.js";

function MasterbookProjectStage6() {
  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("project-stage-6-page");
    return function cleanup() {
      document.body.classList.remove("project-stage-6-page");
    };
  });
  return (
    <>
      <PagesNavbar />
      <ProjectStage6Header />
      <div className="main">
        <div className="section text-center">
          <Container>
            <Row>
              <Col className="ml-auto mr-auto" md="8">
                <h2 className="title"><i><b>Masterbook</b></i></h2>
                <hr />
                <br />
                <img src="https://raw.githubusercontent.com/valorant-team/valorant-team.github.io/master/src/assets/img/projects/masterbook/logos/masterbook-logo-1.png" alt="Masterbook - Logo" width="500" />
                <br />
                <br />
                
                <h5>Coming Soon...</h5>
      
                <br />
                <br />
                <hr />
                <Button
                  className="btn-round"
                  color="info"
                  href="https://github.com/valorant-team/valorant-team.github.io/raw/master/src/assets/docs/projects/masterbook/reports/phase-2/hci-masterbook-project-stage-6.pdf" target="_blank"
                >
                  Download PDF
                </Button>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default MasterbookProjectStage6;

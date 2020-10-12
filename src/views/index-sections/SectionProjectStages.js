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

function SectionProjectStages() {
  React.useEffect(() => {
    
  });
  return (
    <>
      <div className="section section-buttons">
        <Container>
          <div className="title">
            <h2><b>Project Stages</b></h2>
          </div>
          <p className="text-justify">
            Until the moment, it was developed <u><i><b>1</b></i></u> <u><i><b>Project Stage</b></i></u>:
          </p>
          <ul>
            <li>
                <a href="#/project-stages/project-stage-1-page"><u><i><b>Project Stage #1</b></i></u></a> (<a href="https://github.com/valorant-team/valorant-team.github.io/raw/master/src/assets/docs/hci-project-stage-1.pdf" target="_blank"><i><b>Report</b></i></a>)
            </li>
          </ul>
        </Container>
      </div>
      <hr/>
    </>
  );
}

export default SectionProjectStages;

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

function SectionAboutUsShort() {
  React.useEffect(() => {
    
  });
  return (
    <>
      <div className="section section-buttons">
        <Container>
          <div className="title">
            <h2><b>About Us</b></h2>
          </div>
          <p className="text-justify">
            The <b>Valorant Team</b>, composed by <b>António Morais</b>, <b>Nélson Santos</b>, <b>Nuno Sequeira</b> and <b>Rúben Barreiro</b>, borned at <a href="https://www.fct.unl.pt/en" target="_blank"><b>FCT NOVA (NOVA School of Sciences and Technology)</b></a>, during the <i>1st Semester</i> of the <i>Academic Year 2020/2021</i>, as part of a project of the course <a href="http://ctp.di.fct.unl.pt/~tir/IPM/" target="_blank"><b>Human-Computer Interaction</b></a>, from the <a href="https://www.fct.unl.pt/en/education/course/integrated-master-computer-science"><b>Integrated Master in Computer Science</b></a>, supervised by the <a href="http://ctp.di.fct.unl.pt/~tir" target="_blank"><b>Professor Teresa Romão</b></a>, member of <a href="http://nova-lincs.di.fct.unl.pt/" target="_blank"><b>NOVALINCS</b></a> (<a href="http://nova-lincs.di.fct.unl.pt/" target="_blank"><b>NOVA Laboratory for Computer Science and Informatics</b></a>).
          </p>
          <br />
          <p className="text-justify">
            Our team reunites great professionals, always available to provide the best solutions to our clients, providing excelence services.
          </p>
        </Container>
      </div>
      <hr/>
    </>
  );
}

export default SectionAboutUsShort;

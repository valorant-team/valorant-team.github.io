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

// core components
import PagesNavbar from "components/Navbars/PagesNavbar.js";
import ProjectPageHeader from "components/Headers/ProjectPageHeader.js";
import Footer from "components/Footers/Footer.js";

function MasterbookOverviewPage() {
  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("project-page");
    return function cleanup() {
      document.body.classList.remove("project-page");
    };
  });
  return (
    <>
      <PagesNavbar />
      <ProjectPageHeader />
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
                
                <h6>
                    Do you want to be a real Chef,
                    <br />
                    worthy of Michelin Star recognition??!
                </h6>
                <h6>
                    Register now in the Masterbook!!!
                </h6>
                <h6>
                    The Social Network that teaches you
                    <br />
                    how to make Recipes to eat and cry for more!!!
                </h6>
      
                <br />
                <hr />
                <br />
                
                <h5>
                    <b>Introduction</b>
                </h5>
      
                <br />
      
                <p>
                    This is our <u><i>most recent project</i></u>, the <a href=""><u><i><b>Masterbook</b></i></u></a>,
      
                    <br />
      
                    a <u><i>Social Network</i></u> foccused in the <u><i>art of cooking</i></u>!!!
                </p>
      
                <br />
                <hr />
                <br />
        
                <h5>
                    <b>Sketches for the Logotypes</b>
                </h5>
      
                <br />
      
                <p>
                    Here, there presented some of the <u><i>Logotypes</i></u> for the <u><i><b>Masterbook</b></i></u>, developed until this moment:
                </p>
      
                <br />
                          
                <Row>
                  <Col className="ml-auto mr-auto" lg="4" md="4" xs="4">
                    <a href="https://github.com/valorant-team/valorant-team.github.io/raw/master/src/assets/img/projects/masterbook/logos/masterbook-app-logo-cover-1.jpg">
                      <div class="rounded-square" lg="4" md="4" xs="4">
                        <div class="rounded-square-img" lg="4" md="4" xs="4">  
                          <img
                          alt="Logotype #1" class="rounded-square-img"
                          className="img-thumbnail img-no-padding img-responsive"
                          src={require("assets/img/projects/masterbook/logos/masterbook-app-logo-cover-1.jpg")}
                          />  
                         </div>
                         <div class="overlay">
                           <div class="text"><b>Logotype #1</b></div>
                         </div>   
                       </div>
                     </a>
                  </Col>
                  <Col className="ml-auto mr-auto" lg="4" md="4" xs="4">
                     <a href="https://github.com/valorant-team/valorant-team.github.io/raw/master/src/assets/img/projects/masterbook/logos/masterbook-app-logo-cover-2.jpg">  
                      <div class="rounded-square" lg="4" md="4" xs="4">
                        <div class="rounded-square-img" lg="4" md="4" xs="4">  
                          <img
                          alt="Logotype #2" class="rounded-square-img"
                          className="img-thumbnail img-no-padding img-responsive"
                          src={require("assets/img/projects/masterbook/logos/masterbook-app-logo-cover-2.jpg")}
                          />  
                         </div>
                         <div class="overlay">
                           <div class="text"><b>Logotype #2</b></div>
                         </div>   
                     </div>   
                    </a>
                  </Col>
                  <Col className="ml-auto mr-auto" lg="4" md="4" xs="4">
                     <a href="https://github.com/valorant-team/valorant-team.github.io/raw/master/src/assets/img/projects/masterbook/logos/masterbook-app-logo-cover-3.jpg">  
                      <div class="rounded-square" lg="4" md="4" xs="4">
                        <div class="rounded-square-img" lg="4" md="4" xs="4">  
                          <img
                          alt="Logotype #3" class="rounded-square-img"
                          className="img-thumbnail img-no-padding img-responsive"
                          src={require("assets/img/projects/masterbook/logos/masterbook-app-logo-cover-3.jpg")}
                          />  
                         </div>
                         <div class="overlay">
                           <div class="text"><b>Logotype #3</b></div>
                         </div>   
                     </div>   
                    </a>
                  </Col>
                </Row>
      
                <br />
                          
                <Row>
                  <Col className="ml-auto mr-auto" lg="4" md="4" xs="4">
                    <a href="https://github.com/valorant-team/valorant-team.github.io/raw/master/src/assets/img/projects/masterbook/logos/masterbook-app-logo-cover-4.jpg">
                      <div class="rounded-square" lg="4" md="4" xs="4">
                        <div class="rounded-square-img" lg="4" md="4" xs="4">  
                          <img
                          alt="Logotype #4" class="rounded-square-img"
                          className="img-thumbnail img-no-padding img-responsive"
                          src={require("assets/img/projects/masterbook/logos/masterbook-app-logo-cover-4.jpg")}
                          />  
                         </div>
                         <div class="overlay">
                           <div class="text"><b>Logotype #4</b></div>
                         </div>   
                       </div>
                     </a>
                  </Col>
                  <Col className="ml-auto mr-auto" lg="4" md="4" xs="4">
                     <a href="https://github.com/valorant-team/valorant-team.github.io/raw/master/src/assets/img/projects/masterbook/logos/masterbook-app-logo-cover-5.jpg">  
                      <div class="rounded-square" lg="4" md="4" xs="4">
                        <div class="rounded-square-img" lg="4" md="4" xs="4">  
                          <img
                          alt="Logotype #5" class="rounded-square-img"
                          className="img-thumbnail img-no-padding img-responsive"
                          src={require("assets/img/projects/masterbook/logos/masterbook-app-logo-cover-5.jpg")}
                          />  
                         </div>
                         <div class="overlay">
                           <div class="text"><b>Logotype #5</b></div>
                         </div>   
                     </div>   
                    </a>
                  </Col>
                  <Col className="ml-auto mr-auto" lg="4" md="4" xs="4">
                     <a href="https://github.com/valorant-team/valorant-team.github.io/raw/master/src/assets/img/projects/masterbook/logos/masterbook-app-logo-cover-6.jpg">  
                      <div class="rounded-square" lg="4" md="4" xs="4">
                        <div class="rounded-square-img" lg="4" md="4" xs="4">  
                          <img
                          alt="Logotype #6" class="rounded-square-img"
                          className="img-thumbnail img-no-padding img-responsive"
                          src={require("assets/img/projects/masterbook/logos/masterbook-app-logo-cover-6.jpg")}
                          />  
                         </div>
                         <div class="overlay">
                           <div class="text"><b>Logotype #6</b></div>
                         </div>   
                     </div>   
                    </a>
                  </Col>
                </Row>
      
                <br />
                <hr />
                <br />
        
                <h5>
                    <b>Stages of the Project</b>
                </h5>
      
                <br />
      
                <p>
                    Until this moment, it was developed <u><i>2 stages</i></u>
                    <br />
                    (out of a total of <u><i>6 stages</i></u>, <u><i>3 stages</i></u> per each <u><i>phase</i></u>) of
                    <br />
                    the <u><i><b>Masterbook</b></i></u> project:
                </p>
                
                <br />
    
                <h6>
                    <b>Phase 1</b> 
                </h6>
    
                <b>&bull;</b>&nbsp;&nbsp;<a href="#/projects/masterbook/project-stages/phase-1/project-stage-1-page"><u><i><b>Stage #1</b></i></u></a> (<a href="https://github.com/valorant-team/valorant-team.github.io/raw/master/src/assets/docs/projects/masterbook/reports/phase-1/hci-masterbook-project-stage-1.pdf" target="_blank"><i><b>Report</b></i></a>)

                <br />
                
                <b>&bull;</b>&nbsp;&nbsp;<a href="#/projects/masterbook/project-stages/phase-1/project-stage-2-page"><u><i><b>Stage #2</b></i></u></a> (<a href="https://github.com/valorant-team/valorant-team.github.io/raw/master/src/assets/docs/projects/masterbook/reports/phase-1/hci-masterbook-project-stage-2.pdf" target="_blank"><i><b>Report</b></i></a>)

                <br />
                
                <b>&bull;</b>&nbsp;&nbsp;<a href="#/projects/masterbook/project-stages/phase-1/project-stage-3-page"><u><i><b>Stage #3</b></i></u></a> (<a href="https://github.com/valorant-team/valorant-team.github.io/raw/master/src/assets/docs/projects/masterbook/reports/phase-1/hci-masterbook-project-stage-3.pdf" target="_blank"><i><b>Report</b></i></a>)

                <br />
                <br />
    
                <h6>
                    <b>Phase 2</b> 
                </h6>
    
                <b>&bull;</b>&nbsp;&nbsp;<a href="#/projects/masterbook/project-stages/phase-2/project-stage-4-page"><u><i><b>Stage #4</b></i></u></a> (<a href="https://github.com/valorant-team/valorant-team.github.io/raw/master/src/assets/docs/projects/masterbook/reports/phase-2/hci-masterbook-project-stage-4.pdf" target="_blank"><i><b>Report</b></i></a>)

                <br />
                
                <b>&bull;</b>&nbsp;&nbsp;<a href="#/projects/masterbook/project-stages/phase-2/project-stage-5-page"><u><i><b>Stage #5</b></i></u></a> (<a href="https://github.com/valorant-team/valorant-team.github.io/raw/master/src/assets/docs/projects/masterbook/reports/phase-2/hci-masterbook-project-stage-5.pdf" target="_blank"><i><b>Report</b></i></a>)

                <br />
                
                <b>&bull;</b>&nbsp;&nbsp;<a href="#/projects/masterbook/project-stages/phase-2/project-stage-6-page"><u><i><b>Stage #6</b></i></u></a> (<a href="https://github.com/valorant-team/valorant-team.github.io/raw/master/src/assets/docs/projects/masterbook/reports/phase-2/hci-masterbook-project-stage-6.pdf" target="_blank"><i><b>Report</b></i></a>)

              </Col>
            </Row>
          </Container>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default MasterbookOverviewPage;

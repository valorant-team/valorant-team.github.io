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
  NavItem,
  NavLink,
  Nav,
  TabContent,
  TabPane,
  Container,
  Row,
  Col,
} from "reactstrap";

// core components
import PagesNavbar from "components/Navbars/PagesNavbar.js";
import ProfilePageHeader from "components/Headers/ProfilePageHeader.js";
import Footer from "components/Footers/Footer.js";

function AntonioProfilePage() {
  const [activeTab, setActiveTab] = React.useState("1");

  const toggle = (tab) => {
    if (activeTab !== tab) {
      setActiveTab(tab);
    }
  };

  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("landing-page");
    return function cleanup() {
      document.body.classList.remove("landing-page");
    };
  });
  return (
    <>
      <PagesNavbar />
      <ProfilePageHeader />
      <div className="section profile-content">
        <Container>
          <div className="owner">
            <div className="avatar">
              <img
                alt="..."
                className="img-circle img-no-padding img-responsive"
                src={require("assets/img/faces/ruben-barreiro.png")}
              />
            </div>
            <div className="name">
              <h4 className="title">
                <b>Rúben André Barreiro</b>
                <br />
              </h4>
              <h6 className="description">Computer Scientist/Engineer and Master Student</h6>
            </div>
          </div>
          <Row>
            <Col className="ml-auto mr-auto text-center" md="6">
                
              <hr />
            
              <br />
                
              <h5><b>Biography</b></h5>
              
              <br />
                  
              <p>
                I'm a <i>hard-working</i> and <i>passionate</i> <b>Computer Scientist and Engineer</b> with <i>huge dreams</i>. I'm currently finishing the <b>Master</b> at <a href="https://www.fct.unl.pt/en" target="_blank"><b>NOVA School of Sciences and Technology (FCT NOVA)</b></a>.
              </p>
              <br />
              <p>
                I have a <i>huge eagerness to learn and improve myself everyday</i>, <i>professionally</i> and <i>personally</i>.
              </p>
              <br />
              <p>
                I have a <i>deep passion</i> for <i><b>IT</b></i> and <i><b>Technology</b></i> areas. And, I also have a <i>big interest</i> in <i><b>design</b></i>, <i><b>photography</b></i>, <i><b>multimedia</b></i>, <i><b>fashion</b></i>, <i><b>business</b></i>, <i><b>enterprise's management</b></i>, <i><b>marketing</b></i>, <i><b>drawing</b></i> and <i><b>poetry</b></i>.
              </p>
              <br />
              <p>
                I'm <i>strongly motivated by my goals and ambitions</i>, <i>never giving up of them</i> and <i>I'm easy to get along with</i>.
              </p>
              <br />
              <p>
                In <i><b>Computer Science and Engineering</b></i>, I like <i><b>Logic</b></i>, <i><b>Computer Networks</b></i>, <i><b>Computer Graphics</b></i>, <i><b>Artificial Intelligence</b></i>, <i><b>Distributed Systems</b></i>, <i><b>Edge/Fog Computing</b></i>, <i><b>Cloud Computing</b></i>, <i><b>Network & Internet Security</b></i>, <i><b>Cryptography</b></i>, <i><b>Concurrent & Parallel Systems</b></i>, <i><b>High Performance Computing</b></i>, <i><b>GPU Programming</b></i>, <i><b>Machine Learning</b></i>, <i><b>Autonomous Multi-Agent Systems</b></i>, <i><b>Robotics</b></i> and <i><b>Quantum Computing</b></i>.
              </p>
              <br />
              <p>
                During the <i><b>BSc.</b></i> degree, I worked, in the context of <i><b>Research & Development (R&D)</b></i>, focused in <i><b>Edge Computing</b></i>, in the <a href="https://nova-lincs.di.fct.unl.pt/" target="_target"><i><b>NOVA Laboratory for Computer Science and Informatics (NOVA LINCS)</b></i></a>, at <a href="https://www.fct.unl.pt/en" target="_blank"><i><b>NOVA School of Sciences and Technology (FCT NOVA)</b></i></a>, in the <a href="https://hyrax.dcc.fc.up.pt/" target="_blank"><i><b>Hyrax Project: Crowd-Sourcing Mobile Devices to Develop Edge Clouds</b></i></a>, in the <i><b>DiCE: Distributed Computing at the Edge</b></i> sub-module, under the supervision of <a href="https://docentes.fct.unl.pt/p161/" target="_blank"><i><b>Prof. Hervé Paulino</b></i></a>. This project had the collaboration of <a href="https://www.cs.cmu.edu/" target="_blank"><i><b>Carnegie Mellon School of Computer Science</b></i></a> and <a href="https://sigarra.up.pt/fcup/en/web_page.inicial" target="_blank"><i><b>Faculty of Sciences of University of Porto</b></i></a>, among many other <i>industrial</i> and <i>academic</i> <i>instutitions</i>. 
              </p>
              <br />
              <p>
                I made a <i><b>short-term internship</b></i>, also in the context of <i><b>Research & Development (R&D)</b></i>, focused in <i><b>Communications for Data Dissemination and Situation Awareness</b></i> for <i><b>Autonomous Underwater Vehicles (AUVs)</b></i> in the <a href="https://lsts.fe.up.pt/" target="_target"><i><b>Underwater Systems and Technology Laboratory/Laboratório de Sistemas e Tecnologia Subaquática (LSTS)</b></i></a>, at <a href="https://sigarra.up.pt/feup/en/web_page.inicial" target="_blank"><i><b>Faculty of Engineering of University of Porto (FEUP)</b></i></a>, in the <a href="https://lsts.fe.up.pt/toolchain/ripples" target="_blank"><i><b>Ripples Project</b></i></a>.
              </p>
              <br />
              <p>
                In this moment, I'm currently about to start working on my <i><b>Master Thesis</b></i>, at <i><b>Quantum Computing</b></i> area, focused in <i><b>Quantum Cryptography</b></i> (and also in, <i><b>Quantum Networks/Internet</b></i>), under the supervision of <a href="https://ciencias.ulisboa.pt/pt/perfil/ansouto" target="_blank"><i><b>Prof. André Souto</b></i></a> and <a href="http://ctp.di.fct.unl.pt/~aravara/" target="_blank"><i><b>Prof. António Ravara</b></i></a>. 
              </p>

              <hr />
            
              <br />
                    
              <h5><b>Social</b></h5>
            
              <br />
                  
              <a href="https://www.facebook.com/ruben.andre.letra.barreiro/" target="_blank">
                <Button className="btn-round" color="default" outline>
                    <i className="fa fa-facebook" /> Facebook
                </Button>
              </a>
              &nbsp;&nbsp;&nbsp;&nbsp;
              <a href="https://www.instagram.com/ruben.visionary/" target="_blank">
                <Button className="btn-round" color="default" outline>
                  <i className="fa fa-instagram" /> Instagram
                </Button>
              </a>
              
              <br />
              <br />

              <a href="https://twitter.com/ruben_visionary/" target="_blank">
                <Button className="btn-round" color="default" outline>
                  <i className="fa fa-twitter" /> Twitter
                </Button>
              </a>
              &nbsp;&nbsp;&nbsp;&nbsp;
              <a href="https://www.pinterest.com/ruben_visionary/" target="_blank">
                <Button className="btn-round" color="default" outline>
                  <i className="fa fa-pinterest" /> Pinterest
                </Button>
              </a>

              <hr />
            
              <br />
                    
              <h5><b>Professional</b></h5>
            
              <br />
              
              <a href="https://www.linkedin.com/in/rubenandrebarreiro/" target="_blank">
                <Button className="btn-round" color="default" outline>
                    <i className="fa fa-linkedin" /> LinkedIn
                </Button>
              </a>
              &nbsp;&nbsp;&nbsp;&nbsp;
              <a href="https://stackoverflow.com/story/rubenandrebarreiro/" target="_blank">
                <Button className="btn-round" color="default" outline>
                    <i className="fa fa-stack-overflow" /> Stack Overflow
                </Button>
              </a>
              
              <br />
              <br />

              <a href="https://rubenandrebarreiro.github.io/" target="_blank">
                <Button className="btn-round" color="default" outline>
                    <i className="fa fa-github" /> GitHub
                </Button>
              </a>
              &nbsp;&nbsp;&nbsp;&nbsp;
              <a href="https://github.com/rubenandrebarreiro/" target="_blank">
                <Button className="btn-round" color="default" outline>
                    <i className="fa fa-github" /> GitHub
                </Button>
              </a>
              
              <br />
              <br />

              <a href="https://bitbucket.org/rubenandrebarreiro/" target="_blank">
                <Button className="btn-round" color="default" outline>
                    <i className="fa fa-bitbucket" /> Bitbucket
                </Button>
              </a>
              &nbsp;&nbsp;&nbsp;&nbsp;
              <a href="https://gitlab.com/rubenandrebarreiro/" target="_blank">
                <Button className="btn-round" color="default" outline>
                    <i className="fa fa-gitlab" /> GitLab
                </Button>
              </a>
                        
              <hr />
            
              <br />
            </Col>
          </Row>
          <br />
          <div className="nav-tabs-navigation">
            <div className="nav-tabs-wrapper">
              <Nav role="tablist" tabs>
                <NavItem>
                  <NavLink
                    className={activeTab === "1" ? "active" : ""}
                    onClick={() => {
                      toggle("1");
                    }}
                  >
                    Personal Info
                  </NavLink>
                </NavItem>    
                <NavItem>
                  <NavLink
                    className={activeTab === "2" ? "active" : ""}
                    onClick={() => {
                      toggle("2");
                    }}
                  >
                    Skills
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    className={activeTab === "3" ? "active" : ""}
                    onClick={() => {
                      toggle("3");
                    }}
                  >
                    Interests
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    className={activeTab === "4" ? "active" : ""}
                    onClick={() => {
                      toggle("4");
                    }}
                  >
                    Tasks
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    className={activeTab === "5" ? "active" : ""}
                    onClick={() => {
                      toggle("5");
                    }}
                  >
                    Blog
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    className={activeTab === "6" ? "active" : ""}
                    onClick={() => {
                      toggle("6");
                    }}
                  >
                    Assignments
                  </NavLink>
                </NavItem>
              </Nav>
            </div>
          </div>
          {/* Tab panes */}
          <TabContent className="personal-info" activeTab={activeTab}>
              <TabPane tabId="1" id="personal-info">
              <Row>
                  <Col className="ml-auto mr-auto" md="10">
                      <b>Full Name:</b>&nbsp;&nbsp;&nbsp;Rúben André Letra Barreiro
                  </Col>
              </Row>
              <Row>
                  <Col className="ml-auto mr-auto" md="10">
                      <b>Residence City:</b>&nbsp;&nbsp;&nbsp;Almada, Setúbal, Portugal
                  </Col>
              </Row>
              <Row>
                  <Col className="ml-auto mr-auto" md="10">
                      <b>Birthday:</b>&nbsp;&nbsp;&nbsp;November 19
                  </Col>
              </Row>
              <Row>
                  <Col className="ml-auto mr-auto" md="10">
                      <b>Zodiac Sign:</b>&nbsp;&nbsp;&nbsp;Scorpio
                  </Col>
              </Row>
              <br />
              <Row>
                  <Col className="ml-auto mr-auto" md="10">
                      <b>Affiliation:</b>&nbsp;&nbsp;&nbsp;New University of Lisbon (NOVA)
                  </Col>
              </Row>
              <Row>
                  <Col className="ml-auto mr-auto" md="10">
                      <b>Sub-Affiliation:</b>&nbsp;&nbsp;&nbsp;NOVA School of Science and Technology (FCT NOVA)
                  </Col>
              </Row>
              <Row>
                  <Col className="ml-auto mr-auto" md="10">
                      <b>Degree:</b>&nbsp;&nbsp;&nbsp;Computer Science and Engineering (Integrated Master - BSc. + MSc.)
                  </Col>
              </Row>
              <Row>
                  <Col className="ml-auto mr-auto" md="10">
                      <b>Student No.:</b>&nbsp;&nbsp;&nbsp;42648
                  </Col>
              </Row>
              <br />
              <Row>
                  <Col className="ml-auto mr-auto" md="10">
                      <b>Group No.:</b>&nbsp;&nbsp;&nbsp;12
                  </Col>
              </Row>
              <Row>
                  <Col className="ml-auto mr-auto" md="10">
                      <b>Group/Team Name:</b>&nbsp;&nbsp;&nbsp;Valorant Team
                  </Col>
              </Row>
              <Row>
                  <Col className="ml-auto mr-auto" md="10">
                      <b>Main Roles:</b>&nbsp;&nbsp;&nbsp;CTO (Chief Technology Officer) and CDO (Chief Digital Officer)
                  </Col>
              </Row>
              <Row>
                  <Col className="ml-auto mr-auto" md="10">
                      <b>Secondary Roles:</b>&nbsp;&nbsp;&nbsp;Developer and Designer
                  </Col>
              </Row>
              <br />
              <Row>
                  <Col className="ml-auto mr-auto" md="10">
                      <b>Project - Final Grade:</b>&nbsp;&nbsp;&nbsp;N/A
                  </Col>
              </Row>
              <Row>
                  <Col className="ml-auto mr-auto" md="10">
                      <b>Test no. 1 - Final Grade:</b>&nbsp;&nbsp;&nbsp;N/A
                  </Col>
              </Row>
              <Row>
                  <Col className="ml-auto mr-auto" md="10">
                      <b>Test no. 2 - Final Grade:</b>&nbsp;&nbsp;&nbsp;N/A
                  </Col>
              </Row>
              <Row>
                  <Col className="ml-auto mr-auto" md="10">
                      <b>Exam - Final Grade:</b>&nbsp;&nbsp;&nbsp;N/A
                  </Col>
              </Row>      
              </TabPane>
              <TabPane tabId="2" id="skills">
              <Row>
                  <Col className="ml-auto mr-auto" md="10">
                      <b>Pascal:</b>&nbsp;&nbsp;&nbsp;
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star"></span>
                  </Col>
              </Row>
              <Row>
                  <Col className="ml-auto mr-auto" md="10">
                      <b>VisualBasic:</b>&nbsp;&nbsp;&nbsp;
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star "></span>
                        <span class="fa fa-star"></span>
                        <span class="fa fa-star"></span>
                  </Col>
              </Row>
              <Row>
                  <Col className="ml-auto mr-auto" md="10">
                      <b>C# (C-Sharp):</b>&nbsp;&nbsp;&nbsp;
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star"></span>
                        <span class="fa fa-star"></span>
                        <span class="fa fa-star"></span>
                  </Col>
              </Row>
              <Row>
                  <Col className="ml-auto mr-auto" md="10">
                      <b>HTML (HyperText Markup Language):</b>&nbsp;&nbsp;&nbsp;
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star"></span>
                  </Col>
              </Row>
              <br />
              <Row>
                  <Col className="ml-auto mr-auto" md="10">
                      <b>JavaScript:</b>&nbsp;&nbsp;&nbsp;
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star"></span>
                  </Col>
              </Row>
              <Row>
                  <Col className="ml-auto mr-auto" md="10">
                      <b>CSS (Cascade Style-Sheets):</b>&nbsp;&nbsp;&nbsp;
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star"></span>
                  </Col>
              </Row>
              <Row>
                  <Col className="ml-auto mr-auto" md="10">
                      <b>MySQL:</b>&nbsp;&nbsp;&nbsp;
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star"></span>
                  </Col>
              </Row>
              <Row>
                  <Col className="ml-auto mr-auto" md="10">
                      <b>PHP (Hypertext Preprocessor):</b>&nbsp;&nbsp;&nbsp;
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star"></span>
                        <span class="fa fa-star"></span>
                        <span class="fa fa-star"></span>
                  </Col>
              </Row>
              <br />
              <Row>
                  <Col className="ml-auto mr-auto" md="10">
                      <b>Java:</b>&nbsp;&nbsp;&nbsp;
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star"></span>
                  </Col>
              </Row>
              <Row>
                  <Col className="ml-auto mr-auto" md="10">
                      <b>JUnit:</b>&nbsp;&nbsp;&nbsp;
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star"></span>
                  </Col>
              </Row>
              <Row>
                  <Col className="ml-auto mr-auto" md="10">
                      <b>Assembly:</b>&nbsp;&nbsp;&nbsp;
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star"></span>
                        <span class="fa fa-star"></span>
                        <span class="fa fa-star"></span>
                  </Col>
              </Row>
              <Row>
                  <Col className="ml-auto mr-auto" md="10">
                      <b>C:</b>&nbsp;&nbsp;&nbsp;
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star"></span>
                        <span class="fa fa-star"></span>
                  </Col>
              </Row>
              <br />
              <Row>
                  <Col className="ml-auto mr-auto" md="10">
                      <b>UNIX:</b>&nbsp;&nbsp;&nbsp;
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star"></span>
                        <span class="fa fa-star"></span>
                        <span class="fa fa-star"></span>
                  </Col>
              </Row>
              <Row>
                  <Col className="ml-auto mr-auto" md="10">
                      <b>Ubuntu:</b>&nbsp;&nbsp;&nbsp;
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star"></span>
                        <span class="fa fa-star"></span>
                  </Col>
              </Row>
              <Row>
                  <Col className="ml-auto mr-auto" md="10">
                      <b>Linux Mint:</b>&nbsp;&nbsp;&nbsp;
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star"></span>
                        <span class="fa fa-star"></span>
                        <span class="fa fa-star"></span>
                  </Col>
              </Row>
              <Row>
                  <Col className="ml-auto mr-auto" md="10">
                      <b>Kali Linux:</b>&nbsp;&nbsp;&nbsp;
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star"></span>
                        <span class="fa fa-star"></span>
                        <span class="fa fa-star"></span>
                        <span class="fa fa-star"></span>
                  </Col>
              </Row>   
              <br />
              <Row>
                  <Col className="ml-auto mr-auto" md="10">
                      <b>PowerShell:</b>&nbsp;&nbsp;&nbsp;
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star"></span>
                        <span class="fa fa-star"></span>
                  </Col>
              </Row>
              <Row>
                  <Col className="ml-auto mr-auto" md="10">
                      <b>Bash:</b>&nbsp;&nbsp;&nbsp;
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star"></span>
                        <span class="fa fa-star"></span>
                  </Col>
              </Row>
              <Row>
                  <Col className="ml-auto mr-auto" md="10">
                      <b>Bourne Shell:</b>&nbsp;&nbsp;&nbsp;
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star"></span>
                        <span class="fa fa-star"></span>
                        <span class="fa fa-star"></span>
                  </Col>
              </Row>
              <Row>
                  <Col className="ml-auto mr-auto" md="10">
                      <b>SSH (Secure SHell):</b>&nbsp;&nbsp;&nbsp;
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star"></span>
                        <span class="fa fa-star"></span>
                  </Col>
              </Row> 
              <br />
              <Row>
                  <Col className="ml-auto mr-auto" md="10">
                      <b>Oracle SQL:</b>&nbsp;&nbsp;&nbsp;
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star"></span>
                  </Col>
              </Row>
              <Row>
                  <Col className="ml-auto mr-auto" md="10">
                      <b>Datalog:</b>&nbsp;&nbsp;&nbsp;
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star"></span>
                        <span class="fa fa-star"></span>
                  </Col>
              </Row>
              <Row>
                  <Col className="ml-auto mr-auto" md="10">
                      <b>OCaml:</b>&nbsp;&nbsp;&nbsp;
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star"></span>
                        <span class="fa fa-star"></span>
                  </Col>
              </Row>
              <Row>
                  <Col className="ml-auto mr-auto" md="10">
                      <b>Haskell:</b>&nbsp;&nbsp;&nbsp;
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star"></span>
                        <span class="fa fa-star"></span>
                        <span class="fa fa-star"></span>
                        <span class="fa fa-star"></span>
                  </Col>
              </Row> 
              <br />
              <Row>
                  <Col className="ml-auto mr-auto" md="10">
                      <b>MATLAB:</b>&nbsp;&nbsp;&nbsp;
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star"></span>
                        <span class="fa fa-star"></span>
                        <span class="fa fa-star"></span>
                  </Col>
              </Row>
              <Row>
                  <Col className="ml-auto mr-auto" md="10">
                      <b>XML (Extensible Markup Language):</b>&nbsp;&nbsp;&nbsp;
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star"></span>
                        <span class="fa fa-star"></span>
                        <span class="fa fa-star"></span>
                  </Col>
              </Row>
              <Row>
                  <Col className="ml-auto mr-auto" md="10">
                      <b>jQuery:</b>&nbsp;&nbsp;&nbsp;
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star"></span>
                        <span class="fa fa-star"></span>
                        <span class="fa fa-star"></span>
                  </Col>
              </Row>
              <Row>
                  <Col className="ml-auto mr-auto" md="10">
                      <b>Node.js:</b>&nbsp;&nbsp;&nbsp;
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star"></span>
                        <span class="fa fa-star"></span>
                  </Col>
              </Row> 
              <br />
              <Row>
                  <Col className="ml-auto mr-auto" md="10">
                      <b>WebGL:</b>&nbsp;&nbsp;&nbsp;
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star"></span>
                        <span class="fa fa-star"></span>
                  </Col>
              </Row>
              <Row>
                  <Col className="ml-auto mr-auto" md="10">
                      <b>Three.js:</b>&nbsp;&nbsp;&nbsp;
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star"></span>
                        <span class="fa fa-star"></span>
                  </Col>
              </Row>
              <Row>
                  <Col className="ml-auto mr-auto" md="10">
                      <b>UML (Unified Modeling Language):</b>&nbsp;&nbsp;&nbsp;
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star"></span>
                        <span class="fa fa-star"></span>
                  </Col>
              </Row>
              <Row>
                  <Col className="ml-auto mr-auto" md="10">
                      <b>OCL (Object Constraint Language):</b>&nbsp;&nbsp;&nbsp;
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star"></span>
                        <span class="fa fa-star"></span>
                  </Col>
              </Row> 
              <br />
              <Row>
                  <Col className="ml-auto mr-auto" md="10">
                      <b>Prolog:</b>&nbsp;&nbsp;&nbsp;
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star"></span>
                        <span class="fa fa-star"></span>
                  </Col>
              </Row>
              <Row>
                  <Col className="ml-auto mr-auto" md="10">
                      <b>Wireshark:</b>&nbsp;&nbsp;&nbsp;
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star"></span>
                        <span class="fa fa-star"></span>
                        <span class="fa fa-star"></span>
                  </Col>
              </Row>
              <Row>
                  <Col className="ml-auto mr-auto" md="10">
                      <b>OpenSSL:</b>&nbsp;&nbsp;&nbsp;
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star"></span>
                        <span class="fa fa-star"></span>
                        <span class="fa fa-star"></span>
                  </Col>
              </Row>
              <Row>
                  <Col className="ml-auto mr-auto" md="10">
                      <b>Spring (SpringBoot):</b>&nbsp;&nbsp;&nbsp;
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star"></span>
                        <span class="fa fa-star"></span>
                        <span class="fa fa-star"></span>
                  </Col>
              </Row> 
              <br />
              <Row>
                  <Col className="ml-auto mr-auto" md="10">
                      <b>Ruby:</b>&nbsp;&nbsp;&nbsp;
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star"></span>
                        <span class="fa fa-star"></span>
                        <span class="fa fa-star"></span>
                  </Col>
              </Row>
              <Row>
                  <Col className="ml-auto mr-auto" md="10">
                      <b>GoLang:</b>&nbsp;&nbsp;&nbsp;
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star"></span>
                        <span class="fa fa-star"></span>
                        <span class="fa fa-star"></span>
                        <span class="fa fa-star"></span>
                  </Col>
              </Row>
              <Row>
                  <Col className="ml-auto mr-auto" md="10">
                      <b>REST (REpresentational State Transfer):</b>&nbsp;&nbsp;&nbsp;
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star"></span>
                  </Col>
              </Row>
              <Row>
                  <Col className="ml-auto mr-auto" md="10">
                      <b>SOAP (Simple Object Access Protocol):</b>&nbsp;&nbsp;&nbsp;
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star"></span>
                        <span class="fa fa-star"></span>
                        <span class="fa fa-star"></span>
                  </Col>
              </Row> 
              <br />
              <Row>
                  <Col className="ml-auto mr-auto" md="10">
                      <b>JSON (JavaScript Object Notation):</b>&nbsp;&nbsp;&nbsp;
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star"></span>
                  </Col>
              </Row>
              <Row>
                  <Col className="ml-auto mr-auto" md="10">
                      <b>MongoDB:</b>&nbsp;&nbsp;&nbsp;
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star"></span>
                        <span class="fa fa-star"></span>
                  </Col>
              </Row>
              <Row>
                  <Col className="ml-auto mr-auto" md="10">
                      <b>Apache ZooKeeper:</b>&nbsp;&nbsp;&nbsp;
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star"></span>
                        <span class="fa fa-star"></span>
                        <span class="fa fa-star"></span>
                  </Col>
              </Row>
              <Row>
                  <Col className="ml-auto mr-auto" md="10">
                      <b>Apache Kafka:</b>&nbsp;&nbsp;&nbsp;
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star"></span>
                        <span class="fa fa-star"></span>
                        <span class="fa fa-star"></span>
                  </Col>
              </Row>  
              <br />
              <Row>
                  <Col className="ml-auto mr-auto" md="10">
                      <b>Maven:</b>&nbsp;&nbsp;&nbsp;
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star"></span>
                  </Col>
              </Row>
              <Row>
                  <Col className="ml-auto mr-auto" md="10">
                      <b>Docker:</b>&nbsp;&nbsp;&nbsp;
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star"></span>
                        <span class="fa fa-star"></span>
                        <span class="fa fa-star"></span>
                  </Col>
              </Row>
              <Row>
                  <Col className="ml-auto mr-auto" md="10">
                      <b>Android:</b>&nbsp;&nbsp;&nbsp;
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star"></span>
                        <span class="fa fa-star"></span>
                        <span class="fa fa-star"></span>
                  </Col>
              </Row>
              <Row>
                  <Col className="ml-auto mr-auto" md="10">
                      <b>Google Protocol Buffers:</b>&nbsp;&nbsp;&nbsp;
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star"></span>
                        <span class="fa fa-star"></span>
                  </Col>
              </Row>   
              <br />
              <Row>
                  <Col className="ml-auto mr-auto" md="10">
                      <b>TeX:</b>&nbsp;&nbsp;&nbsp;
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star"></span>
                        <span class="fa fa-star"></span>
                  </Col>
              </Row>
              <Row>
                  <Col className="ml-auto mr-auto" md="10">
                      <b>C++:</b>&nbsp;&nbsp;&nbsp;
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star"></span>
                        <span class="fa fa-star"></span>
                  </Col>
              </Row>
              <Row>
                  <Col className="ml-auto mr-auto" md="10">
                      <b>OpenMP:</b>&nbsp;&nbsp;&nbsp;
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star"></span>
                        <span class="fa fa-star"></span>
                  </Col>
              </Row>
              <Row>
                  <Col className="ml-auto mr-auto" md="10">
                      <b>OpenFrameworks:</b>&nbsp;&nbsp;&nbsp;
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star"></span>
                        <span class="fa fa-star"></span>
                  </Col>
              </Row>   
              <br />
              <Row>
                  <Col className="ml-auto mr-auto" md="10">
                      <b>OpenCV:</b>&nbsp;&nbsp;&nbsp;
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star"></span>
                        <span class="fa fa-star"></span>
                        <span class="fa fa-star"></span>
                  </Col>
              </Row>
              <Row>
                  <Col className="ml-auto mr-auto" md="10">
                      <b>Clingo:</b>&nbsp;&nbsp;&nbsp;
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star"></span>
                        <span class="fa fa-star"></span>
                        <span class="fa fa-star"></span>
                  </Col>
              </Row>
              <Row>
                  <Col className="ml-auto mr-auto" md="10">
                      <b>Python:</b>&nbsp;&nbsp;&nbsp;
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star"></span>
                        <span class="fa fa-star"></span>
                  </Col>
              </Row>
              <Row>
                  <Col className="ml-auto mr-auto" md="10">
                      <b>NumPy:</b>&nbsp;&nbsp;&nbsp;
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star"></span>
                        <span class="fa fa-star"></span>
                  </Col>
              </Row>    
              <br />
              <Row>
                  <Col className="ml-auto mr-auto" md="10">
                      <b>SciKit Learn:</b>&nbsp;&nbsp;&nbsp;
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star"></span>
                        <span class="fa fa-star"></span>
                        <span class="fa fa-star"></span>
                  </Col>
              </Row>
              <Row>
                  <Col className="ml-auto mr-auto" md="10">
                      <b>Pandas:</b>&nbsp;&nbsp;&nbsp;
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star"></span>
                        <span class="fa fa-star"></span>
                        <span class="fa fa-star"></span>
                  </Col>
              </Row>
              <Row>
                  <Col className="ml-auto mr-auto" md="10">
                      <b>Jupyter Notebook:</b>&nbsp;&nbsp;&nbsp;
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star"></span>
                        <span class="fa fa-star"></span>
                  </Col>
              </Row>
              <Row>
                  <Col className="ml-auto mr-auto" md="10">
                      <b>Bouncy Castle Crypto:</b>&nbsp;&nbsp;&nbsp;
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star"></span>
                        <span class="fa fa-star"></span>
                  </Col>
              </Row>    
              <br />
              <Row>
                  <Col className="ml-auto mr-auto" md="10">
                      <b>Hyperledger Fabric:</b>&nbsp;&nbsp;&nbsp;
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star"></span>
                        <span class="fa fa-star"></span>
                        <span class="fa fa-star"></span>
                        <span class="fa fa-star"></span>
                  </Col>
              </Row>
              <Row>
                  <Col className="ml-auto mr-auto" md="10">
                      <b>Redis:</b>&nbsp;&nbsp;&nbsp;
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star"></span>
                        <span class="fa fa-star"></span>
                        <span class="fa fa-star"></span>
                  </Col>
              </Row>
              <Row>
                  <Col className="ml-auto mr-auto" md="10">
                      <b>JavaCC (Java Compiler-Compiler):</b>&nbsp;&nbsp;&nbsp;
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star"></span>
                        <span class="fa fa-star"></span>
                        <span class="fa fa-star"></span>
                  </Col>
              </Row>
              <Row>
                  <Col className="ml-auto mr-auto" md="10">
                      <b>Jasmim:</b>&nbsp;&nbsp;&nbsp;
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star"></span>
                        <span class="fa fa-star"></span>
                        <span class="fa fa-star"></span>
                  </Col>
              </Row>    
              <br />
              <Row>
                  <Col className="ml-auto mr-auto" md="10">
                      <b>Unity3D:</b>&nbsp;&nbsp;&nbsp;
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star"></span>
                        <span class="fa fa-star"></span>
                        <span class="fa fa-star"></span>
                  </Col>
              </Row>
              <Row>
                  <Col className="ml-auto mr-auto" md="10">
                      <b>Arduino:</b>&nbsp;&nbsp;&nbsp;
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star"></span>
                        <span class="fa fa-star"></span>
                  </Col>
              </Row>
              <Row>
                  <Col className="ml-auto mr-auto" md="10">
                      <b>Google App Engine:</b>&nbsp;&nbsp;&nbsp;
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star"></span>
                        <span class="fa fa-star"></span>
                        <span class="fa fa-star"></span>
                  </Col>
              </Row>
              <Row>
                  <Col className="ml-auto mr-auto" md="10">
                      <b>Android:</b>&nbsp;&nbsp;&nbsp;
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star"></span>
                        <span class="fa fa-star"></span>
                        <span class="fa fa-star"></span>
                  </Col>
              </Row>     
              <br />
              <Row>
                  <Col className="ml-auto mr-auto" md="10">
                      <b>CUDA (Compute Unified Device Architecture):</b>&nbsp;&nbsp;&nbsp;
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star"></span>
                        <span class="fa fa-star"></span>
                  </Col>
              </Row>
              <Row>
                  <Col className="ml-auto mr-auto" md="10">
                      <b>Apache Spark:</b>&nbsp;&nbsp;&nbsp;
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star"></span>
                        <span class="fa fa-star"></span>
                  </Col>
              </Row>
              <Row>
                  <Col className="ml-auto mr-auto" md="10">
                      <b>ReactJS:</b>&nbsp;&nbsp;&nbsp;
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star"></span>
                        <span class="fa fa-star"></span>
                  </Col>
              </Row>
              <Row>
                  <Col className="ml-auto mr-auto" md="10">
                      <b>PostgreSQL:</b>&nbsp;&nbsp;&nbsp;
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star"></span>
                        <span class="fa fa-star"></span>
                  </Col>
              </Row>     
              <br />
              <Row>
                  <Col className="ml-auto mr-auto" md="10">
                      <b>QuTip (Quantum Toolbox in Python):</b>&nbsp;&nbsp;&nbsp;
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star"></span>
                        <span class="fa fa-star"></span>
                        <span class="fa fa-star"></span>
                  </Col>
              </Row>
              <Row>
                  <Col className="ml-auto mr-auto" md="10">
                      <b>IBM QisKit:</b>&nbsp;&nbsp;&nbsp;
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star"></span>
                        <span class="fa fa-star"></span>
                  </Col>
              </Row>
              <Row>
                  <Col className="ml-auto mr-auto" md="10">
                      <b>Google Cirq:</b>&nbsp;&nbsp;&nbsp;
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star"></span>
                        <span class="fa fa-star"></span>
                        <span class="fa fa-star"></span>
                        <span class="fa fa-star"></span>
                  </Col>
              </Row>
              <Row>
                  <Col className="ml-auto mr-auto" md="10">
                      <b>Rigetti PyQuil:</b>&nbsp;&nbsp;&nbsp;
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star"></span>
                        <span class="fa fa-star"></span>
                        <span class="fa fa-star"></span>
                        <span class="fa fa-star"></span>
                  </Col>
              </Row>       
              </TabPane>
              <TabPane tabId="3" id="interests">
              <Row>
                <Col className="ml-auto mr-auto" md="12">
                  <ul className="list-unstyled interests">
                    <li>
                      <Row>
                        <Col className="ml-auto mr-auto" lg="2" md="4" xs="4">
                          <img
                            alt="..."
                            className="img-circle img-no-padding img-responsive"
                            src={require("assets/img/interests/quantum-computing-1.jpg")}
                          />
                        </Col>
                        <Col className="ml-auto mr-auto" lg="7" md="8" xs="4">
                          <h6>
                            Quantum Computing <br /><br />
                            <small><b>Main Topics:</b><br />&bull; Quantum Cryptography<br />&bull; Quantum Networks (Quantum Internet)<br />&bull; Quantum Game Theory</small> <br /><br />
                            <small><b>Other Topics:</b><br />&bull; Post-Quantum Cryptography<br />&bull; Quantum Machine Learning<br />&bull; Quantum Optimisation</small>
                          </h6>
                        </Col>
                      </Row>
                    </li>
                    <hr />
                    <li>
                      <Row>
                        <Col className="ml-auto mr-auto" lg="2" md="4" xs="4">
                          <img
                            alt="..."
                            className="img-circle img-no-padding img-responsive"
                            src={require("assets/img/interests/cryptography-1.jpg")}
                          />
                        </Col>
                        <Col className="ml-auto mr-auto" lg="7" md="8" xs="4">
                          <h6>
                            Cryptography <br /><br />
                            <small><b>Main Topics:</b><br />&bull; Quantum Cryptography<br />&bull; Post-Quantum Cryptography<br />&bull; Classical Cryptography</small> <br /><br />
                            <small><b>Other Topics:</b><br />&bull; Blockchains<br />&bull; Homomorphic Encryption<br />&bull; Ethical Hacking</small>
                          </h6>
                        </Col>
                      </Row>
                    </li>
                    <hr />
                    <li>
                      <Row>
                        <Col className="ml-auto mr-auto" lg="2" md="4" xs="4">
                          <img
                            alt="..."
                            className="img-circle img-no-padding img-responsive"
                            src={require("assets/img/interests/networks-1.jpg")}
                          />
                        </Col>
                        <Col className="ml-auto mr-auto" lg="7" md="8" xs="4">
                          <h6>
                            Networks <br /><br />
                            <small><b>Main Topics:</b><br />&bull; Edge Computing<br />&bull; Fog Computing<br />&bull; Fault-Tolerant Systems</small> <br /><br />
                            <small><b>Other Topics:</b><br />&bull; Byzantine Agreements/Consensus<br />&bull; Cloud Computing<br />&bull; Dependable/Reliable Systems</small>
                          </h6>
                        </Col>
                      </Row>
                    </li>
                    <hr />
                    <li>
                      <Row>
                        <Col className="ml-auto mr-auto" lg="2" md="4" xs="4">
                          <img
                            alt="..."
                            className="img-circle img-no-padding img-responsive"
                            src={require("assets/img/interests/artificial-intelligence-1.jpg")}
                          />
                        </Col>
                        <Col className="ml-auto mr-auto" lg="7" md="8" xs="4">
                          <h6>
                            Artificial Intelligence <br /><br />
                            <small><b>Main Topics:</b><br />&bull; Machine Learning<br />&bull; Deep Learning<br />&bull; Multi-Agent Systems</small> <br /><br />
                            <small><b>Other Topics:</b><br />&bull; Computer Vision<br />&bull; Neural Networks<br />&bull; Robotics</small>
                          </h6>
                        </Col>
                      </Row>
                    </li>
                  </ul>
                </Col>
              </Row>
            </TabPane>
            <TabPane tabId="4" id="tasks">
              <Row>
                  <Col className="ml-auto mr-auto" md="10">
                      <h4><b>N/A</b></h4>
                  </Col>
              </Row>
            </TabPane>
            <TabPane tabId="5" id="blog">
              <Row>
                  <Col className="ml-auto mr-auto" md="10">
                      <h4><b>N/A</b></h4>
                  </Col>
              </Row>
            </TabPane>
            <TabPane tabId="6" id="assignments">
              <Row>
                  <Col className="ml-auto mr-auto" lg="3" md="4" xs="4">
                    <a href="./#/assignments/antonio-assignment-1">
                      <div class="assignment" lg="3" md="4" xs="4">
                        <div class="assignment-img" lg="3" md="4" xs="4">  
                          <img
                          alt="Assignment #1" class="assignment-img"
                          className="img-thumbnail img-no-padding img-responsive"
                          src={require("assets/img/interests/artificial-intelligence-1.jpg")}
                          />  
                         </div>
                         <div class="overlay">
                           <div class="text"><b>Assignment #1</b></div>
                         </div>   
                       </div>
                     </a>
                  </Col>
                  <Col className="ml-auto mr-auto" lg="3" md="4" xs="4">
                     <a href="./#/assignments/antonio-assignment-2">  
                      <div class="assignment" lg="3" md="4" xs="4">
                        <div class="assignment-img" lg="3" md="4" xs="4">  
                          <img
                          alt="Assignment #2" class="assignment-img"
                          className="img-thumbnail img-no-padding img-responsive"
                          src={require("assets/img/interests/artificial-intelligence-1.jpg")}
                          />  
                         </div>
                         <div class="overlay">
                           <div class="text"><b>Assignment #2</b></div>
                         </div>   
                     </div>   
                    </a>
                  </Col>
                  <Col className="ml-auto mr-auto" lg="3" md="4" xs="4">
                    <a href="./#/assignments/antonio-assignment-3">  
                      <div class="assignment" lg="3" md="4" xs="4">
                        <div class="assignment-img" lg="3" md="4" xs="4">  
                          <img
                          alt="Assignment #3" class="assignment-img"
                          className="img-thumbnail img-no-padding img-responsive"
                          src={require("assets/img/interests/artificial-intelligence-1.jpg")}
                          />  
                         </div>
                         <div class="overlay">
                           <div class="text"><b>Assignment #3</b></div>
                         </div>  
                     </div>   
                    </a>
                  </Col>
                  <Col className="ml-auto mr-auto" lg="3" md="4" xs="4">
                    <a href="./#/assignments/antonio-assignment-4">  
                      <div class="assignment" lg="3" md="4" xs="4">
                        <div class="assignment-img" lg="3" md="4" xs="4">  
                          <img
                          alt="Assignment #4" class="assignment-img"
                          className="img-thumbnail img-no-padding img-responsive"
                          src={require("assets/img/interests/artificial-intelligence-1.jpg")}
                          />  
                         </div>
                         <div class="overlay">
                           <div class="text"><b>Assignment #4</b></div>
                         </div>  
                     </div>   
                    </a>
                  </Col>
              </Row>
            </TabPane>
          </TabContent>
        </Container>
      </div>
      <Footer />
    </>
  );
}

export default AntonioProfilePage;

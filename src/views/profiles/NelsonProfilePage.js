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

function NelsonProfilePage() {
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
								src={require("assets/img/faces/nelson-santos.jpeg")}
							/>
						</div>
						<div className="name">
							<h4 className="title">
								<b>Nelson Santos</b>
								<br />
							</h4>
							<h6 className="description">
								Computer Scientist/Engineer and Master Student
							</h6>
						</div>
					</div>
					<Row>
						<Col className="ml-auto mr-auto text-center" md="6">
							<hr />
							<br />
							<h5>
								<b>Biography</b>
							</h5>
							<br />
							<p>Under construction..</p>
							<hr />
							<br />
							<h5>
								<b>Social</b>
							</h5>
							<br />
							<a href="/" target="_blank">
								<Button className="btn-round" color="default" outline>
									<i className="fa fa-facebook" /> Facebook
								</Button>
							</a>
							&nbsp;&nbsp;&nbsp;&nbsp;
							<a href="/" target="_blank">
								<Button className="btn-round" color="default" outline>
									<i className="fa fa-instagram" /> Instagram
								</Button>
							</a>
							<br />
							<br />
							<a href="/" target="_blank">
								<Button className="btn-round" color="default" outline>
									<i className="fa fa-twitter" /> Twitter
								</Button>
							</a>
							&nbsp;&nbsp;&nbsp;&nbsp;
							<a href="/" target="_blank">
								<Button className="btn-round" color="default" outline>
									<i className="fa fa-pinterest" /> Pinterest
								</Button>
							</a>
							<hr />
							<br />
							<h5>
								<b>Professional</b>
							</h5>
							<br />
							<a href="/" target="_blank">
								<Button className="btn-round" color="default" outline>
									<i className="fa fa-linkedin" /> LinkedIn
								</Button>
							</a>
							&nbsp;&nbsp;&nbsp;&nbsp;
							<a href="/" target="_blank">
								<Button className="btn-round" color="default" outline>
									<i className="fa fa-stack-overflow" /> Stack Overflow
								</Button>
							</a>
							<br />
							<br />
							<a href="/" target="_blank">
								<Button className="btn-round" color="default" outline>
									<i className="fa fa-github" /> GitHub
								</Button>
							</a>
							&nbsp;&nbsp;&nbsp;&nbsp;
							<a href="/" target="_blank">
								<Button className="btn-round" color="default" outline>
									<i className="fa fa-github" /> GitHub
								</Button>
							</a>
							<br />
							<br />
							<a href="/" target="_blank">
								<Button className="btn-round" color="default" outline>
									<i className="fa fa-bitbucket" /> Bitbucket
								</Button>
							</a>
							&nbsp;&nbsp;&nbsp;&nbsp;
							<a href="/" target="_blank">
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
									<b>Full Name:</b>&nbsp;&nbsp;&nbsp;Nelson Santos
								</Col>
							</Row>
							<Row>
								<Col className="ml-auto mr-auto" md="10">
									<b>Residence City:</b>&nbsp;&nbsp;&nbsp;Setúbal Portugal
								</Col>
							</Row>
							<Row>
								<Col className="ml-auto mr-auto" md="10">
									<b>Birthday:</b>&nbsp;&nbsp;&nbsp;May 16
								</Col>
							</Row>
							<Row>
								<Col className="ml-auto mr-auto" md="10">
									<b>Zodiac Sign:</b>&nbsp;&nbsp;&nbsp;Taurus
								</Col>
							</Row>
							<br />
							<Row>
								<Col className="ml-auto mr-auto" md="10">
									<b>Affiliation:</b>&nbsp;&nbsp;&nbsp;New University of Lisbon
									(NOVA)
								</Col>
							</Row>
							<Row>
								<Col className="ml-auto mr-auto" md="10">
									<b>Sub-Affiliation:</b>&nbsp;&nbsp;&nbsp;NOVA School of
									Science and Technology (FCT NOVA)
								</Col>
							</Row>
							<Row>
								<Col className="ml-auto mr-auto" md="10">
									<b>Degree:</b>&nbsp;&nbsp;&nbsp;Computer Science and
									Engineering (Integrated Master - BSc. + MSc.)
								</Col>
							</Row>
							<Row>
								<Col className="ml-auto mr-auto" md="10">
									<b>Student No.:</b>&nbsp;&nbsp;&nbsp;48288
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
									<b>Main Roles:</b>&nbsp;&nbsp;&nbsp;CTO (Chief Technology
									Officer) and CDO (Chief Digital Officer)
								</Col>
							</Row>
							<Row>
								<Col className="ml-auto mr-auto" md="10">
									<b>Secondary Roles:</b>&nbsp;&nbsp;&nbsp;Developer and
									Designer
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
							<p>Under construction..</p>

							{/* <Row>
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
									<b>REST (REpresentational State Transfer):</b>
									&nbsp;&nbsp;&nbsp;
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
									<b>CUDA (Compute Unified Device Architecture):</b>
									&nbsp;&nbsp;&nbsp;
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
							</Row> */}
						</TabPane>
						<TabPane tabId="3" id="interests">
							{/* <Row>
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
														Quantum Computing <br />
														<br />
														<small>
															<b>Main Topics:</b>
															<br />
															&bull; Quantum Cryptography
															<br />
															&bull; Quantum Networks (Quantum Internet)
															<br />
															&bull; Quantum Game Theory
														</small>{" "}
														<br />
														<br />
														<small>
															<b>Other Topics:</b>
															<br />
															&bull; Post-Quantum Cryptography
															<br />
															&bull; Quantum Machine Learning
															<br />
															&bull; Quantum Optimisation
														</small>
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
														Cryptography <br />
														<br />
														<small>
															<b>Main Topics:</b>
															<br />
															&bull; Quantum Cryptography
															<br />
															&bull; Post-Quantum Cryptography
															<br />
															&bull; Classical Cryptography
														</small>{" "}
														<br />
														<br />
														<small>
															<b>Other Topics:</b>
															<br />
															&bull; Blockchains
															<br />
															&bull; Homomorphic Encryption
															<br />
															&bull; Ethical Hacking
														</small>
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
														Networks <br />
														<br />
														<small>
															<b>Main Topics:</b>
															<br />
															&bull; Edge Computing
															<br />
															&bull; Fog Computing
															<br />
															&bull; Fault-Tolerant Systems
														</small>{" "}
														<br />
														<br />
														<small>
															<b>Other Topics:</b>
															<br />
															&bull; Byzantine Agreements/Consensus
															<br />
															&bull; Cloud Computing
															<br />
															&bull; Dependable/Reliable Systems
														</small>
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
														Artificial Intelligence <br />
														<br />
														<small>
															<b>Main Topics:</b>
															<br />
															&bull; Machine Learning
															<br />
															&bull; Deep Learning
															<br />
															&bull; Multi-Agent Systems
														</small>{" "}
														<br />
														<br />
														<small>
															<b>Other Topics:</b>
															<br />
															&bull; Computer Vision
															<br />
															&bull; Neural Networks
															<br />
															&bull; Robotics
														</small>
													</h6>
												</Col>
											</Row>
										</li>
									</ul>
								</Col>
							</Row> */}
							<p>Under construction..</p>
						</TabPane>
						<TabPane tabId="4" id="tasks">
							<Row>
								<Col className="ml-auto mr-auto" md="10">
									<h4>
										<b>N/A</b>
									</h4>
								</Col>
							</Row>
						</TabPane>
						<TabPane tabId="5" id="blog">
							<Row>
								<Col className="ml-auto mr-auto" md="10">
									<h4>
										<b>N/A</b>
									</h4>
								</Col>
							</Row>
						</TabPane>
						<TabPane tabId="6" id="assignments">
							<Row>
								<Col className="ml-auto mr-auto" lg="3" md="4" xs="4">
									<a href="./#/assignments/nelson-assignment-1">
										<div class="assignment" lg="3" md="4" xs="4">
											<div class="assignment-img" lg="3" md="4" xs="4">
												<img
													alt="Assignment #1"
													class="assignment-img"
													className="img-thumbnail img-no-padding img-responsive"
													src={require("assets/img/interests/artificial-intelligence-1.jpg")}
												/>
											</div>
											<div class="overlay">
												<div class="text">
													<b>Assignment #1</b>
												</div>
											</div>
										</div>
									</a>
								</Col>
								<Col className="ml-auto mr-auto" lg="3" md="4" xs="4">
									<a href="./#/assignments/nelson-assignment-2">
										<div class="assignment" lg="3" md="4" xs="4">
											<div class="assignment-img" lg="3" md="4" xs="4">
												<img
													alt="Assignment #2"
													class="assignment-img"
													className="img-thumbnail img-no-padding img-responsive"
													src={require("assets/img/interests/artificial-intelligence-1.jpg")}
												/>
											</div>
											<div class="overlay">
												<div class="text">
													<b>Assignment #2</b>
												</div>
											</div>
										</div>
									</a>
								</Col>
								<Col className="ml-auto mr-auto" lg="3" md="4" xs="4">
									<a href="./#/assignments/nelson-assignment-3">
										<div class="assignment" lg="3" md="4" xs="4">
											<div class="assignment-img" lg="3" md="4" xs="4">
												<img
													alt="Assignment #3"
													class="assignment-img"
													className="img-thumbnail img-no-padding img-responsive"
													src={require("assets/img/interests/artificial-intelligence-1.jpg")}
												/>
											</div>
											<div class="overlay">
												<div class="text">
													<b>Assignment #3</b>
												</div>
											</div>
										</div>
									</a>
								</Col>
								<Col className="ml-auto mr-auto" lg="3" md="4" xs="4">
									<a href="./#/assignments/nelson-assignment-4">
										<div class="assignment" lg="3" md="4" xs="4">
											<div class="assignment-img" lg="3" md="4" xs="4">
												<img
													alt="Assignment #4"
													class="assignment-img"
													className="img-thumbnail img-no-padding img-responsive"
													src={require("assets/img/interests/artificial-intelligence-1.jpg")}
												/>
											</div>
											<div class="overlay">
												<div class="text">
													<b>Assignment #4</b>
												</div>
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

export default NelsonProfilePage;

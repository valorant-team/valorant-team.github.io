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
	React.useEffect(() => {});
	return (
		<>
			<div className="section section-the-team">
				<Container>
					<div className="title">
						<h2>
							<b>The Team</b>
						</h2>
					</div>
					<p className="text-justify">
						Our team is composed by the following members:
					</p>
					<Row>
						<Col className="mr-auto ml-auto" md="3" sm="3">
							<h4 className="images-title">
								<center>
									<b>António Morais</b>
								</center>
							</h4>
							<img
								alt="..."
								className="img-circle img-no-padding img-responsive"
								src={require("assets/img/faces/antonio-morais.png")}
							/>
							<hr />
							<p className="text-center">CIO</p>
							<p className="text-center">Developer</p>
							<hr />
							<p className="text-center">
								<i className="nc-icon nc-email-85" />{" "}
								<b>
									E-mail [at] <br />
									campus.fct.unl.pt:
								</b>
								<br />
								<a href="mailto:ad.morais@campus.fct.unl.pt">ad.morais</a>
							</p>
							<hr />
							<p className="text-center">
								<i className="nc-icon nc-tap-01" /> <b>Other Links:</b>
								<br />
								<b>&bull;</b> <i className="nc-icon nc-circle-10" />{" "}
								<a href="/#/antonio-profile-page">Profile Page</a>
							</p>
						</Col>
						<Col className="mr-auto ml-auto" md="3" sm="3">
							<h4 className="images-title">
								<center>
									<b>Nelson Santos</b>
								</center>
							</h4>
							<img
								alt="..."
								className="img-circle img-no-padding img-responsive"
								src={require("assets/img/faces/nelson-santos.jpeg")}
							/>
							<hr />
							<p className="text-center">CEO</p>
							<p className="text-center">Developer</p>
							<hr />
							<p className="text-center">
								<i className="nc-icon nc-email-85" />{" "}
								<b>
									E-mail [at] <br />
									campus.fct.unl.pt:
								</b>
								<br />
								<a href="mailto:nach.santos@campus.fct.unl.pt">nach.santos</a>
							</p>
							<hr />
							<p className="text-center">
								<i className="nc-icon nc-tap-01" /> <b>Other Links:</b>
								<br />
								<b>&bull;</b> <i className="nc-icon nc-circle-10" />{" "}
								<a href="/#/nelson-profile-page">Profile Page</a>
							</p>
						</Col>
						<Col className="mr-auto ml-auto" md="3" sm="3">
							<h4 className="images-title">
								<center>
									<b>Nuno Sequeira</b>
								</center>
							</h4>
							<img
								alt="..."
								className="img-circle img-no-padding img-responsive"
								src={require("assets/img/faces/nuno-sequeira.png")}
							/>
							<hr />
							<p className="text-center">COO</p>
							<p className="text-center">CCO</p>
							<p className="text-center">Developer</p>
							<hr />
							<p className="text-center">
								<i className="nc-icon nc-email-85" />{" "}
								<b>
									E-mail [at] <br />
									campus.fct.unl.pt:
								</b>
								<br />
								<a href="mailto:nm.sequeira@campus.fct.unl.pt">nm.sequeira</a>
							</p>
							<hr />
							<p className="text-center">
								<i className="nc-icon nc-tap-01" /> <b>Other Links:</b>
								<br />
								<b>&bull;</b> <i className="nc-icon nc-circle-10" />{" "}
								<a href="/#/nuno-profile-page">Profile Page</a>
							</p>
						</Col>
						<Col className="mr-auto ml-auto" md="3" sm="3">
							<h4 className="images-title">
								<center>
									<b>Rúben Barreiro</b>
								</center>
							</h4>
							<img
								alt="..."
								className="img-circle img-no-padding img-responsive"
								src={require("assets/img/faces/ruben-barreiro.png")}
							/>
							<hr />
							<p className="text-center">CTO</p>
							<p className="text-center">CDO</p>
							<p className="text-center">Developer</p>
							<p className="text-center">Designer</p>
							<hr />
							<p className="text-center">
								<i className="nc-icon nc-email-85" />{" "}
								<b>
									E-mail [at] <br />
									campus.fct.unl.pt:
								</b>
								<br />
								<a href="mailto:r.barreiro@campus.fct.unl.pt">r.barreiro</a>
							</p>
							<hr />
							<p className="text-center">
								<i className="nc-icon nc-tap-01" /> <b>Other Links:</b>
								<br />
								<b>&bull;</b> <i className="nc-icon nc-circle-10" />{" "}
								<a href="/#/ruben-profile-page">Profile Page</a>
							</p>
						</Col>
					</Row>
				</Container>
			</div>
			<hr />
		</>
	);
}

export default SectionTheTeamShort;

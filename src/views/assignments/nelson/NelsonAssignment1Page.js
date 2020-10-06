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

function ProfilePage() {
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
								<b>Assignment #1</b>
							</h5>

							<h6>
								<b>Good and bad design</b>
							</h6>

							<h6>
								Link para o documento:{" "}
								<a href="https://drive.google.com/file/d/1A6bJBF_jCF4I4fVT16Rtww1AA2R_lE9r/view?usp=sharing">
									Assignment_1
								</a>
							</h6>
							<br />
						</Col>
					</Row>
					<br />
				</Container>
			</div>
			<Footer />
		</>
	);
}

export default ProfilePage;

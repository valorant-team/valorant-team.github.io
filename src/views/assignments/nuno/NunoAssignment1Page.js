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
                src={require("assets/img/faces/nuno-sequeira.jpg")}
              />
            </div>
            <div className="name">
              <h4 className="title">
                <b>Nuno Sequeira</b>
                <br />
              </h4>
              <h6 className="description">Computer Scientist/Engineer and Master Student</h6>
            </div>
          </div>
          <Row>
            <Col className="ml-auto mr-auto text-center" md="6">
                
              <hr />
            
              <br />
                
              <h5><b>Assignment #1</b></h5>
                
              <h6><b>Good and bad design</b></h6>
              
              <br />

              <h4 className="assignment-title"><b>COMPARISON OF OFFICE CHAIRS</b></h4>

              <p>
                Office chairs are good for people that spend lots of time sitting in front 
                of a desk. In a perfect world, desks would be the perfect height for each 
                individual person, but they are not. That is the main reason as to 
                why office chairs are used. They are customizable to fit the person 
                sitting on top of it.
              </p>

              <p>Let's now, compare two examples of office chairs and analyse which is good and which is bad.</p>

              <p className="assignment-subtitle"><b>THE GOOD</b></p>

              <p>
                A great design stands out immediately. Just by looking, people can tell that 
                this chair is customizable and comfortable and therefore, suitable for 
                spending hours sitting in it. The colours are neutral, as to please the 
                higher number of people as possible. Also, the materials look really 
                comfortable. It even has arm support to make sure it is as ergonomic as possible.
              </p>

              <img
                alt="good_design_front"
                className="img-no-padding img-responsive"
                src={require("assets/img/nuno/assignment1/good_design_front.jpeg")}
              />

              <p>
                A closeup from the image below shows the levers to adjust several aspects of the chair, correspondently:
              </p>

              <p>Adjust height</p>
              <p>Strength to lean back</p>
              <p>Lock degrees of leaning</p>

              <img
                alt="good_design_closeup"
                className="img-no-padding img-responsive"
                src={require("assets/img/nuno/assignment1/good_design_closeup.jpeg")}
              />

              <p className="assignment-subtitle"><b>THE BAD</b></p>

              <p>
                A nice design catches the attention of the eye. However, the 
                plastic frame of the chair does not look comfortable to sit for 
                hours at all. The customisation is just a lever to raise or lower 
                the chair. The colours are neutral, as to please the higher number 
                of people as possible, just like the first one.
              </p>

              <img
                alt="bad_design_front"
                className="img-no-padding img-responsive"
                src={require("assets/img/nuno/assignment1/bad_design_front.jpeg")}
              />

              <p>
                The closeup for this chair, really shows that it only has one configurable aspect, which is:
              </p>

              <p>Adjust height</p>

              <img
                alt="bad_design_closeup"
                className="img-no-padding img-responsive"
                src={require("assets/img/nuno/assignment1/bad_design_closeup.jpeg")}
              />

              <p className="assignment-subtitle"><b>THE VERDICT</b></p>

              <p>
                The several reasons as to why the chairs look so different seem 
                really obvious. Price. With a gap of over 100 euros in price, 
                it's clear that the second chair is simply plastic and metal, 
                but the first one offers nice and comfortable materials. Sure, 
                we could add the things from the first to the second, but that 
                would result in an increase of price. Overall, the different 
                of price between them, makes sense.
              </p>

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

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
                src={require("assets/img/faces/antonio-morais.png")}
              />
            </div>
            <div className="name">
              <h4 className="title">
                <b>António Morais</b>
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
                
              <h6><b>Good and bad user interface design</b></h6>
              
              <br />
              
              <h4 className="assignment-subtitle"><b>Goal</b></h4>
              
              <p>
                Find out one example of good user interface design and one example of bad user interface design.
              </p>
              
              <h4 className="assignment-title"><b>Bad user interface</b></h4>
              
              <p>
                An example for a bad user interface is the Arngren, it was a website used to sell electronic gadgets and appliances. Although the website completes its task of exhibiting all its marketable items, it is very difficult for the user to find the desired item.
              </p>
                  
              <img
                alt="bad_design_example"
                className="img-no-padding img-responsive"
                src={require("assets/img/antonio/assignment1/Optimized-bad.png")}
              />  
              
             <br />  

			 <p>
               A solution for this problem would be making a website where the first thing that user can see when entering is a search bar to insert the desired item.
             </p>
             
             <h4 className="assignment-title"><b>Good user interface</b></h4>
              
             <p>
                I considered Ebay a good user interface because one of the first things that shows up after entering the website is a search bar where the user can insert the desired item and the category for that item, thus making it easier for the user to complete his task.
              </p> 
              
             <img
                alt="good_design_example"
                className="img-no-padding img-responsive"
                src={require("assets/img/antonio/assignment1/Optimized-good.png")}
              /> 

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

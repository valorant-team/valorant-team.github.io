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
import LandingPageHeader from "components/Headers/ProjectStageHeader.js";
import Footer from "components/Footers/Footer.js";

function LandingPage() {
  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("profile-page");
    return function cleanup() {
      document.body.classList.remove("profile-page");
    };
  });
  return (
    <>
      <PagesNavbar />
      <LandingPageHeader />
      <div className="main">
        <div className="section text-center">
          <Container>
            <Row>
              <Col className="ml-auto mr-auto" md="8">
                <h2 className="title"><i><b>Masterbook</b></i></h2>
                <hr />
                <br />
                <h3 className="problem-description-title">1. Problem Description</h3>
                <br />
                <h5 className="problem-description">
                  <p>
                    One of the factors that is fundamental to the <i>management</i> of <i><b>society</b></i>'s <i><b>daily tasks</b></i> is the <i><b>time</b></i> available. Whether <i>families</i> or <i>individuals</i>, the <i><b>time</b></i> spent on <i><b>daily tasks</b></i> must be managed accurately to achieve <i><b>goals</b></i>.
                  </p>
                  <br />
                  <p>
                    Often, the new <i><b>"Home Chefs"</b></i> have a problem to start new recipes. People <i><b>should not</b></i> be afraid to <i><b>try new things</b></i>.
                  </p>
                </h5>
                <br />
                <br />
                <h3 className="target-user-title">2. Target Users</h3>
                <br />
                <h5 className="target-user-description">
                  <p>
                    Our target users, can be generalised as the following:
                  </p>
                  <ul>
                    <li>
                      Teenagers/Young Adults, starting to cook and learning about it;
                    </li>
                    <br />
                    <li>
                      Families with limitations of time, due to their jobs, home tasks and daily responsibilities;
                    </li>
                    <br />
                    <li>
                      Elder People, with difficulties and limitations of movements/dislocations;
                    </li>
                    <br />
                    <li>
                      Inexperienced Cookers/Chefs, who want to learn new recipes with other experienced Cookers/Chefs;
                    </li>
                    <br />
                    <li>
                      Experienced Cookers/Chefs, who want to share and/or promote their recipes with other people, including other Cookers/Chefs;
                    </li>
                  </ul>
                </h5>
                <br />
                <br />
                <h3 className="project-goals-title">3. Project Goals</h3>
                <br />
                <h5 className="project-goals-description">
                  <p>
                    The purpose of our <i><b>application</b></i> is to simplify <i>revenue management</i>, which aims to make the most of <i><b>time</b></i>, financial resources, and share opinions about revenues.
                  </p>
                  <br />
                  <p>
                    The goals of our project are:
                  </p>
                  <ol>
                    <li>
                       Create a Recipe Repository with a step-by-step guide, and live timers to ease up the process of cooking;
                    </li>
                    <br />
                    <li>
                       Recommend a recipe according to the ingredients indicated by user;
                    </li>
                    <br />
                    <li>
                       According to the objectives indicated above, the application will display the price of the recipe or ingredients selected by user;
                    </li>
                    <br />
                    <li>
                       Allow people to share and comment each other plates, improving recipes over time;
                    </li>
                  </ol>
                </h5>
                <br />
                <br />
                <h3 className="competition-title">4. Competition</h3>
                <br />
                <h5 className="competition-description">
                  <p>
                    The <a href="https://www.mygreatrecipes.com/"><i><b>My Great Recipes(https://www.mygreatrecipes.com/)</b></i></a> is a similar <i>Website</i>/<i>Platform</i> to ours, allowing the users to <i><b>share</b></i> <i>recipes</i>.
                  </p>
                  <br />
                  <p>
                    This <i>Website/Platform</i> has  a  good <i>graphical interface</i> but the <i>navigation</i> between options is <i><b>not easy</b></i>, and a popup is constantly appearing for us to register or <i>download</i> the <i>mobile application</i>, following the annoying concept of the <i><b>Syndrome of Click to Accept</b></i>.
                  </p>
                  <br />
                  <p>
                    With the development of our <i>application</i>, we intend to <i><b>improve</b></i> this aspects, which we consider being <i><b>unnecessary</b></i>.
                  </p>
                  <br />
                  <p>
                    Other aspect, seen as a possible improvement to this competitor applicationis to implement the <i><b>Project Goals</b></i> <i>3)</i> and <i>4)</i>, mentioned above.
                  </p>
                </h5>
                <br />
                <br />
                <hr />
                <Button
                  className="btn-round"
                  color="info"
                  href="./#/src/assets/docs/hci-project-stage-1.pdf"
                  onClick={(e) => e.preventDefault()}
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

export default LandingPage;

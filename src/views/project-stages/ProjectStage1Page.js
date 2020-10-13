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
                <img src="./#/src/assets/img/logos/masterbook-logo.png" alt="Masterbook - Logo" width="500" />
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
                  <br />
                  <p>
                    Feeding, and remembering the <a href="https://en.wikipedia.org/wiki/Maslow%27s_hierarchy_of_needs"><i><b>Maslow’s Pyramid</b></i></a>, is a <i>physiological necessity</i> and is found at the base of the pyramid, thus supporting all adjacent layers.
                  </p>
                  <br />
                  <p>
                    With the rise of <i><b>remote work</b></i>, influenced by the current <i>pandemic</i>, people, as they spend more <i><b>time</b></i> at home, need to <i>plan</i> and <i>vary</i> their <i>meals</i>. For the <i>profitability</i> of <i><b>time</b></i>, it is necessary to have a <i><b>Recipe Repository</b></i> in order to be consulted, as well as its <i>ingredients</i> and <i>steps to follow</i>.
                  </p>
                  <br />
                  <p>
                    Sometimes, the imagination to <i><b>cook</b></i>, a little due to <i>routines</i>, is scarce. In some situations we have already faced the situation of having few <i>ingredients</i> and not knowing what to <i><b>cook</b></i>.
                  </p>
                  <br />
                  <p>
                    In addition to <i><b>time</b></i> <i>management</i>, it's also important made a good <i>resource management</i>. Thus, it becomes important to have knowledge of the places of sale of the <i>ingredients</i> that have the <i>best prices</i>.
                  </p>
                  <br />
                  <p>
                    As we live in an era of <i>social networks</i>, we sometimes find <i>recipes</i> in <i>Web searches</i>, but we do not find <i><b>any</b></i> <i>opinion</i> or <i>classification</i> of the same.
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
                      <i><b>Teenagers/Young Adults</b></i>, starting to <i>cook</i> and learning about it;
                    </li>
                    <br />
                    <li>
                      <i><b>Families</b></i> with limitations of <i><b>time</b></i>, due to their <i>jobs</i>, <i>home tasks</i> and <i>daily responsibilities</i>;
                    </li>
                    <br />
                    <li>
                      <i><b>Elder People</b></i>, with difficulties and limitations of movements/dislocations;
                    </li>
                    <br />
                    <li>
                      Inexperienced <i><b>Cookers/Chefs</b></i>, who want to learn new <i>recipes</i> with other experienced <i><b>Cookers/Chefs</b></i>;
                    </li>
                    <br />
                    <li>
                      Experienced <i><b>Cookers/Chefs</b></i>, who want to <i>share</i> and/or <i>promote</i> their <i>recipes</i> with other people, including other <i><b>Cookers/Chefs</b></i>;
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
                       Create a <i><b>Recipe Repository</b></i> with a <i>step-by-step guide</i>, and <i>live timers</i> to <i><b>ease up</b></i> the <i>process of cooking</i>;
                    </li>
                    <br />
                    <li>
                       <i><b>Recommend a recipe</b></i> according to the <i>ingredients</i> indicated by <i>user</i>;
                    </li>
                    <br />
                    <li>
                       According to the objectives indicated above, the <i>application</i> will <i><b>display the price of the recipe or ingredients</b></i> selected by <i>user</i>;
                    </li>
                    <br />
                    <li>
                       <i><b>Allow people to share and comment each other plates</b></i>, improving <i>recipes</i> over <i>time</i>;
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
                  href="https://github.com/valorant-team/valorant-team.github.io/raw/master/src/assets/docs/hci-project-stage-1.pdf" target="_blank"
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

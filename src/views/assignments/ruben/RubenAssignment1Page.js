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
                
              <h5><b>Assignment #1</b></h5>
                
              <h6><b>Good and Bad Design<br />(Individual Assignment)</b></h6>
              
              <br />
              
              <h4 className="assignment-subtitle"><b>Goal</b></h4>
              
              <p>
                Find out one example of good user interface design and one example of bad user interface design.
              </p>
              <br />
                  
              <h4 className="assignment-title">
                  <b>Good Design</b>
              </h4>  

              <p>
                The <i><b>Good Design</b></i> chosen by me is the <i><b>Spotify App</b></i>!!! 🎶
              </p>
              <br />
              <p>
                The reason why I chose this <i><b>Music App</b></i> as a <i><b>Good Design</b></i> it's because it <i>offers a very enjoyful experience</i> to the <i><b>users</b></i> who are <i>huge fans</i> of <i><b>music</b></i>, at general. 🙋‍♂️
              </p>
              <br />
              <p>
                The <i><b>dark appearence/theme</b></i> <i>provides a <b>not exhaustive visual experience</b></i> to the <i><b>users</b></i>. 😌
              </p>
              <br />
              <p>
                In fact, <i><b>Dark appearences/themes</b></i> <i>seems to always <b>work very well</b></i> in the <i><b>design</b></i> of this kind of <i><b>apps</b></i>!!! 👍
              </p>
              <br />
              <img
                 alt="Spotify - Screenshot #1"
                 className="img-no-padding img-responsive"
                 width="500"
                 src={require("assets/img/ruben/assignment-1/spotify-good-design-1.png")}
              /> 
              <br />
              <br />
              <i><b>Spotify - Screenshot #1</b></i> 
              <br />
              <br />
              <br />
              <p>
                The <i><b>App</b></i> offers a <i>very <b>simple</b> and <b>intuitive interface</b></i>, with a <i>lot of <b>functionalities</b></i>!!! 💭
              </p>
              <br />
              <p>
                It's <i>very easy to use</i>, providing a very well understanding of its <i><b>functionalities</b></i>, even for <i><b>not experienced users</b></i> of the <i><b>app</b></i>... 😕
              </p>
              <br />
              <p>
                The <i><b>Spotify App</b></i> allows the <i><b>users</b></i> to <i>create</i> and <i>manage</i> <i><b>Music Playlists</b></i>, follow <i><b>Musicians</b></i> and <i><b>Music Artists</b></i>, <i>very easily</i>, <i>only with a few <b>clicks</b></i>!!! 🖱️
              </p>
              <br />
              <img
                 alt="Spotify - Screenshot #2"
                 className="img-no-padding img-responsive"
                 width="500"
                 src={require("assets/img/ruben/assignment-1/spotify-good-design-2.png")}
              /> 
              <br />
              <br />
              <i><b>Spotify - Screenshot #2</b></i> 
              <br/>
              <br/>
              <br/>
              <p>
                An <i><b>App</b></i> that <i>revolutionized</i> the <i>word of <b>music</b></i>, <i>de facto</i>!!! 🎵
              </p>

              <br />
              <hr />
              <br />
              
              <h4 className="assignment-title">
                  <b>Bad Design</b>
              </h4>  

              <p>
                This <i>example</i> it's not related to <i><b>Computer Science</b></i> and <i><b>Informatics</b></i>, or any kind of <i><b>Software</b></i> or <i><b>App</b></i>, at all, and can be indeed, seems to be a little <i><b>"out of box"</b></i>, but I think it's <i>reasonable</i>. 🤔
              </p>
              <br />
              <p>
                But sometimes, the <i><b>simplest</b></i> <i><b>ideas</b></i> and <i><b>designs</b></i>, are the <i><b>better ones</b></i>!!! 💡
              </p>
              <br />
              <p>
                As the <i><b>KISS</b></i> (<i><b>Keep It Simple Stupid</b></i>) <i><b>principle</b></i> argues:
                <ul>
                    <li>
                        <p>
                            <i>Most <b>systems</b> <b>work</b> <b>best</b> if they are kept <b>simple</b> rather than made <b>complicated</b>.</i>
                        </p>
                    </li>
                    <li>
                        <p>
                            <i><b>Simplicity</b> should be a <b>key</b> <b>goal</b> in <b>design</b>, and <b>unnecessary</b> <b>complexity</b> should be <b>avoided</b>.</i>
                        </p>
                    </li>
                </ul>
              </p>
              <br />
              <p>
                All of us, in <i>daily routines</i>, <i>experienced</i> the <i><b>hard task</b></i> of try to <i>keep <b>balance</b></i>, <i>while transporting a <b>food tray</b></i>, in a <i><b>fast food restaurant</b></i> (<i><b>McDonald's</b></i>, <i><b>Burger King</b></i> or similar ones), in order to <i>not let <b>fall</b> the <b>delicious meal</b></i>, <i>before we even start to enjoy it</i>, leading us to <i><b>waste</b></i> <i>completely our <b>money</b></i>, <i>in extreme cases</i>. 😠
              </p>
              <br />
              <img
                alt="Fast Food Tray Accident"
                className="img-no-padding img-responsive"
                width="300"
                src={require("assets/img/ruben/assignment-1/fast-food-tray-accident-fall.gif")}
              />
              <br />
              <br />
              <i><b>An authentic disaster, happening constantly!!!</b></i>
              <br/>
              <br/>
              <br/>
              <p>
                It's a very <i><b>uncomfortable situation</b></i>, right?! 😟
              </p>
              <br />
              <p>
                But, this <i>kind</i> of <i><b>food trays</b></i> can be, <i>easily</i>, <i><b>improved</b></i>!!! 🙋‍♂️
              </p>
              <br />
              <p>
                We just need <i>some few</i> <i><b>little changes</b></i> on the <i>structure</i> and <i>design</i> of this <i><b>food tray</b></i>... 🔧
              </p>
              <br />
              <br />
              <p>
                This it's a <i>graphical representation</i> of the <i><b>standard design</b></i> of <i>most</i> of the <i><b>food trays</b></i>:
              </p>
              <br />
              <img
                 alt="Fast Food Tray - Bad Design"
                 className="img-no-padding img-responsive"
                 width="500"
                 src={require("assets/img/ruben/assignment-1/fast-food-tray-bad-design-1.png")}
              /> 
              <br />
              <br />
              <i><b>Graphical Representation of a<br />McDonald's Standard Fast Food Tray<br />Copyrights: Rúben André Barreiro</b></i>
              <br/>
              <br/>
              <br/>
              <p>
                A possible <i>improvement</i> of this <i><b>Bad Design</b></i> is to <i>create</i> some kind of <i><b>cavity boxes/compartments</b></i>, in the <i><b>food trays</b></i>, for each <i><b>item</b></i> of the <i><b>menu</b></i> asked. 🍟
              </p>
              <br />
              <p>
                And, additionaly could be also <i>added</i> a <i><b>removable</b></i> and <i><b>closing</b></i> <i><b>cover</b></i> for the <i><b>food tray</b></i>. 🤭
              </p>
              <br />
              <p>
                The <i>mechanism</i> of <i>closing</i> the <i><b>cover</b></i> of the <i><b>fast food tray</b></i> it's <i>reasonable</i>, in order to <i>ensure</i> that the <i><b>food</b></i> it's <i>transported <b>safely</b></i>, until a <i><b>client</b></i> gets a <i>desirable place to <b>eat</b></i>, in a <i><b>Shopping</b></i>, per example. 🍴
              </p>
              <br />
              <p>
                 Furthermore, the <i>mechanism</i> of <i>removing</i> the <i><b>cover</b></i> of the <i><b>fast food tray</b></i> it's <i>useful</i>, in order to <i>guarantee</i> that the <i><b>food tray</b></i> <i>doesn't <b>occupy</b></i> <i><b>extra space</b></i> <i>on a table</i>, per example. 😲
              </p>
              <br />
              <br />
              <p>
                This it's a <i>graphical representation</i> of this <i><b>improved design</b></i> for the <i>most</i> of the <i><b>food trays</b></i>:
              </p>
              <br />
              <img
                 alt="Fast Food Tray - Design Improvement #1"
                 className="img-no-padding img-responsive"
                 width="500"
                 src={require("assets/img/ruben/assignment-1/fast-food-tray-design-improvement-1.png")}
              /> 
              <br />
              <br />
              <i><b>Graphical Representation of a Possible<br />McDonald's Improved Fast Food Tray #1<br />Copyrights: Rúben André Barreiro</b></i>
              <br/>
              <br/>
              <br/>
              <p>
                Another possible additional <i>improvement</i> of this <i><b>Bad Design</b></i>, it's also to add another kind of <i><b>cavity box/compartment</b></i>, in the <i><b>food trays</b></i>, with a <i><b>solar cell charger</b></i>, in order to allow the <i><b>client</b></i> <i><b>charge</b></i> his <i><b>mobile phone</b></i>. 📱
              </p>
              <br />
              <p>
                 This could be used by a <i><b>client</b></i>, in a <i><b>terrace</b></i>, <i>during a <b>sunny day</b></i>, while <i>enjoying the <b>sunset</b></i>. 🌞
              </p>
              <br />
              <p>
                This improvement of <i><b>design</b></i> will allow a whole <i><b>new different and funny experience</b></i> to the <i><b>clients</b></i>, <i>with a <b>lot</b> of <b>style</b> and <b>swagg</b></i>!!! 😎
              </p>
              <br />
              <br />
              <p>
                This it's a <i>graphical representation</i> of this <i><b>improved design</b></i> for the <i>most</i> of the <i><b>food trays</b></i>:
              </p>
              <br />
              <img
                 alt="Fast Food Tray - Design Improvement #2"
                 className="img-no-padding img-responsive"
                 width="500"
                 src={require("assets/img/ruben/assignment-1/fast-food-tray-design-improvement-2.png")}
              /> 
              <br />
              <br />
              <i><b>Graphical Representation of a Possible<br />McDonald's Improved Fast Food Tray #2<br />Copyrights: Rúben André Barreiro</b></i>
              <br/>
              <br/>
                    
              <br />
              <hr />
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

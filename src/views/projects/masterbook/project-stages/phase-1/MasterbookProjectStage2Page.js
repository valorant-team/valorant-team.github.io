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

// Reactstrap Components
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

// Core Components
import PagesNavbar from "components/Navbars/PagesNavbar.js";
import ProjectStage2Header from "components/Headers/Project-Stages/Phase-1/ProjectStage2Header.js";
import Footer from "components/Footers/Footer.js";

function MasterbookProjectStage2() {
  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("project-stage-2-page");
    return function cleanup() {
      document.body.classList.remove("project-stage-2-page");
    };
  });
  return (
    <>
      <PagesNavbar />
      <ProjectStage2Header />
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
                <h3 className="problem-description-title">1. Problem Description</h3>
                <br />
                <h5 className="problem-description">
                  <p>
                    One of the factors that is fundamental to the management of <i><b>society</b></i>'s <i><b>daily tasks</b></i> is the <i><b>time</b></i> available. Whether <i><b>families</b></i> or <i><b>individuals</b></i>, the <i><b>time</b></i> spent on <i><b>daily tasks</b></i> must be managed accurately to achieve <i><b>goals</b></i>.
                  </p>
                  <br />
                  <p>
                    Often, the new "<i><b>Home Chefs</b></i>" have <i><b>some problems</b></i> to start new <i><b>Recipes</b></i> and people <i><b>never should</b></i> be <i><b>afraid</b></i> to <i><b>try new things</b></i>.
                  </p>
                  <br />
                  <p>
                    Feeding, and remembering the <a href="https://en.wikipedia.org/wiki/Maslow%27s_hierarchy_of_needs"><i><b>Maslow’s Pyramid</b></i></a>, is a <i><b>physiological necessity</b></i> and is found at the base of the <i><b>pyramid</b></i>, thus supporting all <i><b>adjacent layers</b></i>.
                  </p>
                  <br />
                  <p>
                    With the rise of <i><b>remote work</b></i>, influenced by the current <i><b>pandemic situation</b></i>, people, as they spend more <i><b>time</b></i> at home, need to <i><b>plan</b></i> and <i><b>vary</b></i> their <i><b>meals</b></i>. For the <i><b>profitability</b></i> of <i><b>time</b></i>, it's necessary to have a <i><b>Recipe Repository</b></i>, in order to be consulted, as well as its <i><b>Ingredients/Products</b></i> and <i><b>Steps/Instructions</b></i> to follow, as also, the respective necessary <i><b>time</b></i> for each one of it.
                  </p>
                  <br />
                  <p>
                    Sometimes, the imagination to <i><b>cook</b></i>, a little due to <i><b>routines</b></i>, is scarce. In some situations we have already faced the situation of having few <i><b>Ingredients/Products</b></i> and not knowing what to <i><b>cook</b></i>.
                  </p>
                  <br />
                  <p>
                    In addition to <i><b>time management</b></i>, it's also important made a good <i><b>resource management</b></i>. Thus, it becomes important to have knowledge of the places of sale of the <i><b>Ingredients/Products</b></i> that have the <i><b>best prices</b></i>.
                  </p>
                  <br />
                  <p>
                    As we live in an era of <i><b>Internet</b></i>, we sometimes find <i><b>Recipes</b></i> in <i><b>Web Searches</b></i>, but we do not find <i><b>any</b></i> <i><b>Opinion</b></i> or <i><b>Classification/Score</b></i> of them.
                  </p>
                </h5>
                <br />
                <br />
                <h3 className="user-analysis-title">2. Users' Analysis</h3>
                <br />
                <h5 className="user-analysis-description">
                  <p>
                    The <i><b>target User population</b></i> for our <i><b>application</b></i>, can be specified to a global group of <i><b>Users</b></i>, from an <i><b>age range from 14 to 70 years old</b></i>, since everyone (or almost everyone) belonging to this <i><b>age range</b></i>, needs to <i><b>cook</b></i> and is able to do it.
                  </p>
                  <br />
                  <p>
                    However, our target <i><b>Users</b></i>, can be generalised as the following:
                  </p>
                  <p>
                      <ul>
                        <li>
                          <i><b>Teenagers/Young Adults</b></i>, starting to <i><b>cook</b></i> and learning about it;
                        </li>
                        <br />
                        <li>
                          <i><b>Families</b></i> with limitations of <i><b>time</b></i>, due to their <i><b>jobs</b></i>, <i><b>home tasks</b></i> and <i><b>daily responsibilities</b></i>;
                        </li>
                        <br />
                        <li>
                          <i><b>Elder People</b></i>, with <i><b>difficulties</b></i> and <i><b>limitations</b></i> of <i><b>movements/dislocations</b></i>;
                        </li>
                        <br />
                        <li>
                          Inexperienced <i><b>Cookers/Chefs</b></i>, who want to learn new <i><b>Recipes</b></i> with other experienced <i><b>Cookers/Chefs</b></i>;
                        </li>
                        <br />
                        <li>
                          Experienced <i><b>Cookers/Chefs</b></i>, who want to <i><b>share</b></i> and/or <i><b>promote</b></i> their <i><b>Recipes</b></i> with other people, including other <i><b>Cookers/Chefs</b></i>;
                        </li>
                      </ul>
                  </p>
                </h5>
                <br />
                <br />
                <h3 className="tasks-analysis-title">3. Tasks' Analysis</h3>
                <br />
                <h5 className="tasks-analysis-description">
                  <p>
                    Our <i><b>application</b></i> will be focused, mainly, in <i>6 groups</i> of <i><b>Tasks</b></i>. Each group of the <i><b>Tasks</b></i>, can be subdivided in specific <i><b>Tasks</b></i>, which can be performed by the <i><b>User</b></i>, described (and some of them, highlighted), as following:
                  </p>
                  <br />
                  <p>
                    <ol>
                        <li>
                            <h6><i><b>Management</b></i> of <i><b>Account</b></i>:</h6>
                            <br />
                            (a) <i><b>Creation/Registration of an User's Account</b></i>:
                            <br />
                            <dl>
                                <dt>
                                    <i><b>Objective</b></i>:
                                </dt>
                                <dd>
                                    - The <i><b>User</b></i> wants to <i><b>create/register</b></i> an <i><b>Account</b></i>;
                                </dd>
                                <br />
                                <dt>
                                    <i><b>Pre-Conditions</b></i>:
                                </dt>
                                <dd>
                                    - Cannot exist any <i><b>User</b></i> registered with the given <i><b>username</b></i>;
                                </dd>
                                <br />
                                <dt>
                                    <i><b>Sub-Tasks</b></i>:
                                </dt>
                                <dd>
                                    - Fulfil a <i><b>Web Form</b></i>, providing personal information (ex: <i><b>first name</b></i>, <i><b>last name</b></i>, <i><b>gender</b></i>, <i><b>birthday</b></i>, <i><b>e-mail</b></i>, etc.) and its <i><b>credentials</b></i> (<i><b>username</b></i> and <i><b>password</b></i>), for the <i><b>login</b></i>;
                                </dd>
                                <br />
                                <dt>
                                    <i><b>Exceptions</b></i>:
                                </dt>
                                <dd>
                                    - There's an <i><b>User</b></i> <i><b>registered</b></i>, with the given <i><b>username</b></i>;
                                </dd>
                                <dd>
                                    - Mandatory fields of the <i><b>Web Form</b></i>, left in blank;
                                </dd>
                                <dd>
                                    - <i><b>Password</b></i> chosen don't have <i><b>length</b></i> between 8 and 16;
                                </dd>
                                <dd>
                                    - <i><b>Password</b></i> chosen isn’t composed by <i><b>alpha-numerical characters</b></i> (<i><b>letters</b></i>/<i><b>numbers</b></i>), and by, at least, one <i><b>special character</b></i>;
                                </dd>
                                <br />
                                <dt>
                                    <i><b>Frequency of Use</b></i>:
                                </dt>
                                <dd>
                                    - Low;
                                </dd>
                            </dl>
                            <br />
                            (b) <i><b>Login to an User's Account</b></i>;
                            <br />
                            <br />
                            (c) <i><b>Edition/Change of the details of an User's Account</b></i>;
                            <br />
                            <br />
                            (d) <i><b>Cancelation/Deletion of an Account, by an User</b></i>;
                        </li>
    
                        <br />
                        <br />
                        <br />
                        
                        <li>
                            <h6><i><b>Management</b></i> of <i><b>Recipe</b></i>:</h6>
                            <br />
                            (a) <i><b>Creation/Addition of a Recipe, by an User</b></i>:
                            <br />
                            <dl>
                                <dt>
                                    <i><b>Objective</b></i>:
                                </dt>
                                <dd>
                                    - The <i><b>User</b></i> wants to <i><b>create/add</b></i> a <i><b>Recipe</b></i>, from its own;
                                </dd>
                                <br />
                                <dt>
                                    <i><b>Pre-Conditions</b></i>:
                                </dt>
                                <dd>
                                    - The <i><b>User</b></i> must be <i><b>logged</b></i> in to his <i><b>Account</b></i>;
                                </dd>
                                <br />
                                <dt>
                                    <i><b>Sub-Tasks</b></i>:
                                </dt>
                                <dd>
                                    - Fulfil a <i><b>Web Form</b></i>, providing the information (ex: <i><b>Title</b></i>, <i><b>Sub-Title</b></i>, <i><b>Description</b></i>, <i><b>Ingredients/Products</b></i>, <i><b>Steps/Instructions</b></i>, with <i><b>Timers</b></i>, or even, <i><b>Photos</b></i>, etc.) of the respective <i><b>Recipe</b></i>;
                                </dd>
                                <br />
                                <dt>
                                    <i><b>Exceptions</b></i>:
                                </dt>
                                <dd>
                                    - Mandatory fields of the <i><b>Web Form</b></i> are left in blank;
                                </dd>
                                <br />
                                <dt>
                                    <i><b>Frequency of Use</b></i>:
                                </dt>
                                <dd>
                                    - Low;
                                </dd>
                            </dl>
                            <br />
                            (b) <i><b>Edition/Change of the details of a Recipe, by an User</b></i>;
                            <br />
                            <br />
                            (c) <i><b>Removal/Deletion of a Recipe</b></i>;
                        </li>
    
                        <br />
                        <br />
                        <br />
                        
                        <li>
                            <h6><i><b>Interaction</b></i> with <i><b>Recipe</b></i>:</h6>
                            <br />
                            (a) <i><b>Based on Commenting</b></i>:
                            <br />
                            <br />
                            i. <i><b>Creation/Addition of a Comment to a Recipe, from an User</b></i>:
                            <br />
                            <dl>
                                <dt>
                                    <i><b>Objective</b></i>:
                                </dt>
                                <dd>
                                    - The <i><b>User</b></i> wants to <i><b>create</b></i>/<i><b>add</b></i> a <i><b>comment</b></i> to a <i><b>Recipe</b></i>;
                                </dd>
                                <br />
                                <dt>
                                    <i><b>Pre-Conditions</b></i>:
                                </dt>
                                <dd>
                                    - The <i><b>User</b></i> must be <i><b>logged</b></i> in to his <i><b>Account</b></i>;
                                </dd>
                                <br />
                                <dt>
                                    <i><b>Sub-Tasks</b></i>:
                                </dt>
                                <dd>
                                    - Write the <i><b>comment</b></i>, in the <i><b>text box</b></i> of a <i><b>Web Form</b></i>, below all the <i><b>comments</b></i> already posted, in a <i><b>Recipe</b></i>'s page;
                                </dd>
                                <dd>
                                    - Click on the <i><b>Button</b></i> "<i><b>Comment</b></i>", close to the <i><b>text box</b></i>;
                                </dd>
                                <br />
                                <dt>
                                    <i><b>Exceptions</b></i>:
                                </dt>
                                <dd>
                                    - None;
                                </dd>
                                <br />
                                <dt>
                                    <i><b>Frequency of Use</b></i>:
                                </dt>
                                <dd>
                                    - High;
                                </dd>
                            </dl>
                            <br />
                            <br />
                            ii. <i><b>Edition/Change of a Comment to a Recipe, from an User</b></i>;
                            <br />
                            <br />
                            iii. <i><b>Removal/Deletion of a Comment to a Recipe, from an User</b></i>;
                            <br />
                            <br />
                            <br />
                            (b) <i><b>Based on Sharing</b></i>:
                            <br />
                            <br />
                            i. <i><b>Share a Recipe, from another User</b></i>;
                            <br />
                            <br />
                            <br />
                            (c) <i><b>Based on Reviewing of Quality</b></i>:
                            <br />
                            <br />
                            i. <i><b>Creation/Insertion of a Review of Quality for a Recipe</b></i>:
                            <br />
                            <dl>
                                <dt>
                                    <i><b>Objective</b></i>:
                                </dt>
                                <dd>
                                    - The <i><b>User</b></i> wants to <i><b>Review</b></i> a <i><b>Recipe</b></i>, from other <i><b>User</b></i>, in terms of <i><b>Quality</b></i>;
                                </dd>
                                <br />
                                <dt>
                                    <i><b>Pre-Conditions</b></i>:
                                </dt>
                                <dd>
                                    - The <i><b>User</b></i> must be <i><b>logged</b></i> in to his <i><b>Account</b></i>;
                                </dd>
                                <dd>
                                    - The <i><b>User</b></i> mustn't <i><b>own</b></i> that <i><b>Recipe</b></i>;
                                </dd>
                                <dd>
                                    - The <i><b>User</b></i> cannot have <i><b>reviewed</b></i> that <i><b>Recipe</b></i> yet, in terms of <i><b>Quality</b></i>;
                                </dd>
                                <br />
                                <dt>
                                    <i><b>Sub-Tasks</b></i>:
                                </dt>
                                <dd>
                                    - Click on the <i><b>Button</b></i> "<i><b>Review Quality</b></i>", in a <i><b>Recipe</b></i>'s page;
                                </dd>
                                <dd>
                                    - Select a <i><b>Quality Classification Score</b></i>;
                                </dd>
                                <dd>
                                    - Add a <i><b>Quality Review Comment</b></i> (can be empty);
                                </dd>
                                <dd>
                                    - Click on the <i><b>Button</b></i> "<i><b>Add Quality Review</b></i>";
                                </dd>
                                <br />
                                <dt>
                                    <i><b>Exceptions</b></i>:
                                </dt>
                                <dd>
                                    - No <i><b>Quality Classification Score</b></i> is <i><b>selected</b></i>;
                                </dd>
                                <br />
                                <dt>
                                    <i><b>Frequency of Use</b></i>:
                                </dt>
                                <dd>
                                    - Medium;
                                </dd>
                            </dl>
                            <br />
                            (d) <i><b>Based on Reviewing of Difficulty</b></i>:
                        </li>
    
                        <br />
                        <br />
                        <br />
                        
                        <li>
                            <h6><i><b>Search Topics/Entities/Properties</b></i>:</h6>
                            <br />
                            (a) <i><b>Search Recipes</b></i>;
                            <br />
                            <br />
                            (b) <i><b>Search Ingredients</b></i>;
                            <br />
                            <br />
                            (c) <i><b>Search Shopping Stores</b></i>;
                            <br />
                            <br />
                            (d) <i><b>Search Users</b></i>;
                        </li>
    
                        <br />
                        <br />
                        <br />
                        
                        <li>
                            <h6><i><b>Management</b></i> of <i><b>Shopping Cart</b></i>:</h6>
                            <br />
                            (a) <i><b>Addition/Insertion of Ingredient/Product to an User's Shopping Cart</b></i>:
                            <br />
                            <br />
                            <dl>
                                <dt>
                                    <i><b>Objective</b></i>:
                                </dt>
                                <dd>
                                    - The <i><b>User</b></i> wants to <i><b>add/insert</b></i> a specific <i><b>Ingredient/Product</b></i> to its <i><b>Shopping Cart</b></i>;
                                </dd>
                                <br />
                                <dt>
                                    <i><b>Pre-Conditions</b></i>:
                                </dt>
                                <dd>
                                    - The <i><b>User</b></i> must be <i><b>logged</b></i> in to his <i><b>Account</b></i>;
                                </dd>
                                <br />
                                <dt>
                                    <i><b>Sub-Tasks</b></i>:
                                </dt>
                                <dd>
                                    - <i><b>Search</b></i> for the <i><b>Ingredient/Product</b></i> or select one, from a <i><b>Recipe</b></i>'s page;
                                </dd>
                                <dd>
                                    - Check the <i><b>availability</b></i> and the <i><b>prices</b></i> of the <i><b>Ingredient/Product</b></i>, from several <i><b>Shopping Stores</b></i>;
                                </dd>
                                <dd>
                                    - Click on the <i><b>Button</b></i> "<i><b>Add to Cart</b></i>", in the <i><b>Ingredient/Product</b></i>'s page;
                                </dd>
                                <br />
                                <dt>
                                    <i><b>Exceptions</b></i>:
                                </dt>
                                <dd>
                                    - <i><b>Ingredient/Product not available</b></i>, in a specific <i><b>Shopping Store</b></i>;
                                </dd>
                                <br />
                                <dt>
                                    <i><b>Frequency of Use</b></i>:
                                </dt>
                                <dd>
                                    - Medium;
                                </dd>
                            </dl>
                            <br />
                            <br />
                            (b) <i><b>Removal/Deletion of Ingredient/Product to an User's Shopping Cart</b></i>;
                            <br />
                            <br />
                            (c) <i><b>Performing the Checkout of an User's Shopping Cart</b></i>;
                        </li>
    
                        <br />
                        <br />
                        <br />
                        
                        <li>
                            <h6><i><b>Interaction</b></i> with other <i><b>Users</b></i>:</h6>
                            <br />
                            (a) <i><b>Follow other User's Account and its Feed</b></i>;
                            <br />
                            <br />
                            (b) <i><b>Unfollow other User's Account and its Feed</b></i>;
                            <br />
                            <br />
                            (c) <i><b>Block other User's Account and any possible interaction from it</b></i>;
                        </li>
                    </ol>
                  </p>
                </h5>
                <br />
                <br />
                <h3 className="scenarios-design-title">4. Scenarios' Design</h3>
                <br />
                <h5 className="scenarios-design-description">
                  <h6><i><b>4.1 Scenario #1</b></i></h6>
                  <br />
                  <p>
                    <i><b>Lucy</b></i>, a <i><b>22 years old young girl</b></i>, concluding her <i><b>Bachelor</b></i> studies, in the <i><b>University</b></i>, wants to <i><b>create a simple Recipe</b></i> of <i><b>Fricassee of Chicken</b></i>.
                  </p>
                  <br />
                  <p>
                    She already <i><b>registered</b></i> herself in the <i><b>application</b></i> previously. Thus, in order to <i><b>add</b></i>/<i><b>create</b></i> <i><b>her Recipe</b></i>, she opens the <i><b>application</b></i> and performs the <i><b>login</b></i> with her <i><b>credentials</b></i>.
                  </p>
                  <br />
                  <p>
                    Then, she go to her <i><b>Profile Page</b></i>'s <i><b>Feed</b></i> and find an option to <i><b>add</b></i> the <i><b>Recipe</b></i>.
                  </p>
                  <br />
                  <p>
                    In order to do it, it will be presented to her a <i><b>Form</b></i>, allowing her to provide all the <i><b>information</b></i> regarding to her <i><b>Recipe</b></i>.
                  </p>
                  <br />
                  <p>
                    She fulfil the <i><b>Form</b></i>, providing all the <i><b>information</b></i> asked about her <i><b>Recipe</b></i> (i.e., the <i><b>Recipe</b></i>'s <i><b>Title</b></i>, <i><b>Sub-Title</b></i>, <i><b>Description</b></i>, <i><b>Ingredients/Products</b></i>, <i><b>Steps/Instructions</b></i>, etc.), or even, upload some <i><b>Photos</b></i> showing the final aspect of it, as also, for each <i><b>Step/Instruction</b></i> of it, <i><b>add</b></i> the respective <i><b>Timer</b></i>.
                  </p>
                  <br />
                  <p>
                    After she finish the fulfilment of all the information asked in the <i><b>Form</b></i>, she can, finally, complete the <i><b>addition</b></i>/<i><b>creation</b></i> of her <i><b>Recipe</b></i>.
                  </p>
                  <br />
                  <p>
                    Finally, after she do so, the <i><b>Recipe</b></i> will be added to the <i><b>Masterbook</b></i> <i><b>application</b></i> and will be visible in her <i><b>Profile</b></i>, as also, be visible in all of her <i><b>Followers' Feed</b></i>;
                  </p>
                  <br />
                  <br />
                  <h6><i><b>4.2 Scenario #2</b></i></h6>
                  <br />
                  <p>
                    <i><b>John</b></i>, a <i><b>38 years old engineer</b></i>, <i><b>working remotely from home</b></i>, due to the current <i><b>pandemic situation</b></i>, had to <i><b>spend more time in home</b></i>.
                  </p>
                  <br />
                  <p>
                    He likes to <i><b>cook</b></i> and has already <i><b>added</b></i> several <i><b>Recipes</b></i> to his <i><b>Profile</b></i>, in the <i><b>application</b></i>. As he is a bit saturated with traditional <i><b>social networks</b></i>, he looked for <i><b>Masterbook</b></i> as a way to <i><b>share</b></i> with other people about his <i><b>hobby</b></i>.
                  </p>
                  <br />
                  <p>
                    He then decides to look in the <i><b>added</b></i> <i><b>Recipes</b></i>, in his <i><b>Feed</b></i> if any are of interest to him. As he didn't like none, he decides to look for the profile of <i><b>Users</b></i> he knows. He find <i><b>Paul</b></i>, a well-known <i><b>User</b></i> in <i><b>Masterbook</b></i>, who is an expert in <i><b>Italian Cuisine</b></i>. <i><b>John</b></i> views the latest <i><b>Recipe</b></i> added by <i><b>Paul</b></i>, the <i><b>Fresh Cheese Pizza</b></i>, and decides to <i><b>share</b></i> the <i><b>Recipe</b></i> in his <i><b>Feed</b></i>. Having no ideas for the dinner, he decided to make the <i><b>Fresh Cheese Pizza Recipe</b></i>.
                  </p>
                  <br />
                  <p>
                    <i><b>John</b></i> loved it and was praised by his wife for the delicious <i><b>Pizza</b></i>. As a way of rewarding <i><b>Paul</b></i>'s imagination, <i><b>John</b></i> looked for the <i><b>Recipe</b></i> and decided to give it a <i><b>Good Quality Score</b></i> for the <i><b>Recipe</b></i>'s <i><b>Review</b></i>, and even <i><b>commented</b></i>, so that other <i><b>Users</b></i> have a sense of how delicious that <i><b>Recipe</b></i> was.
                  </p>
                  <br />
                  <br />
                  <h6><i><b>4.3 Scenario #3</b></i></h6>
                  <br />
                  <p>
                    <i><b>Marie</b></i>, a <i><b>71 years old elder woman</b></i>, <i><b>reformed</b></i>/<i><b>retired</b></i> and with some <i><b>difficulties of movement</b></i>, wants to buy some <i><b>Ingredients/Products</b></i> needed to <i><b>cook</b></i> her husband's preferred food plate, the <i><b>Greek-Style Baked Cod</b></i>.
                  </p>
                  <br />
                  <p>
                    She knows the <i><b>Masterbook</b></i> <i><b>app</b></i> can help her about cooking <i><b>Recipes</b></i> and where to buy the required <i><b>Ingredients/Products</b></i> for it, <i><b>spending the less money possible</b></i>, allowing to <i><b>compare the prices between several stores</b></i>.
                  </p>
                  <br />
                  <p>
                    She logs in to the <i><b>app</b></i>, searches about the delicious <i><b>Greek-Style Baked Cod</b></i>, founds this <i><b>Recipes</b></i> and checks all the necessary <i><b>Ingredients/Products</b></i>.
                  </p>
                  <br />
                  <p>
                    She will need <i><b>3 lb Cod Fillet Pieces</b></i>, <i><b>10 Garlic Cloves</b></i>, <i><b>1/2 Cup of Chopped Fresh Parsley Leaves</b></i>, <i><b>10 tbsp of Fresh Lemon Juice</b></i>, <i><b>10 tbsp of Extra Virgin Olive Oil</b></i>, among many others <i><b>Ingredients/Products</b></i>.
                  </p>
                  <br />
                  <p>
                    She noticed that don't have any <i><b>Cod Fillet Piece</b></i>, neither any <i><b>Chopped Fresh Parsley Leaves</b></i> and <i><b>Lemons</b></i>, at her home.
                  </p>
                  <br />
                  <p>
                    For each <i><b>Ingredient/Product</b></i> missing, at her home, displayed in the <i><b>Recipe</b></i>'s page on the <i><b>app</b></i>, she can <i><b>add</b></i> it to her <i><b>Shopping Cart</b></i> and then, the <i><b>app</b></i> <i><b>automatically choose the less expensive of each one of it</b></i>, regarding all the <i><b>Stores</b></i>, in a <i><b>range of 2 kms</b></i>.
                  </p>
                  <br />
                  <p>
                    When all the missing <i><b>Ingredients/Products</b></i> are added to her <i><b>Shopping Cart</b></i>, she can see the <i><b>total money amount</b></i> to <i><b>pay</b></i>, do the <i><b>Checkout</b></i> and perform the <i><b>online payment</b></i>, <i><b>providing her home address</b></i>, for the delivery of all the <i><b>Ingredients/Products</b></i> she bought.
                  </p>
                  <br />
                  <p>
                    After a while, the <i><b>order</b></i> of all the <i><b>Ingredients/Products</b></i> bought by <i><b>Marie</b></i> will be <i><b>delivered</b></i> to her home, so, she can finally <i><b>cook</b></i> the <i><b>Greek-Style Baked Cod</b></i>, for her romantic dinner with her husband.
                  </p>
                </h5>
                <br />
                <br />
                <hr />
                <Button
                  className="btn-round"
                  color="info"
                  href="https://github.com/valorant-team/valorant-team.github.io/raw/master/src/assets/docs/projects/masterbook/reports/phase-1/hci-masterbook-project-stage-2.pdf" target="_blank"
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

export default MasterbookProjectStage2;

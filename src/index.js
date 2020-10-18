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

// React and DOM
import React from "react";
import ReactDOM from "react-dom";
import { HashRouter, Route, Redirect, Switch } from "react-router-dom";

// Styles
import "assets/css/bootstrap.min.css";
import "assets/scss/paper-kit.scss?v=1.2.0";
import "assets/demo/demo.css?v=1.2.0";
import "assets/css/index.css";

// Pages
import Index from "views/Index.js";
import NucleoIcons from "views/NucleoIcons.js";
import LandingPage from "views/examples/LandingPage.js";
import ProfilePage from "views/examples/ProfilePage.js";

import AntonioProfilePage from "views/profiles/AntonioProfilePage.js";
import NelsonProfilePage from "views/profiles/NelsonProfilePage.js";
import NunoProfilePage from "views/profiles/NunoProfilePage.js";
import RubenProfilePage from "views/profiles/RubenProfilePage.js";

import AntonioAssignment1Page from "views/assignments/antonio/AntonioAssignment1Page.js";
import AntonioAssignment2Page from "views/assignments/antonio/AntonioAssignment2Page.js";
import AntonioAssignment3Page from "views/assignments/antonio/AntonioAssignment3Page.js";
import AntonioAssignment4Page from "views/assignments/antonio/AntonioAssignment4Page.js";

import NelsonAssignment1Page from "views/assignments/nelson/NelsonAssignment1Page.js";
import NelsonAssignment2Page from "views/assignments/nelson/NelsonAssignment2Page.js";
import NelsonAssignment3Page from "views/assignments/nelson/NelsonAssignment3Page.js";
import NelsonAssignment4Page from "views/assignments/nelson/NelsonAssignment4Page.js";

import NunoAssignment1Page from "views/assignments/nuno/NunoAssignment1Page.js";
import NunoAssignment2Page from "views/assignments/nuno/NunoAssignment2Page.js";
import NunoAssignment3Page from "views/assignments/nuno/NunoAssignment3Page.js";
import NunoAssignment4Page from "views/assignments/nuno/NunoAssignment4Page.js";

import RubenAssignment1Page from "views/assignments/ruben/RubenAssignment1Page.js";
import RubenAssignment2Page from "views/assignments/ruben/RubenAssignment2Page.js";
import RubenAssignment3Page from "views/assignments/ruben/RubenAssignment3Page.js";
import RubenAssignment4Page from "views/assignments/ruben/RubenAssignment4Page.js";

import MasterbookProjectOverviewPage from "views/projects/masterbook/MasterbookProjectOverviewPage.js";
import MasterbookProjectStage1Page from "views/projects/masterbook/project-stages/phase-1/MasterbookProjectStage1Page.js";
import MasterbookProjectStage2Page from "views/projects/masterbook/project-stages/phase-1/MasterbookProjectStage2Page.js";
import MasterbookProjectStage3Page from "views/projects/masterbook/project-stages/phase-1/MasterbookProjectStage3Page.js";
import MasterbookProjectStage4Page from "views/projects/masterbook/project-stages/phase-2/MasterbookProjectStage4Page.js";
import MasterbookProjectStage5Page from "views/projects/masterbook/project-stages/phase-2/MasterbookProjectStage5Page.js";
import MasterbookProjectStage6Page from "views/projects/masterbook/project-stages/phase-2/MasterbookProjectStage6Page.js";

import RegisterPage from "views/examples/RegisterPage.js";

// Others
ReactDOM.render(
  <HashRouter>
    <Switch>
      <Route exact path="/" render={(props) => <Index {...props} />} />
      <Route exact
        path="/nucleo-icons"
        render={(props) => <NucleoIcons {...props} />}
      />
      <Route exact
        path="/landing-page"
        render={(props) => <LandingPage {...props} />}
      />
      <Route exact
        path="/antonio-profile-page"
        render={(props) => <AntonioProfilePage {...props} />}
      />
      <Route exact
        path="/nelson-profile-page"
        render={(props) => <NelsonProfilePage {...props} />}
      />
      <Route exact
        path="/nuno-profile-page"
        render={(props) => <NunoProfilePage {...props} />}
      />
      <Route exact
        path="/ruben-profile-page"
        render={(props) => <RubenProfilePage {...props} />}
      />

      // Antonio's Assignments
      <Route exact
        path="/assignments/antonio-assignment-1"
        render={(props) => <AntonioAssignment1Page {...props} />}
      />
      <Route exact
        path="/assignments/antonio-assignment-2"
        render={(props) => <AntonioAssignment2Page {...props} />}
      />
      <Route exact
        path="/assignments/antonio-assignment-3"
        render={(props) => <AntonioAssignment3Page {...props} />}
      />
      <Route exact
        path="/assignments/antonio-assignment-4"
        render={(props) => <AntonioAssignment4Page {...props} />}
      />

      // Nelson's Assignments
      <Route exact
        path="/assignments/nelson-assignment-1"
        render={(props) => <NelsonAssignment1Page {...props} />}
      />
      <Route exact
        path="/assignments/nelson-assignment-2"
        render={(props) => <NelsonAssignment2Page {...props} />}
      />
      <Route exact
        path="/assignments/nelson-assignment-3"
        render={(props) => <NelsonAssignment3Page {...props} />}
      />
      <Route exact
        path="/assignments/nelson-assignment-4"
        render={(props) => <NelsonAssignment4Page {...props} />}
      />

      // Nuno's Assignments
      <Route exact
        path="/assignments/nuno-assignment-1"
        render={(props) => <NunoAssignment1Page {...props} />}
      />
      <Route exact
        path="/assignments/nuno-assignment-2"
        render={(props) => <NunoAssignment2Page {...props} />}
      />
      <Route exact
        path="/assignments/nuno-assignment-3"
        render={(props) => <NunoAssignment3Page {...props} />}
      />
      <Route exact
        path="/assignments/nuno-assignment-4"
        render={(props) => <NunoAssignment4Page {...props} />}
      />

      // Ruben's Assignments
      <Route exact
        path="/assignments/ruben-assignment-1"
        render={(props) => <RubenAssignment1Page {...props} />}
      />
      <Route exact
        path="/assignments/ruben-assignment-2"
        render={(props) => <RubenAssignment2Page {...props} />}
      />
      <Route exact
        path="/assignments/ruben-assignment-3"
        render={(props) => <RubenAssignment3Page {...props} />}
      />
      <Route exact
        path="/assignments/ruben-assignment-4"
        render={(props) => <RubenAssignment4Page {...props} />}
      />

      // Masterbook Application - Project's Stages
      <Route exact
        path="/projects/masterbook/project-overview-page"
        render={(props) => <MasterbookProjectOverviewPage {...props} />}
      />
      <Route exact
        path="/projects/masterbook/project-stages/phase-1/project-stage-1-page"
        render={(props) => <MasterbookProjectStage1Page {...props} />}
      />
      <Route exact
        path="/projects/masterbook/project-stages/phase-1/project-stage-2-page"
        render={(props) => <MasterbookProjectStage2Page {...props} />}
      />
      <Route exact
        path="/projects/masterbook/project-stages/phase-1/project-stage-3-page"
        render={(props) => <MasterbookProjectStage3Page {...props} />}
      />
      <Route exact
        path="/projects/masterbook/project-stages/phase-2/project-stage-4-page"
        render={(props) => <MasterbookProjectStage4Page {...props} />}
      />
      <Route exact
        path="/projects/masterbook/project-stages/phase-2/project-stage-5-page"
        render={(props) => <MasterbookProjectStage5Page {...props} />}
      />
      <Route exact
        path="/projects/masterbook/project-stages/phase-2/project-stage-6-page"
        render={(props) => <MasterbookProjectStage6Page {...props} />}
      />

      // Others
      <Route exact
        path="/profile-page"
        render={(props) => <ProfilePage {...props} />}
      />
      <Route exact
        path="/register-page"
        render={(props) => <RegisterPage {...props} />}
      />

      // Home
      <Redirect to="/" />
    </Switch>
  </HashRouter>,
  document.getElementById("root")
);

import React, { Component } from "react";
import { Route, withRouter, Switch, Redirect } from "react-router-dom";

import TopNav from "Containers/TopNav";
import Sidebar from "Containers/Sidebar";


// import UserSettings from "../routes/settings/index";
import gogo from "./gogo";
import secondMenu from "./second-menu";
import dashboard from "./dashboard";
import reports from "./reports";
import analytics from "./analytics";
import thirdSingle from "./third-single";
import addNewSite from "./addNewSite";
// import profile from './profile';

import { connect } from "react-redux";

class MainApp extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { match, containerClassnames } = this.props;
    return (
      <div id="app-container" className={containerClassnames}>
        <TopNav history={this.props.history} />
        <Sidebar />
        <main>
          <div className="container-fluid">
            <Switch>
              <Route path={`${match.url}/gogo`} component={gogo} />
              <Route path={`${match.url}/second-menu`} component={secondMenu} />
              <Route path={`${match.url}/dashboard`} component={dashboard} />
              <Route path={`${match.url}/reports`} component={reports} />
              <Route path={`${match.url}/analytics`} component={analytics} />
              {/* <Route path={`${match.url}/third-single`} component={thirdSingle} /> */}
              <Route path={`${match.url}/addNewSite`} component={addNewSite} />
              {/* <Route path={`${match.url}/settings/user`} component={UserSettings} /> */}
              {/* <Route path={`${match.url}/profile`} component={profile} /> */}
              <Redirect to="/error" />
            </Switch>
          </div>
        </main>
      </div>
    );
  }
}
const mapStateToProps = ({ menu }) => {
  const { containerClassnames } = menu;
  return { containerClassnames };
};

export default withRouter(
  connect(
    mapStateToProps,
    {}
  )(MainApp)
);

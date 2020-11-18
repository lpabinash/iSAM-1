import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import Test from './user/index';

export default ({ match }) => (
    <Switch>
        <Redirect exact from={`${match.url}/`} to={`${match.url}/settings/user`} />
        <Route path={`${match.url}/settings/user`} component={Test} />
        <Redirect to="/error" />
    </Switch>
);
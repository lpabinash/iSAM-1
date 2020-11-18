import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import secondCopy from './second';

export default ({ match }) => (
    <Switch>
        <Redirect exact from={`${match.url}/`} to={`${match.url}/asdda`} />
        <Route path={`${match.url}/asdda`} component={secondCopy} />
        <Redirect to="/error" />
    </Switch>
);
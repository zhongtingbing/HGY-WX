import React from 'react';
import PropTypes from 'prop-types';
import {
  Router, Switch, Route
} from 'dva/router';
import Dynamic from 'dva/dynamic';

function RouterConfig({
  history, app
}) {
  const executionPage = Dynamic({
    app,
    component: () => import('./routes/execution/executionPage')
  });
  const Page01 = Dynamic({
    app,
    component: () => import('./routes/supervision/supervisionPage')
  });
  const Page02 = Dynamic({
    app,
    component: () => import('./routes/page02')
  });
  const Page03 = Dynamic({
    app,
    models: () => [
      import('./models/example')
    ],
    component: () => import('./routes/page03')
  });
  const ProjectOverview = Dynamic({
    app,
    // models: () => [
    //   import('./models/example')
    // ],
    component: () => import('./routes/projectOverview/ProjectOverviewPage')
  });
  const WorkersCondition = Dynamic({
    app,
    // models: () => [
    //   import('./models/example')
    // ],
    component: () => import('./routes/workersCondition/WorkersConditionPage')
  });

  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/" component={WorkersCondition} />
        <Route exact path="/page01" component={Page01} />
        <Route exact path="/page02" component={Page02} />
        <Route exact path="/page03" component={Page03} />
        <Route exact path="/project-overview" component={ProjectOverview} />
        <Route exact path="/workers-condition" component={WorkersCondition} />
      </Switch>
    </Router>
  );
}

RouterConfig.propTypes = {
  history: PropTypes.object.isRequired
};

export default RouterConfig;

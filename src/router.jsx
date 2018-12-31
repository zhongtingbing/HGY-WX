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
      import('./models/main')
    ],
    component: () => import('./routes/page03')
  });
  const Supervision = Dynamic({
    app,
    // models: () => [
    //   import('./models/example')
    // ],
    component: () => import('./routes/supervision/supervisionPage')
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

  const SafeInfo = Dynamic({
    app,
    // models: () => [
    //   import('./models/example')
    // ],
    component: () => import('./routes/safeInfo/SafeInfoPage')
  });
  const ProcessManagement = Dynamic({
    app,
    // models: () => [
    //   import('./models/example')
    // ],
    component: () => import('./routes/processManagement/ProcessManagementPage')
  });
  const SupplyChainMa = Dynamic({
    app,
    // models: () => [
    //   import('./models/example')
    // ],
    component: () => import('./routes/supplyChainMa/SupplyChainMaPage')
  });
  const WorkersCondition2 = Dynamic({
    app,
    // models: () => [
    //   import('./models/example')
    // ],
    component: () => import('./routes/workersCondition2/WorkersCondition2Page')
  });
  const SafeInfo2 = Dynamic({
    app,
    // models: () => [
    //   import('./models/example')
    // ],
    component: () => import('./routes/safeInfo2/SafeInfo2Page')
  });

  const ProcessManagement2 = Dynamic({
    app,
    // models: () => [
    //   import('./models/example')
    // ],
    component: () => import('./routes/processManagement2/ProcessManagement2Page')
  });

  const SupplyChainMa2 = Dynamic({
    app,
    // models: () => [
    //   import('./models/example')
    // ],
    component: () => import('./routes/supplyChainMa2/SupplyChainMa2Page')
  });

  const MoreData = Dynamic({
    app,
    component: () => import('./routes/moreData/MoreDataPage')
  });

  const DeviceMoreData = Dynamic({
    app,
    component: () => import('./routes/safeInfo/DeviceMoreDataPage')
  });
  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/" component={SafeInfo}/>
        {/*<Route exact path="/page01" component={Page01}/>*/}
        {/*<Route exact path="/page02" component={Page02}/>*/}
        {/*<Route exact path="/page03" component={Page03}/>*/}
        <Route exact path="/supervision" component={Supervision} />
        <Route exact path="/project-overview" component={ProjectOverview}/>
        <Route exact path="/workers-condition" component={WorkersCondition}/>
        <Route exact path="/safe-info" component={SafeInfo}/>
        <Route exact path="/process-management" component={ProcessManagement}/>
        <Route exact path="/supply-chain" component={SupplyChainMa}/>
        <Route exact path="/workers-condition2" component={WorkersCondition2}/>
        <Route exact path="/safe-info2" component={SafeInfo2}/>
        <Route exact path="/process-management2" component={ProcessManagement2}/>
        <Route exact path="/supply-chain2" component={SupplyChainMa2}/>
        <Route exact path="/more-data" component={MoreData}/>
        <Route exact path="/device-more-data" component={DeviceMoreData}/>
      </Switch>
    </Router>
  );
}

RouterConfig.propTypes = {
  history: PropTypes.object.isRequired
};

export default RouterConfig;

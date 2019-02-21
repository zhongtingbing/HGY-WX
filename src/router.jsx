import React from 'react';
import PropTypes from 'prop-types';
import {
  Router, Switch, Route
} from 'dva/router';
import Dynamic from 'dva/dynamic';

function RouterConfig({
  history, app
}) {
  const Page01 = Dynamic({
    app,
    component: () => import('./routes/page01')
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

  const Home = Dynamic({
    app,
    component: () => import('./routes/Home/Home')
  });
  const SaleChance = Dynamic({
    app,
    component: () => import('./routes/SaleChance/SaleChance')
  });

  const SaleChanceEdit = Dynamic({
    app,
    component: () => import('./routes/SaleChance/SaleChanceEdit')
  });

  const SaleChanceCustomer = Dynamic({
    app,
    component: () => import('./routes/SaleChance/Customer')
  });


  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/page01" component={Page01}/>
        <Route exact path="/page02" component={Page02}/>
        <Route exact path="/page03" component={Page03}/>
        <Route exact path="/home" component={Home}/>
        <Route exact path="/sale-chance" component={SaleChance}/>
        <Route exact path="/sale-chance-edit" component={SaleChanceEdit}/>
        <Route exact path="/sale-chance-customer" component={SaleChanceCustomer}/>
      </Switch>
    </Router>
  );
}

RouterConfig.propTypes = {
  history: PropTypes.object.isRequired
};

export default RouterConfig;

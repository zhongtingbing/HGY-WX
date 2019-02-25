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

  const SaleChanceFollowRecord = Dynamic({
    app,
    component: () => import('./routes/SaleChance/AddFollowRecord')
  });

  const ShopHome = Dynamic({
    app,
    models: () => [
      import('./models/shop')
    ],
    component: () => import('./routes/Shop/Home')
  });


  const ShopList = Dynamic({
    app,
    models: () => [
      import('./models/shop')
    ],
    component: () => import('./routes/Shop/ShopList')
  });
  const Quotation = Dynamic({
    app,
    models: () => [
      import('./models/shop')
    ],
    component: () => import('./routes/Shop/Quotation')
  });

  const CreateContract = Dynamic({
    app,
    component: () => import('./routes/Contract/CreateContract')
  });
  const ContractEdit = Dynamic({
    app,
    component: () => import('./routes/Contract/ContractEdit')
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
        <Route exact path="/sale-chance-follow-record" component={SaleChanceFollowRecord}/>
        <Route exact path="/shop" component={ShopHome}/>
        <Route exact path="/shop-list" component={ShopList}/>
        <Route exact path="/quotation" component={Quotation}/>
        <Route exact path="/create-contract" component={CreateContract}/>
        <Route exact path="/create-edit" component={ContractEdit}/>
      </Switch>
    </Router>
  );
}

RouterConfig.propTypes = {
  history: PropTypes.object.isRequired
};

export default RouterConfig;

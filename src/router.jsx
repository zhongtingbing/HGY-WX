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

  const Contract = Dynamic({
    app,
    component: () => import('./routes/Contract/Contract')
  });

  const CreateContract = Dynamic({
    app,
    component: () => import('./routes/Contract/CreateContract')
  });
  const ContractEdit = Dynamic({
    app,
    component: () => import('./routes/Contract/ContractEdit')
  });
  const UploadContract = Dynamic({
    app,
    component: () => import('./routes/UploadContract/Customer')
  });

  const EditContractDetail = Dynamic({
    app,
    component: () => import('./routes/Contract/EditContractDetail')
  });
  const UploadContractFile = Dynamic({
    app,
    component: () => import('./routes/Contract/UploadContract')
  });

  const AddCounterpart = Dynamic({
    app,
    component: () => import('./routes/AddCounterpart/AddCounterpart')
  });
  const SaleChanceDetail = Dynamic({
    app,
    component: () => import('./routes/SaleChance/SaleChanceDetail')
  });

  const ContractDetail = Dynamic({
    app,
    component: () => import('./routes/Contract/ContractDetail')
  });

  const GoodsDetail = Dynamic({
    app,
    component: () => import('./routes/Shop/GoodsDetail')
  });

  const Customer = Dynamic({
    app,
    component: () => import('./routes/Customer/Customer')
  });

  const CustomerEdit = Dynamic({
    app,
    component: () => import('./routes/Customer/CustomerEdit')
  });
  const AddCustomerVisitRecord = Dynamic({
    app,
    component: () => import('./routes/Customer/AddVisitRecord')
  });
  const CustomerDetail = Dynamic({
    app,
    component: () => import('./routes/Customer/CustomerDetail')
  });

  const Order = Dynamic({
    app,
    component: () => import('./routes/Order/Order')
  });

  const OrderEdit = Dynamic({
    app,
    component: () => import('./routes/Order/OrderEdit')
  });

  const OrderDetail = Dynamic({
    app,
    component: () => import('./routes/Order/OrderDetail')
  });

  const OrderPayment = Dynamic({
    app,
    component: () => import('./routes/Order/Payment')
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
        <Route exact path="/sale-chance-detail" component={SaleChanceDetail}/>
        <Route exact path="/shop" component={ShopHome}/>
        <Route exact path="/shop-list" component={ShopList}/>
        <Route exact path="/goods-detail" component={GoodsDetail}/>
        <Route exact path="/quotation" component={Quotation}/>
        <Route exact path="/contract" component={Contract}/>
        <Route exact path="/create-contract" component={CreateContract}/>
        <Route exact path="/upload-contract" component={UploadContract}/>
        <Route exact path="/contract-detail" component={ContractDetail}/>
        <Route exact path="/create-edit" component={ContractEdit}/>
        <Route exact path="/edit-contract-detail" component={EditContractDetail}/>
        <Route exact path="/upload-contract-file" component={UploadContractFile}/>
        <Route exact path="/add-counterpart" component={AddCounterpart}/>
        <Route exact path="/customer" component={Customer}/>
        <Route exact path="/customer-edit" component={CustomerEdit}/>
        <Route exact path="/customer-add-visit-record" component={AddCustomerVisitRecord}/>
        <Route exact path="/customer-detail" component={CustomerDetail}/>
        <Route exact path="/order" component={Order}/>
        <Route exact path="/order-edit" component={OrderEdit}/>
        <Route exact path="/order-detail" component={OrderDetail}/>
        <Route exact path="/order-payment" component={OrderPayment}/>
      </Switch>
    </Router>
  );
}

RouterConfig.propTypes = {
  history: PropTypes.object.isRequired
};

export default RouterConfig;

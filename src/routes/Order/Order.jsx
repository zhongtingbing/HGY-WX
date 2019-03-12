import React from 'react';
import OrderView from './OrderView'
import { routerRedux } from 'dva/router'
import {
  connect
} from 'dva';

import { testService, querySaleChanceService } from '../../services/query';

class Order extends React.Component{
  constructor(props){
    super(props)
    this.state={
    }
  }

componentDidMount(){
    this.getData()
}

   getData = () => {
     testService().then(res=>{
     })
    }

  querySaleChance= (param) => {
    return querySaleChanceService(param)
  }

  onSearch = (value) => {
     console.log(value)
  }

  onChange = (o) => {
    this.setState({
      ...o
    })
  }

  toEdit = (record) => {
    this.props.goTo('/order-edit', {...record})
  }

  onAdd = () => {
    this.props.goTo('/customer-edit')
  }

  toDetail = (record) => {
    this.props.goTo('/order-detail')
  }

  toCreateGoodList = (record) => {
    this.props.goTo('/shop', {...record})
  }


  toPayment = (record) => {
    this.props.goTo('/order-payment', {...record})
  }
  render() {
  return (
    <OrderView
      {...this.props}
      {...this.state}
      title="订单管理"
      querySaleChance={this.querySaleChance}
      toEdit={this.toEdit}
      onAdd={this.onAdd}
      toDetail={this.toDetail}
      toCreateGoodList={this.toCreateGoodList}
      onChange={this.onChange}
      toPaymentRecord = {this.toPayment}
    />
  )
}
}

function mapStateToProps() {
  return {};
}

function propsDispatchToMap(dispatch) {
  window._dispatch = dispatch
  return {
    goTo(pathname, state) {
      dispatch(routerRedux.push({
        pathname,
        state,
      }))
    }
  };
}

export default connect(mapStateToProps ,propsDispatchToMap)(Order);

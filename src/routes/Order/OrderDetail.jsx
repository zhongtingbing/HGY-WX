import React from 'react';
import OrderDetailView from './OrderDetailView'
import { routerRedux } from 'dva/router'
import {
  connect
} from 'dva';

import { testService, querySaleChanceService } from '../../services/query';

class OrderDetail extends React.Component{
  constructor(props){
    super(props)
    this.state={
      ...props.location.state
    }
  }

componentDidMount(){
    this.getData()
}

   getData = () => {
     testService().then(res=>{
     })
    }


  onChange = (value) => {
    this.setState({
      ...value
    })
  }

  querySaleChance= (param) => {
     return querySaleChanceService(param)
  }


  toEdit = () => {
    this.props.goTo('order-edit', this.props.location.state)
  }

  render() {
  return (
    <OrderDetailView
      {...this.props}
      {...this.state}
      onChange={this.onChange}
      toEdit={this.toEdit}
      title="订单详情"
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
    },
  };
}

export default connect(mapStateToProps ,propsDispatchToMap)(OrderDetail);

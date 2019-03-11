import React from 'react';
import CustomerDetailView from './CustomerDetailView'
import { routerRedux } from 'dva/router'
import {Modal} from 'antd-mobile'
import {
  connect
} from 'dva';

import { testService, querySaleChanceService } from '../../services/query';

class CustomerDetail extends React.Component{
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

  onSearch = (value) => {
     console.log(value)
  }

  onChange = (o) => {
    this.setState({
      ...o
    })
  }

  querySaleChance= (param) => {
     return querySaleChanceService(param)
  }

  toEdit = () => {
    this.props.goTo('/customer-edit', {...this.props.location.state, type: 'edit'})
  }

  onAdd = () => {
    this.props.goTo('/sale-chance-edit')
  }

  save = () => {
  }

  onNewQuote = () => {
    Modal.alert('是否基于前一份报价单直接创建','', [
      {'text': '否', onPress: () => {
        this.props.goTo('/sale-chance-edit', {from: '/shop', newFlag: false})
      }},
      {'text': '是', onPress: () => {
        this.props.goTo('/sale-chance-edit', {from: '/sale-chance-detail', newFlag: true})
      }}
    ])
  }

  render() {
  return (
    <CustomerDetailView
      {...this.props}
      {...this.state}
      toEdit={this.toEdit}
      onChange={this.onChange}
      querySaleChance={this.querySaleChance}
      onAdd={this.onAdd}
      save={this.save}
      onNewQuote={this.onNewQuote}
      title="客户管理详情"
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

export default connect(mapStateToProps ,propsDispatchToMap)(CustomerDetail);

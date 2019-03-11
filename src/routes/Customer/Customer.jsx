import React from 'react';
import CustomerView from './CustomerView'
import { routerRedux } from 'dva/router'
import {
  connect
} from 'dva';

import { testService, querySaleChanceService } from '../../services/query';

class Customer extends React.Component{
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

  toVisitRecord =(record) => {
    this.props.goTo('/customer-add-visit-record', record)
  }

  toAddCounterpart = (record) => {
    this.props.goTo('/add-counterpart', record)
  }

  toEdit = (record) => {
    this.props.goTo('/customer-edit', {...record, type: 'edit'})
  }

  onAdd = () => {
    this.props.goTo('/customer-edit')
  }

  toDetail = (record) => {
    this.props.goTo('/customer-detail')
  }


  render() {
  return (
    <CustomerView
      {...this.props}
      {...this.state}
      title="客户管理"
      toVisitRecord={this.toVisitRecord}
      toAddCounterpart={this.toAddCounterpart}
      querySaleChance={this.querySaleChance}
      toEdit={this.toEdit}
      onAdd={this.onAdd}
      toDetail={this.toDetail}
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

export default connect(mapStateToProps ,propsDispatchToMap)(Customer);

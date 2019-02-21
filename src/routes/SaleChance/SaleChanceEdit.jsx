import React from 'react';
import SaleChanceEditView from './SaleChanceEditView'
import { routerRedux } from 'dva/router'
import {
  connect
} from 'dva';

import { testService, querySaleChanceService } from '../../services/query';

class SaleChanceEdit extends React.Component{
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

  toEdit = () => {}

  toDetail = () => {}

  nextStep = () => {
    this.props.goTo(

    )
  }

  render() {
  return (
    <SaleChanceEditView
      {...this.props}
      {...this.state}
      onChange={this.onChange}
      querySaleChance={this.querySaleChance}
      nextStep={this.nextStep}
      title="新增销售机会"
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
    go(){
      dispatch({
        type: 'main/query',
        payload: {id: 22},
      })
    },
    goTo(path) {
      dispatch(routerRedux.pushState(path))
    }
  };
}

export default connect(mapStateToProps ,propsDispatchToMap)(SaleChanceEdit);

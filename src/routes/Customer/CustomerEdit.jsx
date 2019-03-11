import React from 'react';
import CustomerEditView from './CustomerEditView'
import { routerRedux } from 'dva/router'
import {
  connect
} from 'dva';

import { testService, querySaleChanceService } from '../../services/query';

class CustomerEdit extends React.Component{
  constructor(props){
    super(props)
    this.state={
      ...props.location.state,
      files: []
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

  nextStep = () => {
    this.props.goTo('/sale-chance-customer')
  }

  onSubmit = () => {

  }

  render() {
  return (
    <CustomerEditView
      {...this.props}
      {...this.state}
      onChange={this.onChange}
      onSubmit={this.onSubmit}
      querySaleChance={this.querySaleChance}
      nextStep={this.nextStep}
      title={this.state.type ==='edit' ? "编辑客户" : "新增客户"}
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
    goTo(path, data) {
      dispatch(routerRedux.push(path, {state: data}))
    }
  };
}

export default connect(mapStateToProps ,propsDispatchToMap)(CustomerEdit);

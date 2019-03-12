import React from 'react';
import PaymentView from './PaymentView'
import { routerRedux } from 'dva/router'
import {
  connect
} from 'dva';

import { testService, querySaleChanceService } from '../../services/query';

class Payment extends React.Component{
  constructor(props){
    super(props)
    this.state={
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

  onChange = (value) => {
    this.setState({
      ...value
    })
  }

  querySaleChance= (param) => {
     return querySaleChanceService(param)
  }

  onSubmit = () => {
    // this.props.goTo()
  }

  render() {
  return (
    <PaymentView
      {...this.props}
      {...this.state}
      onChange={this.onChange}
      querySaleChance={this.querySaleChance}
      onSubmit={this.onSubmit}
      title="添加回款记录"
    />
  )
}
}

function mapStateToProps() {
  return {};
}

function propsDispatchToMap(dispatch) {
  return {
    goTo(path) {
      dispatch(routerRedux.push(path))
    }
  };
}

export default connect(mapStateToProps ,propsDispatchToMap)(Payment);

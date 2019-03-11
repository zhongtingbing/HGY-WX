import React from 'react';
import ContractDetailView from './ContractDetailView'
import { routerRedux } from 'dva/router'
import {
  connect
} from 'dva';

import { testService, querySaleChanceService } from '../../services/query';

class ContractDetail extends React.Component{
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
    this.props.goTo('edit-contract-detail', this.props.location.state)
  }

  render() {
  return (
    <ContractDetailView
      {...this.props}
      {...this.state}
      onChange={this.onChange}
      toEdit={this.toEdit}
      title="合同详情"
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

export default connect(mapStateToProps ,propsDispatchToMap)(ContractDetail);

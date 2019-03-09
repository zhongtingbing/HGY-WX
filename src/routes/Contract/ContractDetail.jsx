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
      modalVisible: false
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

  onSubmit = () => {
    this.props.goTo()
  }

  onModalVisibleChange = () => {
  this.setState({
    modalVisible: !this.state.modalVisible
  })
  }
  toWX = () => {
    this.setState({
      modalVisible: false
    })
  }
  toQQ = () => {
    this.setState({
      modalVisible: false
    })
  }
  toEmail = () => {
    this.setState({
      modalVisible: false
    })
  }

  render() {
  return (
    <ContractDetailView
      {...this.props}
      {...this.state}
      onChange={this.onChange}
      onModalVisibleChange={this.onModalVisibleChange}
      toWX={this.toWX}
      toQQ={this.toQQ}
      toEmail={this.toEmail}
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

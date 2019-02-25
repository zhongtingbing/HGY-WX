import React from 'react';
import ContractEditView from './ContractEditView'
import { routerRedux } from 'dva/router'
import {
  connect
} from 'dva';

import { testService, querySaleChanceService } from '../../services/query';

class ContractEdit extends React.Component{
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
    <ContractEditView
      {...this.props}
      {...this.state}
      onChange={this.onChange}
      onModalVisibleChange={this.onModalVisibleChange}
      toWX={this.toWX}
      toQQ={this.toQQ}
      toEmail={this.toEmail}
      title="新建合同"
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
    goTo(pathname, state) {
      dispatch(routerRedux.push({
        pathname,
        state,
      }))
    },
  };
}

export default connect(mapStateToProps ,propsDispatchToMap)(ContractEdit);

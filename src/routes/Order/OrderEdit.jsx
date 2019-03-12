import React from 'react';
import OrderEditView from './OrderEditView'
import { routerRedux } from 'dva/router'
import {
  connect
} from 'dva';

import { testService } from '../../services/query';

class OrderEdit extends React.Component{
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

  toNew = () => {
    this.props.goTo('/create-edit')
  }
  toUpload = () => {
    this.props.goTo('upload-contract-file')
  }

  toUploadWithoutProof = () => {

  }

  onChange = (o) => {
    this.setState({
      ...o
    })
  }

  render() {
  return (
    <OrderEditView
      {...this.props}
      {...this.state}
      toNew={this.toNew}
      toUpload={this.toUpload}
      toUploadWithoutProof={this.toUploadWithoutProof}
      onChange={this.onChange}
      title="编辑订单"
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

export default connect(mapStateToProps ,propsDispatchToMap)(OrderEdit);

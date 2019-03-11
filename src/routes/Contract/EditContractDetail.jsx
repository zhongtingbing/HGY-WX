import React from 'react';
import EditContractDetailView from './EditContractDetailView'
import { routerRedux } from 'dva/router'
import {
  connect
} from 'dva';

import { testService } from '../../services/query';

class EditContractDetail extends React.Component{
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
    <EditContractDetailView
      {...this.props}
      {...this.state}
      toNew={this.toNew}
      toUpload={this.toUpload}
      toUploadWithoutProof={this.toUploadWithoutProof}
      onChange={this.onChange}
      title="编辑合同"
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

export default connect(mapStateToProps ,propsDispatchToMap)(EditContractDetail);

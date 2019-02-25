import React from 'react';
import CreateContractView from './CreateContractView'
import { routerRedux } from 'dva/router'
import {
  connect
} from 'dva';

import { testService } from '../../services/query';

class CreateContract extends React.Component{
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

  }

  toUploadWithoutProof = () => {

  }
  render() {
  return (
    <CreateContractView
      {...this.props}
      {...this.state}
      toNew={this.toNew}
      toUpload={this.toUpload}
      toUploadWithoutProof={this.toUploadWithoutProof}
      title="创建合同"
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

export default connect(mapStateToProps ,propsDispatchToMap)(CreateContract);

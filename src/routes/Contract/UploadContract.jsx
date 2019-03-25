import React from 'react';
import UploadContractView from './UploadContractView'
import { routerRedux } from 'dva/router'
import {
  connect
} from 'dva';

import { testService, querySaleChanceService } from '../../services/query';

class UploadContract extends React.Component{
  constructor(props){
    super(props)
    this.state={
      ...props.location.state,
      files: [],
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

  onSubmit = () => {
    this.props.goTo()
  }

  onCancel = () => {
    _dispatch(routerRedux.goBack())
  }

  render() {
    return (
      <UploadContractView
        {...this.props}
        {...this.state}
        onChange={this.onChange}
        onCancel={this.onCancel}
        onSubmit={this.onSubmit}
      />
    )
  }
}

UploadContract.defaultProps={
  title: "上传自定义合同"
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

export default connect(mapStateToProps ,propsDispatchToMap)(UploadContract);

import React from 'react';
import AddCounterpartView from './AddCounterpartView'
import { routerRedux } from 'dva/router'
import {
  connect
} from 'dva';

import { testService } from '../../services/query';

class AddCounterpart extends React.Component{
  constructor(props){
    super(props)
    this.state={
      files: []
    }
  }

   getData = () => {
     // testService().then(res=>{
     // })
    }

  onSubmit = () => {

  }

  onChange = (value) => {
    this.setState({
      ...value
    })
  }
  render() {
  return (
    <AddCounterpartView
      {...this.props}
      {...this.state}
      onSubmit={this.onSubmit}
      onChange={this.onChange}
      title="新增对接人员"
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
    goTo(path) {
      dispatch(routerRedux.push(path))
    }
  };
}

export default connect(mapStateToProps ,propsDispatchToMap)(AddCounterpart);

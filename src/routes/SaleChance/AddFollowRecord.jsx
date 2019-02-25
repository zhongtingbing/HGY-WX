import React from 'react';
import AddFollowRecordView from './AddFollowRecordView'
import { routerRedux } from 'dva/router'
import {
  connect
} from 'dva';

import { testService, querySaleChanceService } from '../../services/query';

class AddFollowRecord extends React.Component{
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

  onChange = (value) => {
  console.log(value)
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

  render() {
  return (
    <AddFollowRecordView
      {...this.props}
      {...this.state}
      onChange={this.onChange}
      querySaleChance={this.querySaleChance}
      onSubmit={this.onSubmit}
      title="新增跟进记录"
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
    goTo(path) {
      dispatch(routerRedux.pushState(path))
    }
  };
}

export default connect(mapStateToProps ,propsDispatchToMap)(AddFollowRecord);

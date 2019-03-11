import React from 'react';
import AddVisitRecordView from './AddVisitRecordView'
import { routerRedux } from 'dva/router'
import {
  connect
} from 'dva';

import { testService, querySaleChanceService } from '../../services/query';

class AddVisitRecord extends React.Component{
  constructor(props){
    super(props)
    this.state={
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

  render() {
  return (
    <AddVisitRecordView
      {...this.props}
      {...this.state}
      onChange={this.onChange}
      querySaleChance={this.querySaleChance}
      onSubmit={this.onSubmit}
      title="新增拜访记录"
    />
  )
}
}

function mapStateToProps() {
  return {};
}

function propsDispatchToMap(dispatch) {
  return {
    go(){
      dispatch({
        type: 'main/query',
        payload: {id: 22},
      })
    },
    goTo(path) {
      dispatch(routerRedux.push(path))
    }
  };
}

export default connect(mapStateToProps ,propsDispatchToMap)(AddVisitRecord);

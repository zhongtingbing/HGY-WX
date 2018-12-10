import React from 'react';
import { routerRedux } from 'dva/router'
import {
  connect
} from 'dva';

import WorkersConditionView from './WorkersConditionView';

class WorkersConditionPage extends React.PureComponent{
  constructor(props) {
    super(props)
    this.state = {
      data:[]
    }
  }


  componentDidMount(){

  }

  render(){
    return (
      <WorkersConditionView
        {...this.state}
        {...this.props}
      />
    )
  }
}
function mapStateToProps(dispatch) {
  return {
  };
}


function mapDispatchToProps(dispatch) {
  return {
    moreClick(kVMap, data){
      dispatch(routerRedux.push({
        pathname: '/more-data',
        state: {
          kVMap,
          data
        },
      }))
    }
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(WorkersConditionPage);

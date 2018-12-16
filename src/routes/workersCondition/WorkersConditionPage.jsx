import React from 'react';
import { routerRedux } from 'dva/router'
import {
  connect
} from 'dva';

import WorkersConditionView from './WorkersConditionView';
import { worksConditionService } from '../../services/query';
class WorkersConditionPage extends React.PureComponent{
  constructor(props) {
    super(props)
    this.state = {
      data:{},
      loading: true
    }
  }

  componentDidMount(){
    worksConditionService().then(res => {
      this.setState({
        data: res,
        loading: false,
      })
    })
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

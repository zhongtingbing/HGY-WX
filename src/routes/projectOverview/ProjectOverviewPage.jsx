import React from 'react';
import { routerRedux } from 'dva/router'
import {
  connect
} from 'dva';

import ProjectOverviewView from './ProjectOverviewView';

class ProjectOverviewPage extends React.PureComponent{
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
      <ProjectOverviewView
        {...this.state}
        {...this.props}
      />
    )
  }
}
function mapStateToProps() {
  return {};
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

export default connect(mapStateToProps, mapDispatchToProps)(ProjectOverviewPage);

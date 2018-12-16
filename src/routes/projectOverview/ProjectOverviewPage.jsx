import React from 'react';
import { routerRedux } from 'dva/router'
import {projectOverviewService} from '../../services/query'
import {
  connect
} from 'dva';

import ProjectOverviewView from './ProjectOverviewView';

class ProjectOverviewPage extends React.PureComponent{
  constructor(props) {
    super(props)
    this.state = {
      loading: true,
    }
  }


  componentDidMount(){
    projectOverviewService().then(res => {
      this.setState({
        loading: false,
        ...res
      })
    })
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

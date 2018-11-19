import React from 'react';
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

export default connect(mapStateToProps)(ProjectOverviewPage);

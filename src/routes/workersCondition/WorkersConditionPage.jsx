import React from 'react';
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
function mapStateToProps() {
  return {};
}

export default connect(mapStateToProps)(WorkersConditionPage);

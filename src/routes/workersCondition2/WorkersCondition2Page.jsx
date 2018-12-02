import React from 'react';
import {
  connect
} from 'dva';

import WorkersCondition2View from './WorkersCondition2View';

class WorkersConditionPage2 extends React.PureComponent{
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
      <WorkersCondition2View
        {...this.state}
        {...this.props}
      />
    )
  }
}
function mapStateToProps() {
  return {};
}

export default connect(mapStateToProps)(WorkersConditionPage2);

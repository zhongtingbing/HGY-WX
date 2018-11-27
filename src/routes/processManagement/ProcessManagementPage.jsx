import React from 'react';
import {
  connect
} from 'dva';

import ProcessManagementView from './ProcessManagementView';

class ProcessManagementPage extends React.PureComponent{
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
      <ProcessManagementView
        {...this.state}
        {...this.props}
      />
    )
  }
}
function mapStateToProps() {
  return {};
}

export default connect(mapStateToProps)(ProcessManagementPage);

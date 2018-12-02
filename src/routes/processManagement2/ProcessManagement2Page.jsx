import React from 'react';
import {
  connect
} from 'dva';

import ProcessManagement2View from './ProcessManagement2View';

class ProcessManagement2Page extends React.PureComponent{
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
      <ProcessManagement2View
        {...this.state}
        {...this.props}
      />
    )
  }
}
function mapStateToProps() {
  return {};
}

export default connect(mapStateToProps)(ProcessManagement2Page);

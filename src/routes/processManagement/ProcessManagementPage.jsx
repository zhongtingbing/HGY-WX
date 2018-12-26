import React from 'react';
import {
  connect
} from 'dva';
import {ProcessManagementService} from '../../services/query'

import ProcessManagementView from './ProcessManagementView';

class ProcessManagementPage extends React.PureComponent{
  constructor(props) {
    super(props)
    this.state = {
      data:[],
      loading: true
    }
  }


  componentDidMount(){
    ProcessManagementService().then(res => {
      this.setState({
        ...res,
        loading: false
      })
    })
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

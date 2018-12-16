import React from 'react';
import {
  connect
} from 'dva';
import {ProcessManagement2Service} from '../../services/query'
import ProcessManagement2View from './ProcessManagement2View';

class ProcessManagement2Page extends React.PureComponent{
  constructor(props) {
    super(props)
    this.state = {
      data:[],
      loading: true
    }
  }


  componentDidMount(){
    ProcessManagement2Service().then(res => {
      this.setState({
        ...res,
        loading: false
      })
    })
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

import React from 'react';
import {
  connect
} from 'dva';

import WorkersCondition2View from './WorkersCondition2View';
import {worksCondition2Service} from '../../services/query'
class WorkersConditionPage2 extends React.PureComponent{
  constructor(props) {
    super(props)
    this.state = {
     loading: true
    }
  }


  componentDidMount(){
    worksCondition2Service().then(res => {
      this.setState({
        ...res,
        loading: false
      })
    })
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

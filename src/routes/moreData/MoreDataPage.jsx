import React from 'react';
import {
  connect
} from 'dva';

import MoreDataView from './MoreDataView';

class MoreDataPage extends React.PureComponent{
  constructor(props) {
    super(props)
    this.state = {
    }
  }


  componentDidMount(){
  }

  render(){
    return (
      <MoreDataView
        {...this.state}
        {...this.props}
        {...this.props.location.state}
      />
    )
  }
}
function mapStateToProps() {
  return {};
}

export default connect(mapStateToProps)(MoreDataPage);

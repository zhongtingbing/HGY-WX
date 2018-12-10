import React from 'react';
import {
  connect
} from 'dva';

import DeviceMoreDataView from './DeviceMoreDataView';

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
      <DeviceMoreDataView
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

import React from 'react';
import { routerRedux } from 'dva/router'
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

  goBack = () => {
    this.props.goBack()
  }

componentWillMount(){
}
  componentDidMount(){
  }

  render(){
    return (
      <MoreDataView
        {...this.state}
        {...this.props}
        {...this.props.location.state}
        goBack = {this.goBack}
      />
    )
  }
}
function mapStateToProps() {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {
    goBack(){
      dispatch(routerRedux.goBack())
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(MoreDataPage);

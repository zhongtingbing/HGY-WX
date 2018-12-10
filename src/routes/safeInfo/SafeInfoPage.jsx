import React from 'react';
import { routerRedux } from 'dva/router'
import {
  connect
} from 'dva';

import SaveInfoView from './SafeInfoView';

class SaveInfoPage extends React.PureComponent{
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
      <SaveInfoView
        {...this.state}
        {...this.props}
      />
    )
  }
}
function mapStateToProps() {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {
    moreClick(kVMap, data){
      dispatch(routerRedux.push({
        pathname: '/more-data',
        state: {
          kVMap,
          data
        },
      }))
    },
    deviceMoreClick(kVMap, data){
      dispatch(routerRedux.push({
        pathname: '/device-more-data',
        state: {
          data
        },
      }))
    },
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(SaveInfoPage);

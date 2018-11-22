import React from 'react';
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

export default connect(mapStateToProps)(SaveInfoPage);

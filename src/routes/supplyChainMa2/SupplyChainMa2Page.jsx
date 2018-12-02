import React from 'react';
import {
  connect
} from 'dva';

import SupplyChainMa2View from './SupplyChainMa2View';

class SupplyChainMa2Page extends React.PureComponent{
  constructor(props) {
    super(props)
    this.state = {
      data:[],
      tab:0
    }
  }


  componentDidMount(){

  }

  tabChange = (tab) =>{
    this.setState({tab})
  }

  render(){
    return (
      <SupplyChainMa2View
        {...this.state}
        {...this.props}
        tabChange={this.tabChange}
      />
    )
  }
}
function mapStateToProps() {
  return {};
}

export default connect(mapStateToProps)(SupplyChainMa2Page);

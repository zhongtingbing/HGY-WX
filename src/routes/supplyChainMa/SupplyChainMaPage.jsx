import React from 'react';
import {
  connect
} from 'dva';

import SupplyChainMaView from './SupplyChainMaView';

class SupplyChainMaPage extends React.PureComponent{
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
      <SupplyChainMaView
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

export default connect(mapStateToProps)(SupplyChainMaPage);

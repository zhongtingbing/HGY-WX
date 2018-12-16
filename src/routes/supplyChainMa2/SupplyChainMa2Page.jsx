import React from 'react';
import {
  connect
} from 'dva';

import SupplyChainMa2View from './SupplyChainMa2View';
import {supplyChain2Service} from '../../services/query'
class SupplyChainMa2Page extends React.PureComponent{
  constructor(props) {
    super(props)
    this.state = {
      loading: true,
    }
  }


  componentDidMount(){
    supplyChain2Service().then(res => {
      this.setState({
        ...res,
        loading: false
      })
    })
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

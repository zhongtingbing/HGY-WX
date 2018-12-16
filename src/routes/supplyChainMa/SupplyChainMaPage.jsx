import React from 'react';
import {
  connect
} from 'dva';
import {supplyChainService} from '../../services/query'
import SupplyChainMaView from './SupplyChainMaView';

class SupplyChainMaPage extends React.PureComponent{
  constructor(props) {
    super(props)
    this.state = {
      WYS: [],
      YSWTG: [],
      tab:0,
      loading: true,
    }
  }


  componentDidMount(){
    supplyChainService().then(res => {
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

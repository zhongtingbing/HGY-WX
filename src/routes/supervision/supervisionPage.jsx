import React from 'react';
import bowser from 'bowser'
import {Toast} from 'antd-mobile'
import {
  connect
} from 'dva';
import {superVisionService} from '../../services/query'
import SupervisionView from './supervisionView'
class SupervisionPage extends React.PureComponent{
  constructor(props) {
    super(props)
    this.state = {
      loading: false,
      data:[{latitudeAndLongitude: '120.702935,27.981268'}]
    }
  }
  componentDidMount(){
    superVisionService().then(res => {
      this.setState({
        data: res.projects,
        loading: false
      })
    })
  }

  onClick = (item)=>{
    if(item && item.id){
      bowser.android ? window.mobile.click(item.id) :window.webkit.messageHandlers.click.postMessage({body: item.id});
    }else {
      Toast.info('服务器繁忙，请稍后再试')
    }
  }

  render(){
    if (! this.state.data){
      return
    }
    return (
      <SupervisionView
        {...this.state}
        {...this.props}
        onClick={this.onClick}
      />
    )
  }
}
function mapStateToProps() {
  return {};
}

export default connect(mapStateToProps)(SupervisionPage);

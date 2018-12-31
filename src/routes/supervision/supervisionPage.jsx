import React from 'react';
import bowser from 'bowser'
import session from '../../utils/store'
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
      bowser.android ? window.mobile.click(item.id) : ''
      return
    }
    bowser.android ? window.mobile.click('1234') : ''
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

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
      loading: true,
      data:[{latitudeAndLongitude: '120,32'}]
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

  onClick=(item)=>{
    session.set(`$$project_id`, item.id)
    bowser.android ? window.mobile.click({data: JSON.stringify(item)}) : ''
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

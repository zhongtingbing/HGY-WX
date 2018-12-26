import React from 'react';
import {
  connect
} from 'dva';
import {safeInfo2Service} from '../../services/query'
import SaveInfo2View from './SafeInfo2View';

class SaveInfo2Page extends React.PureComponent{
  constructor(props) {
    super(props)
    this.state = {
      loading: true
    }
  }

  componentDidMount(){
    safeInfo2Service().then(res=>{
      this.setState({
        loading: false,
        ...res
      })
    })
  }

  render(){
    return (
      <SaveInfo2View
        {...this.state}
        {...this.props}
      />
    )
  }
}
function mapStateToProps() {
  return {};
}

export default connect(mapStateToProps)(SaveInfo2Page);

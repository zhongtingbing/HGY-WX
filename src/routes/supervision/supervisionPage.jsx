import React from 'react';
import {
  connect
} from 'dva';
import SupervisionView from './supervisionView'
class SupervisionPage extends React.PureComponent{
  constructor(props) {
    super(props)
    this.state = {
      data:[]
    }
  }
  componentDidMount(){
    let data =[];
    for (let i =0; i < 3; i++){
      data.push({
        name: `江西月项目${i+1}期`,
        index: i,
      })
    }
    this.setState({
      data
    })
  }

  render(){
    return (
      <SupervisionView
        {...this.state}
        {...this.props}
      />
    )
  }
}
function mapStateToProps() {
  return {};
}

export default connect(mapStateToProps)(SupervisionPage);

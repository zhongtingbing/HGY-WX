import React from 'react';
import PropTypes from 'prop-types';
import SaleChanceView from './SaleChanceView'
import { routerRedux } from 'dva/router'
import {
  connect
} from 'dva';

import { testService, querySaleChanceService } from '../../services/query';

class SaleChance extends React.Component{
  constructor(props){
    super(props)
    this.state={
    }
  }

componentDidMount(){
    this.getData()
}

   getData = () => {
     testService().then(res=>{
     })
    }

  onSearch = (value) => {
     console.log(value)
  }

  onChange = (o) => {
    this.setState({
      ...o
    })
  }

  querySaleChance= (param) => {
     return querySaleChanceService(param)
  }

  toEdit = () => {}

  toDetail = () => {}
  onAdd = () => {
    this.props.goTo('/sale-chance-edit')
  }

  render() {
  return (
    <SaleChanceView
      {...this.props}
      {...this.state}
      toEdit={this.toEdit}
      toDetail={this.toDetail}
      onSearch={this.onSearch}
      onChange={this.onChange}
      querySaleChance={this.querySaleChance}
      onAdd={this.onAdd}
      title="销售机会管理"
    />
  )
}
}

SaleChance.propTypes = {
  // location: PropTypes.object.isRequired
};

function mapStateToProps() {
  return {};
}

function propsDispatchToMap(dispatch) {
  window._dispatch = dispatch
  return {
    go(){
      dispatch({
        type: 'main/query',
        payload: {id: 22},
      })
    },
    goTo(path) {
      console
      dispatch(routerRedux.push(path))
    }
  };
}

export default connect(mapStateToProps ,propsDispatchToMap)(SaleChance);

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

  toFollowRecord = () => {
    this.props.goTo('/sale-chance-follow-record')
  }

  toEdit = () => {
     this.props.goTo('/sale-chance-edit', {type: 'edit'})
  }

  toDetail = (record) => {
    this.props.goTo('/sale-chance-detail', record)
  }
  onAdd = () => {
    this.props.goTo('/sale-chance-edit')
  }
  toShop = (record) => {
    this.props.goTo('/shop', record)
  }
  toCreateContract = (record) => {
    this.props.goTo('/create-contract', record)
  }

  toAddCounterpart = (record) => {
    this.props.goTo('/add-counterpart', record)
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
      toFollowRecord={this.toFollowRecord}
      toShop={this.toShop}
      toCreateContract={this.toCreateContract}
      toAddCounterpart={this.toAddCounterpart}
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
    goTo(pathname, state) {
      dispatch(routerRedux.push({
        pathname,
        state,
      }))
    }
  };
}

export default connect(mapStateToProps ,propsDispatchToMap)(SaleChance);

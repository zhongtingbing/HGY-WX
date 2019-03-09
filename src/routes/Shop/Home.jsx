import React from 'react';
import PropTypes from 'prop-types';
import HomeView from './HomeView'
import { Toast } from 'antd-mobile'

import { routerRedux } from 'dva/router'
import {
  connect
} from 'dva';

import { testService } from '../../services/query';

class Home extends React.Component{
  constructor() {
    super()
    this.state = {
      openFilter: false
    }
  }
   getData = () => {
     // testService().then(res=>{
     // })
    }

  toTop = () => {
    window.scrollTo(0,0)
  }

  onAdd = (rowData) => {
     const {
       goodList
     } = this.props.shop;
     if (goodList.filter(item => item.id === rowData.id).length > 0) {
       Toast.info('已加入清单', 1)
       return
     }
    goodList.push(rowData)
    this.props.update({goodList})
    Toast.success('成功加入清单', 1)
  }

  toShopList = () => {
     this.props.goTo('shop-list')
  }

  onFilter = () => {
    this.setState({
      openFilter: !this.state.openFilter
    })
  }

  onOk = () => {
    this.setState({
      openFilter: false
    })
  }

  render() {
  return (
    <HomeView
      {...this.props}
      {...this.state}
      toTop={this.toTop}
      onAdd={this.onAdd}
      toShopList={this.toShopList}
      onFilter={this.onFilter}
      onOk={this.onOk}
      title="方案报价"
    />
  )
}
}

Home.propTypes = {
  location: PropTypes.object.isRequired
};

function mapStateToProps({'shop': shop}) {
  return {
    shop
  };
}

function propsDispatchToMap(dispatch) {
  window._dispatch = dispatch
  return {
    goTo(pathname, state) {
      dispatch(routerRedux.push({
        pathname,
        state,
      }))
    },
    queryGoodsList(payload) {
     return dispatch({
        type: `shop/queryGoodsList`,
        payload,
        async: true
      })
    },
    update(payload) {
      return dispatch({
        type: `shop/update`,
        payload,
      })
    }
  };
}




export default connect(mapStateToProps ,propsDispatchToMap)(Home);

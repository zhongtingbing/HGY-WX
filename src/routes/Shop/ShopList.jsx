import React from 'react';
import PropTypes from 'prop-types';
import ShopListView from './ShopListView'
import { Toast } from 'antd-mobile'

import { routerRedux } from 'dva/router'
import {
  connect
} from 'dva';

import { testService } from '../../services/query';

class ShopList extends React.Component{
  constructor() {
    super()
    this.state = {
      allCheck: false
    }
  }

   getData = () => {
     // testService().then(res=>{
     // })
    }

  onPlus = (rowData) => {
     console.log(rowData)
    const {
      goodList
    } = this.props;
    for(let i = 0; i < goodList.length; i++) {
      if(goodList[i].id === rowData.id) {
        goodList[i] = {...rowData, count: rowData.count ? parseInt(rowData.count) + 1 : 1}
      }
    }
    this.props.update({goodList})
  }


  onDown = (rowData) => {
     if(!rowData.count) {
       return
     }
    const {
      goodList
    } = this.props;
    for(let i = 0; i < goodList.length; i++) {
      if(goodList[i].id === rowData.id) {
        goodList[i] = {...rowData, count: rowData.count - 1}
      }
    }
    this.props.update({goodList})
  }

  onCheck = (rowData) => {
    const {
      goodList
    } = this.props;
    for(let i = 0; i < goodList.length; i++) {
      if(goodList[i].id === rowData.id) {
        goodList[i] = {...rowData, checked: !rowData.checked}
      }
    }
    this.props.update({goodList})
  }

  onDiscountChange = (rowData, discount) => {
    const {
      goodList
    } = this.props;
    for(let i = 0; i < goodList.length; i++) {
      if(goodList[i].id === rowData.id) {
        goodList[i] = {...rowData, discount: discount}
      }
    }
    this.props.update({goodList})
  }

  checkAll = () => {
    const {
      goodList
    } = this.props;
    const {
      allCheck
    } = this.state;
    for(let i = 0; i < goodList.length; i++) {
      goodList[i].checked = !allCheck;
    }
    this.props.update({goodList})
    this.setState({
      allCheck: !allCheck
    })
  }

  toQuotation = () => {
    this.props.goTo('/quotation')
  }

  render() {
  return (
    <ShopListView
      {...this.props}
      {...this.state}
      onDiscountChange={this.onDiscountChange}
      onDown={this.onDown}
      onPlus={this.onPlus}
      onCheck={this.onCheck}
      checkAll={this.checkAll}
      toQuotation={this.toQuotation}
      title="方案报价"
    />
  )
}
}

ShopList.propTypes = {
  location: PropTypes.object.isRequired
};

function mapStateToProps({'shop': shop}) {
  return {
    shop,
    ...shop,
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




export default connect(mapStateToProps ,propsDispatchToMap)(ShopList);

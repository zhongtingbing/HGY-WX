import React from 'react';
import PropTypes from 'prop-types';
import QuotationView from './QuotationView'
import {Modal} from 'antd-mobile'
import { routerRedux } from 'dva/router'
import {
  connect
} from 'dva';

import { testService } from '../../services/query';

class Quotation extends React.Component{
  constructor() {
    super()
    this.state = {
      taxPoint: '0',
      modalVisible: false
    }
  }

   getData = () => {
     // testService().then(res=>{
     // })
    }

  onSubmit = () => {
    Modal.alert('溫馨提示', '本操作只适合不签订合同，且报价单金额不超过15000的客户，是否直接生成订单？', [
      {'text': '否'},
      {'text': '是', onPress: () => {
      }}
    ])
  }

  onChange = (value) => {
    console.log(value)
    this.setState({...value})
  }

  onModalVisibleChange = () => {
    this.setState({
      modalVisible: !this.state.modalVisible
    })
  }
  toWX = () => {
    this.setState({
      modalVisible: false
    })
  }
  toQQ = () => {
    this.setState({
      modalVisible: false
    })
  }
  toEmail = () => {
    this.setState({
      modalVisible: false
    })
  }
  render() {
  return (
    <QuotationView
      {...this.props}
      {...this.state}
      onChange={this.onChange}
      title="好工艺产品报价单"
      onSubmit={this.onSubmit}
      onModalVisibleChange={this.onModalVisibleChange}
      toWX={this.toWX}
      toQQ={this.toQQ}
      toEmail={this.toEmail}
    />
  )
}
}

Quotation.propTypes = {
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

export default connect(mapStateToProps ,propsDispatchToMap)(Quotation);

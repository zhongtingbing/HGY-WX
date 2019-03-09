import React from 'react';
import GoodsDetailView from './GoodsDetailView'
import { routerRedux } from 'dva/router'
import {
  connect
} from 'dva';

import { testService } from '../../services/query';

class GoodsDetail extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      allCheck: false,
      ...props.location.state
    }
  }

   getData = () => {
     // testService().then(res=>{
     // })
    }
  render() {
  return (
    <GoodsDetailView
      {...this.props}
      {...this.state}
      title="产品详情"
    />
  )
}
}

GoodsDetail.defaultProps = {
  goodsList: [],
}

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




export default connect(mapStateToProps ,propsDispatchToMap)(GoodsDetail);

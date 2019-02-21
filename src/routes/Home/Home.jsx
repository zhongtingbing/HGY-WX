import React from 'react';
import PropTypes from 'prop-types';
import HomeView from './HomeView'
import { routerRedux } from 'dva/router'
import {
  connect
} from 'dva';

import { testService } from '../../services/query';

class Home extends React.Component{

   getData = () => {
     // testService().then(res=>{
     // })
    }
  render() {
  return (
    <HomeView
      {...this.props}
      title="销售人员界面"
    />
  )
}
}

Home.propTypes = {
  location: PropTypes.object.isRequired
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
      dispatch(routerRedux.push(path))
    }
  };
}

export default connect(mapStateToProps ,propsDispatchToMap)(Home);

import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'antd-mobile'
import {
  connect
} from 'dva';
import { testService } from '../services/query';
import map_market from '../assets/image/map_market.svg';

import  './page03.less';

import Main from '../layouts/main.jsx';

function Page03(props) {
  const {location} =props;

  function getData() {
     testService().then(res=>{
     })
  }

  function clickHandle() {
    dispatch({
      type: 'main/query',
      payload: {id: 22},
    })
  }


   let markers = [{  position: {
     longitude: 120,
     latitude: 30,
   }},
     {  position: {
       longitude: 120.1,
       latitude: 30.1,
     }}]

  const renderMarkerLayout = function () {
    return (
      <div className='market'>
        <div className='marketdesc'>
          <span>江西月的项目</span>
          <div>
            <span>100人</span>
            <span>3</span>
            <span>7</span>
          </div>
          <div className='market-bottom'>
            <span>作业中</span>
            <span>搭吊</span>
            <span>报警</span>
          </div>
        </div>
        <img src={map_market}/>
      </div>

      )
  }

  return (
    <Main location={location}>
      <div className={'wer'}>
        <Button className='btn' onClick={getData} size="small">点我</Button>
        <Button className='btn' onClick={clickHandle} size="small">哈哈</Button>
        <Button className='btn' onClick={props.go} size="small">click me</Button>
        {/*<div  style = {{width:'100%',height:'100%'}}>*/}
          {/*<Map center={{longitude: 120, latitude: 30}} zoom={10}  amapkey='6ad24c49136bc9bfc9fc5341895fcf59'>*/}
            {/*<Markers*/}
              {/*markers={markers}*/}
              {/*render={renderMarkerLayout}*/}
            {/*/>*/}
          {/*</Map>*/}
        {/*</div>*/}
      </div>
    </Main>
  );
}

Page03.propTypes = {
  location: PropTypes.object.isRequired
};

function mapStateToProps() {
  return {};
}

function propsDispatchToMap(dispatch) {
  return {
    go(){
      dispatch({
        type: 'main/query',
        payload: {id: 22},
      })
    }
  };
}

export default connect(mapStateToProps ,propsDispatchToMap)(Page03);

import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'antd-mobile'
import Zmage from 'react-zmage'
import TIMG from '../assets/image/icon_pm2.5.png'
import {
  connect
} from 'dva';
import { testService } from '../services/query';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

import  './page03.less';

import Main from '../layouts/main.jsx';

function Page03(props) {
  const {location} =props;

  function getData() {
    console.log(333)
     // testService().then(res=>{
     // })
  }

  function clickHandle() {
    dispatch({
      type: 'main/query',
      payload: {id: 22},
    })
  }


  function toPdf() {
    var element = document.querySelector('.wer');    // 这个dom元素是要导出pdf的div容器
    var w = element.clientWidth;    // 获得该容器的宽
    var h = element.clientHeight;    // 获得该容器的高
    var offsetTop = element.offsetTop;    // 获得该容器到文档顶部的距离
    var offsetLeft = element.offsetLeft;    // 获得该容器到文档最左的距离
    var canvas = document.createElement("canvas");
    var abs = 0;
    var win_i = window.innerWidth;    // 获得当前可视窗口的宽度（不包含滚动条）
    var win_o = window.innerWidth;    // 获得当前窗口的宽度（包含滚动条）
    if(win_o>win_i){
      abs = (win_o - win_i)/2;    // 获得滚动条长度的一半
    }
    canvas.width = w * 2;    // 将画布宽&&高放大两倍
    canvas.height = h * 2;
    var context = canvas.getContext("2d");
    context.scale(2, 2);
    context.translate(-offsetLeft-abs,-offsetTop);
    // 这里默认横向没有滚动条的情况，因为offset.left(),有无滚动条的时候存在差值，因此
    // translate的时候，要把这个差值去掉
    html2canvas(element).then(function(canvas) {
      var contentWidth = canvas.width;
      var contentHeight = canvas.height;
      //一页pdf显示html页面生成的canvas高度;
      var pageHeight = contentWidth / 592.28 * 841.89;
      //未生成pdf的html页面高度
      var leftHeight = contentHeight;
      //页面偏移
      var position = 0;
      //a4纸的尺寸[595.28,841.89]，html页面生成的canvas在pdf中图片的宽高
      var imgWidth = 595.28;
      var imgHeight = 592.28/contentWidth * contentHeight;

      var pageData = canvas.toDataURL('image/jpeg', 1.0);

      var pdf = new jsPDF('', 'pt', 'a4');
      //有两个高度需要区分，一个是html页面的实际高度，和生成pdf的页面高度(841.89)
      //当内容未超过pdf一页显示的范围，无需分页
      if (leftHeight < pageHeight) {
        pdf.addImage(pageData, 'JPEG', 0, 0, imgWidth, imgHeight);
      } else {    // 分页
        while(leftHeight > 0) {
          pdf.addImage(pageData, 'JPEG', 0, position, imgWidth, imgHeight)
          leftHeight -= pageHeight;
          position -= 841.89;
          //避免添加空白页
          if(leftHeight > 0) {
            pdf.addPage();
          }
        }
      }
      pdf.save('我的简历.pdf');//注：微信浏览器屏蔽了文件下载等功能
    })
  }

  return (
    <Main location={location}>
      <div className={'wer'}>
        <Button className='btn' onClick={getData} size="small">点我</Button>
        {/*<Button className='btn' onClick={clickHandle} size="small">哈哈</Button>*/}
        {/*<Button className='btn' onClick={props.go} size="small">click me</Button>*/}
        <Button className='btn' onClick={toPdf} size="small">生成PDF</Button>
        <Zmage src={TIMG}/>
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

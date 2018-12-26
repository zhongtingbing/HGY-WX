import React from 'react';
import  './cicleProgress.less'

export default class CicleProgress extends React.PureComponent{
  constructor(props) {
    super(props)
    this.state = {
    }
  }


  componentDidMount(){
    this.initView()

  }

  initView = () =>{
    let {
      _key,
      value,
      startColor,
      endColor,
    } = this.props;
    startColor = startColor || 'blue';
    endColor = endColor || 'red';
    var canvas = document.querySelector(`.cicle-progress${_key}`),
      ctx = canvas.getContext("2d"),
      percent = value || 0, // 最终百分比
      circleX = canvas.width / 2, // 中心x坐标
      circleY = canvas.height / 2, // 中心y坐标
      radius = 68, // 圆环半径
      lineWidth = 14, // 圆形线条的宽度
      fontSize = 32; // 字体大小

// 画圆
    function circle(cx, cy, r) {
      ctx.beginPath();
      ctx.moveTo(cx + r, cy);
      ctx.lineWidth = lineWidth;
      ctx.strokeStyle = '#455d7f';
      ctx.arc(cx, cy, r, 0, Math.PI * 2);
      ctx.closePath();
      ctx.stroke();
    }

// 画弧线
    function sector(cx, cy, r, startAngle, endAngle, anti) {
      ctx.beginPath();
      ctx.moveTo(cx, cy - r); // 从圆形头部开始画
      ctx.lineWidth = lineWidth;

      // 渐变色 - 可自定义
      var linGrad = ctx.createLinearGradient(
        circleX, circleY +radius +lineWidth, circleX, circleY- radius - lineWidth
      );
      linGrad.addColorStop(1.0, startColor);
      linGrad.addColorStop(0, endColor);
      ctx.strokeStyle = linGrad;

      // 圆弧两端的样式
      ctx.lineCap = 'round';
      // 圆弧
      ctx.arc(
        cx, cy, r,
        startAngle * (Math.PI / 180.0) + (Math.PI*3/2),// *3从圆形头部开始画
        -endAngle * (Math.PI / 180.0) + (Math.PI *3/2), // *3从圆形头部开始画
        true
      );
      ctx.stroke();
    }

// 刷新
    function loading() {
      if (process >= percent) {
        clearInterval(circleLoading);
      }

      // 清除canvas内容
      ctx.clearRect(0, 0, circleX * 2, circleY * 2);

      // 中间的字
      ctx.font = fontSize + 'px April';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillStyle = '#ffffff';
      ctx.fillText(parseFloat(process).toFixed(0) + '%', circleX, canvas.height/2.3);


      // 圆形
      circle(circleX, circleY, radius);

      // 圆弧
      sector(circleX, circleY, radius, 0, process / 100 * 360);

      // 控制结束时动画的速度
      if (process / percent > 0.90) {
        process += 0.30;
      } else if (process / percent > 0.80) {
        process += 0.55;
      } else if (process / percent > 0.70) {
        process += 0.75;
      } else {
        process += 1.0;
      }
    }

    var process = 0.0; // 进度
    var circleLoading = window.setInterval(function () {
      loading();
    }, 20);
  }


  render() {
    const {_key, title} =this.props
    return (
      <div className="cicle-progress-wrap">
        <canvas className={`cicle-progress${_key}`} width="160" height="160">
          <p>抱歉，您的浏览器不支持canvas</p>
        </canvas>
        <span className="title">{title}</span>
      </div>
      )
  }
}

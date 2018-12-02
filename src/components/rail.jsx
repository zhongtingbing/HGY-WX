/**
 * Created by jdf-zhongtingbing on 2017/6/6.
 */
import React from 'react';
import classNames from 'classnames';
import './rail.less'

const prefixCls = 'rail-123';

export default class Rail extends React.PureComponent{

  constructor(props){
    super(props)
    this.state={

    }
  }
  componentDidMount() {
  }


  render(){
    const{
      className,
      title,
      onLine,
      warning,
      offLine,
      total,
      ...other
    }=this.props
    const cls = classNames({
      [prefixCls]: true,
      [className]: className
    })
    return (
      <div className={cls}>
        <span className="left">
          {
            Array.from(title).map((item ,index) =><span key={index}>{item}</span>)
          }
        </span>
        <span>:</span>
        <div className="middle">
          <div style={{width:`${parseInt(onLine)/parseInt(total)*100-1}%`}} className="one">
            {onLine}
          </div>
          <div style={{width:`${parseInt(warning)/parseInt(total)*100-1}%`}} className="two">
            {warning}
          </div>
          <div style={{width:`${parseInt(offLine)/parseInt(total)*100-1}%`}} className="three">
            {offLine}
          </div>
        </div>
        <span className="right">{`${total}个`}</span>
      </div>
    )
  }
}





/**
 * Created by jdf-zhongtingbing on 2017/6/6.
 */
import React from 'react';
import classNames from 'classnames';
import {Icon} from 'antd-mobile';
import './basicCard.less'

const prefixCls = 'basic-card-123';

export default class BasicCard extends React.PureComponent{

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
      name,
      children,
      more,
      moreClick,
      ...other
    }=this.props
    const cls = classNames({
      [prefixCls]: true,
      [className]: className
    })
    return (
      <div className={cls}>
        <div className="head">
          <div className="left"></div>
          <div className="right">{name}</div>
          {more && <div onClick={moreClick} className="more">更多<Icon size="xs" color="#4ab4e8" type="right"/></div>}
        </div>
        {children}
      </div>
    )
  }

}





/**
 * Created by jdf-zhongtingbing on 2017/6/6.
 */
import React from 'react';
import classNames from 'classnames';
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
      other
    }=this.props
    const cls = classNames({
      [prefixCls]: true,
      [className]: className
    })
    return (
      <div className={cls}  {...other}>
        <div className="head">
          <div className="left"></div>
          <div className="right">{name}</div>
        </div>
        {children}
      </div>
    )
  }

}





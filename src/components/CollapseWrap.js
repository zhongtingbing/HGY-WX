import React from 'react'
import Collapse from './Collapse'
import classNames from 'classnames'
import { Icon } from 'antd-mobile'
import './CollapseWrap.less'

const prefixCls = 'collapse-wrap-333'


export default class CollapseWrap extends React.Component {

  static defaultProps = {
    num: '0',
    title: '跟进记录'
  }

  constructor(props){
    super(props)
    this.state={
      open: false
    }
  }

  onOpen = () => {
    this.setState({
      open: !this.state.open
    })
  }


  render() {
    let {
      children,
      className,
      title,
      num
    } = this.props

    const cls = classNames({
      [`${prefixCls}-row`]: true,
    })

    return (
      <div className={cls}>
        <div onClick={this.onOpen} className={`${prefixCls}-top`}>
          <div className="_cnt-wrap">
            {`${title}(${num})`}
          </div>
          <Icon type={this.state.open ? "up" : "down"}/>
        </div>
        <Collapse isOpen={this.state.open} className={`${prefixCls}-row-collapse`}>
          <p/>
          {children}
        </Collapse>
      </div>
    )
  }
}



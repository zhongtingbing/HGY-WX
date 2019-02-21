import React from 'react'
import classNames from 'classnames'

import Spin from './Spin'
import Blank from './Blank'

import './SpinPanel.less'

const prefixCls = 'mb-spin-panel'

function SpinPanel({className, style, spinHeight, spinWidth, ...others}) {
  const cls = classNames({
    [prefixCls]: true,
    [className]: className
  })

  return (
    <Blank className={cls} style={style}>
      <Spin {...others} style={{height: spinHeight, width: spinWidth}}/>
    </Blank>
  )
}


export default SpinPanel
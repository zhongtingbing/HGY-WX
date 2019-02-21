import React from 'react'
import classNames from 'classnames'


import './Blank.less'

const prefixCls = 'mb-blank'

function Blank({className, style, ...others}) {
  const cls = classNames({
    [prefixCls]: true,
    [className]: className
  })

  return (
    <div className={cls} style={style} {...others}>
    </div>
  )
}

Blank.defaultProps = {
  style: {}
}

export default Blank
import React from 'react'
import classNames from 'classnames'
import {Radio} from 'antd-mobile'


import './RadioGroup.less'

const prefixCls = 'radio-group-uu'

function RadioGroup({className, children, style, value, onChange, ...others}) {
  const cls = classNames({
    [prefixCls]: true,
    [className]: className
  })

  return (
    <div className={cls} style={style} {...others}>
      {children}
      <Radio className="my-radio" checked={value} onChange={e => onChange(true)}>是</Radio>
      <Radio className="my-radio" checked={!value} onChange={e => onChange(false)}>否</Radio>
    </div>
  )
}

RadioGroup.defaultProps = {
  style: {},
  onChange: () => {}
}

export default RadioGroup

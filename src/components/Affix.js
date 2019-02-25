/**
 * Created by zhongtingbing on 2018/9/24.
 */
import React from 'react'
import classNames from 'classnames'
import './Affix.less'

const prefixCls = 'affix0kjh';

class Affix extends React.PureComponent {
  constructor() {
    super()
  }

  componentDidMount() {
  }

  componentDidUpdate() {
  }

  render() {
    const {
      className,
      children,
      ...others,
    } = this.props;

    const cls = classNames({
      [prefixCls]: true,
      [className]: className,
    });
    return (
      <div className={cls} {...others}>
        {
          typeof children === 'string' ?
            <div className={`${prefixCls}-content`}>
              {children}
            </div>
            :
            children
        }
      </div>
    )
  }
}
export default Affix
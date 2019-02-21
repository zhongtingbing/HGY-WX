import React from 'react';
import classNames from 'classnames';
import './LoadingWrapper.less';

const prefixCls = 'mb-loading-wrapper';

function createLoadingComponent(Spin) {

  // 延迟的默认值是 1000ms
  const DEFAULT_DELAY = 200;

  return class LoadingComponent extends React.Component {
    constructor(props) {
      super(props);
    }

    shouldComponentUpdate(nextProps, nextState) {
      return nextProps.isShow !== this.props.isShow
    }

    render() {
      const {className, isShow, ...others} = this.props;

      const cls = classNames({
        [prefixCls]: true,
        [className]: className
      });

      const style = {
        animation: `mb-loading-fadeIn ${DEFAULT_DELAY}ms linear`,
        animationDelay: `${DEFAULT_DELAY}ms`,
        animationFillMode: 'backwards',
        WebKitAnimation: `mb-loading-fadeIn ${DEFAULT_DELAY}ms linear`,
        WebKitAnimationDelay: `${DEFAULT_DELAY}ms`,
        WebKitAnimationFillMode: 'backwards'
      };

      return (
          <div className={cls}>
          <div className={`${prefixCls}-spin-container`} style={style}>
            {
              <Spin {...others}/>
            }
          </div>
          </div>
      )
    }
  };
}

export default createLoadingComponent;
import React from 'react'
import classNames from 'classnames'
import createLoadingComponent from './LoadingWrapper'
import bowser from 'bowser'

const prefixCls = 'mb-spin'

function getAndroidVersion(ua) {
  ua = (ua || navigator.userAgent).toLowerCase();
  var match = ua.match(/android\s([0-9\.]*)/);
  return match ? match[1] : false;
};

function SpinWrapper(props) {
  const {
    width,
    height,
    color,
    className,
    children,
    fill,
    style
  } = props

  const cls = classNames({
    [prefixCls]: true,
    [className]: className
  })

  return (
    <svg
      style={style}
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      xmlns="http://www.w3.org/2000/svg"
      stroke={fill ? '' : color}
      fill={fill ? color : ''}
    >
      {children}
    </svg>
  )

}

SpinWrapper.defaultProps = {
  width: 38,
  height: 38,
  color: '#4196ea'
}

function Spin({type, ...others}) {

  // The following svg cause crash on Android 4.4, Chrome 33.0.0.0
  const androidVersion = getAndroidVersion();
  const iosVersion = bowser.ios && (bowser.version || bowser.osversion);


  if (type === 'rings') {
    return (
      !(androidVersion && parseInt(androidVersion, 10) < 5) && !(iosVersion && parseInt(iosVersion,10) < 9) ?
      (<SpinWrapper
          {...others}
          height='45'
          width='45'
        >
          <g fill="none" fill-rule="evenodd" transform="translate(1 1)" stroke-width="2">
            <circle cx="22" cy="22" r="6" stroke-opacity="0">
              <animate attributeName="r"
                       begin="1.5s" dur="3s"
                       values="6;22"
                       calcMode="linear"
                       repeatCount="indefinite" />
              <animate attributeName="stroke-opacity"
                       begin="1.5s" dur="3s"
                       values="1;0" calcMode="linear"
                       repeatCount="indefinite" />
              <animate attributeName="stroke-width"
                       begin="1.5s" dur="3s"
                       values="2;0" calcMode="linear"
                       repeatCount="indefinite" />
            </circle>
            <circle cx="22" cy="22" r="6" stroke-opacity="0">
              <animate attributeName="r"
                       begin="3s" dur="3s"
                       values="6;22"
                       calcMode="linear"
                       repeatCount="indefinite" />
              <animate attributeName="stroke-opacity"
                       begin="3s" dur="3s"
                       values="1;0" calcMode="linear"
                       repeatCount="indefinite" />
              <animate attributeName="stroke-width"
                       begin="3s" dur="3s"
                       values="2;0" calcMode="linear"
                       repeatCount="indefinite" />
            </circle>
            <circle cx="22" cy="22" r="8">
              <animate attributeName="r"
                       begin="0s" dur="1.5s"
                       values="6;1;2;3;4;5;6"
                       calcMode="linear"
                       repeatCount="indefinite" />
            </circle>
          </g>
        </SpinWrapper>)
      :
      (<div>正在加载中...</div>)
    )
  } else if (type === 'dots') {
    return (
      !(androidVersion && parseInt(androidVersion, 10) < 5) && !(iosVersion && parseInt(iosVersion,10) < 9) ?
      (<SpinWrapper
        height='30'
        width='120'
        fill={true}
        {...others}
      >
        <circle cx="15" cy="15" r="15">
          <animate attributeName="r" from="15" to="15"
            begin="0s" dur="0.8s"
            values="15;9;15" calcMode="linear"
            repeatCount="indefinite" />
          <animate attributeName="fill-opacity" from="1" to="1"
            begin="0s" dur="0.8s"
            values="1;.5;1" calcMode="linear"
            repeatCount="indefinite" />
        </circle>
        <circle cx="60" cy="15" r="9" fill-opacity="0.3">
          <animate attributeName="r" from="9" to="9"
            begin="0s" dur="0.8s"
            values="9;15;9" calcMode="linear"
            repeatCount="indefinite" />
          <animate attributeName="fill-opacity" from="0.5" to="0.5"
            begin="0s" dur="0.8s"
            values=".5;1;.5" calcMode="linear"
            repeatCount="indefinite" />
        </circle>
        <circle cx="105" cy="15" r="15">
          <animate attributeName="r" from="15" to="15"
            begin="0s" dur="0.8s"
            values="15;9;15" calcMode="linear"
            repeatCount="indefinite" />
          <animate attributeName="fill-opacity" from="1" to="1"
            begin="0s" dur="0.8s"
            values="1;.5;1" calcMode="linear"
            repeatCount="indefinite" />
        </circle>

      </SpinWrapper>)
      :
      (<div>正在加载中...</div>)
    )
  }

  return (
    !(androidVersion && parseInt(androidVersion, 10) < 5) && !(iosVersion && parseInt(iosVersion,10) < 9) ?
    (<svg width="40px"  height="40px"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid" class="lds-money">
    <defs>
      <clipPath id="lds-money-cpid-880079393f298">
        <rect x="0" y="0" width="100" height="82.235"></rect>
      </clipPath>
    </defs>
    <path ng-attr-stroke="{{config.c4}}" stroke-width="1" ng-attr-fill="{{config.c4}}" d="M85.529,75.177H14.471c-2.469,0-4.471,2.002-4.471,4.471h80C90,77.179,87.998,75.177,85.529,75.177z" stroke="#c6c6c6" fill="#c6c6c6"></path>
    <g ng-attr-clip-path="url(#{{config.cpid}})" clip-path="url(#lds-money-cpid-880079393f298)">
      <g transform="translate(0 110)">
        <animateTransform attributeName="transform" type="translate" calcMode="linear" values="0 0 ;0 150" keyTimes="0;1" dur="1s" begin="0s" repeatCount="indefinite"></animateTransform>
        <g transform="translate(0,-75)">
          <path ng-attr-fill="{{config.c1}}" d="M50,25c-13.785,0-25,11.215-25,25s11.215,25,25,25s25-11.216,25-25S63.784,25,50,25z M50,70.845 c-11.494,0-20.844-9.351-20.844-20.845S38.506,29.155,50,29.155S70.845,38.506,70.845,50S61.493,70.845,50,70.845z" fill="#f9d597"></path>
          <path ng-attr-fill="{{config.c2}}" d="M50,29.155c-11.494,0-20.844,9.351-20.844,20.844S38.506,70.845,50,70.845S70.845,61.493,70.845,50S61.493,29.155,50,29.155 z" fill="#fffadf"></path>
          <path ng-attr-fill="{{config.c3}}" d="M48.11,62.796v-1.64c-1.535-0.068-3.041-0.358-4.281-0.765c-1.029-0.337-1.611-1.421-1.342-2.469 l0.043-0.167c0.297-1.158,1.521-1.781,2.653-1.395c1.152,0.392,2.465,0.662,3.855,0.662c2.032,0,3.421-0.783,3.421-2.21 c0-1.354-1.14-2.21-3.778-3.101c-3.814-1.283-6.416-3.066-6.416-6.523c0-3.137,2.211-5.596,6.025-6.345v-1.639 c0-0.965,0.782-1.746,1.746-1.746h0c0.965,0,1.746,0.782,1.746,1.746v1.39c1.275,0.057,2.327,0.226,3.21,0.459 c1.107,0.291,1.782,1.404,1.498,2.513v0c-0.287,1.118-1.44,1.803-2.546,1.473c-0.843-0.251-1.887-0.453-3.16-0.453 c-2.317,0-3.066,0.998-3.066,1.997c0,1.176,1.247,1.924,4.277,3.065c4.241,1.498,5.953,3.458,5.953,6.666 c0,3.173-2.246,5.882-6.345,6.594v1.89c0,0.965-0.782,1.746-1.746,1.746h-0.001C48.892,64.543,48.11,63.761,48.11,62.796z" fill="#ffdd60"></path>
        </g>
      </g>
    </g>
    <path ng-attr-stroke="{{config.c4}}" stroke-width="1" ng-attr-fill="{{config.c4}}" d="M14.471,84.823h71.058c2.469,0,4.471-2.002,4.471-4.471v-0.704H10v0.704C10,82.821,12.002,84.823,14.471,84.823z" stroke="#c6c6c6" fill="#c6c6c6"></path>
  </svg>)
    :
    (<div>正在加载中...</div>)
  )
}

Spin.defaultProps = {
  type: 'oval'
}

export default createLoadingComponent(Spin)

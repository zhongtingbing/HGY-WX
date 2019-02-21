import React from 'react';
import PropTypes from 'prop-types';
import { routerRedux } from 'dva/router'
import {
  NavBar, Icon
} from 'antd-mobile';

import './header.less';

function Header({
  location,
  title,
  onRightClick,
  rightContent,
  showLeft = true,

}) {
  return (
    <div className='header-aa'>
      <NavBar
        className={'nav_bar'}
        icon={showLeft ?　<Icon onClick={()=>{}} type="left" /> : null}
        onLeftClick={() => {_dispatch(routerRedux.goBack())}}
        rightContent={[
          rightContent
         ]}
      >{title}</NavBar>
    </div>
  );
}
{/*<Icon key="1" type="plus" size="small"/>*/}
Header.propTypes = {
  // location: PropTypes.object.isRequired
};
Header.defaultProps = {
}

export default Header;

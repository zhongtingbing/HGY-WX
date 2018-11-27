import React from 'react';
import PropTypes from 'prop-types';
// import {
//   NavBar, Icon
// } from 'antd-mobile';

import './header.less';

function Header({
  location,
  title
}) {
  return (
    <div className='header-aa'>
      {/*<NavBar*/}
        {/*className={'nav_bar'}*/}
        {/*icon={<Icon size="lg" type="left" />}*/}
        {/*onLeftClick={() => console.log('onLeftClick')}*/}
        {/*rightContent={[*/}
          {/*<Icon style = {{transform: 'rotate(90deg)'}} key="1" type="ellipsis" />*/}
        {/*]}*/}
      {/*>{title}</NavBar>*/}
    </div>
  );
}

Header.propTypes = {
  location: PropTypes.object.isRequired
};

export default Header;

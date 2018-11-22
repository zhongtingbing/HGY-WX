import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Header from './header.jsx';
import Footer from './footer.jsx';

import './main.less';

function Main({
  children,className
}) {
  const cls = classNames({
    'main-123': true,
    [className]: className,
  });
  return (
    <div className={cls}>
      {/*<Header title={title} location={location} />*/}
      {/*<Footer location={location} childrens={children} />*/}
      {children}
    </div>
  );
}

Main.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Main;

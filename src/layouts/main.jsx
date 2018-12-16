import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import ReactLoading from 'react-loading';

import Header from './header.jsx';
import Footer from './footer.jsx';

import './main.less';

function Main({
  children,className,loading
}) {
  const cls = classNames({
    'main-123': true,
    [className]: className,
  });
  return (
    <div className={cls}>
      {/*<Header title={title} location={location} />*/}
      {/*<Footer location={location} childrens={children} />*/}
      {
        loading ?
          <div className="main-loading">
            <ReactLoading type="spin"/>
          </div>
          :
          children
      }
    </div>
  );
}

Main.propTypes = {
  children: PropTypes.element.isRequired,
};

Main.defaultProps = {
  loading: false
};

export default Main;

import React from 'react';
import PropTypes from 'prop-types';

import Header from './header.jsx';
import Footer from './footer.jsx';

import './main.less';

function Main({
  children
}) {
  return (
    <div className='main-123'>
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

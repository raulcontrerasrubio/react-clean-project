import React from 'react';
import PropTypes from 'prop-types';
import {Styles} from './AppLoadingPage.styles';
import logo from '../../../assets/images/logo.png';

const AppLoadingPage = ({theme}) => {
  return (
    <Styles theme={theme}>
      <div className='_logo'>
        <div className='_logo-container'>
          <img src={logo} alt='Web App Logo' className='_logo-image' />
        </div>
      </div>
    </Styles>
  );
};

AppLoadingPage.propTypes = {
  theme: PropTypes.object.isRequired,
};

export default AppLoadingPage;

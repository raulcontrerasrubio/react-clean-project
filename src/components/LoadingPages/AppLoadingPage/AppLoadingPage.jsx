import React from 'react';
import {Styles} from './AppLoadingPage.styles';
import logo from '../../../assets/images/logo.png';

const AppLoadingPage = () => {
  return (
    <Styles>
      <div className='_logo'>
        <div className='_logo-container'>
          <img src={logo} alt='Web App Logo' className='_logo-image' />
        </div>
      </div>
    </Styles>
  );
};

export default AppLoadingPage;

import React from 'react';
import PropTypes from 'prop-types';
import {Styles} from './AppLoadingPage.styles';
import logo from '../../../assets/images/logo.png';
import Theme from '../../../themes/Theme';

const AppLoadingPage = ({theme, ...props}) => {
  return (
    <Styles theme={theme} {...props}>
      <div className='_logo'>
        <div className='_logo-container'>
          <img src={logo} alt='Web App Logo' className='_logo-image' />
        </div>
      </div>
    </Styles>
  );
};

AppLoadingPage.propTypes = {
  theme: PropTypes.instanceOf(Theme),
};

export default AppLoadingPage;

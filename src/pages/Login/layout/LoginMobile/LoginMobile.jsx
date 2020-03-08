import React from 'react';
import PropTypes from 'prop-types';
import {Styles} from './LoginMobile.styles';
import Theme from '../../../../themes/Theme';

const LoginMobile = ({theme}) => {
  return <Styles theme={theme}></Styles>;
};

LoginMobile.propTypes = {
  theme: PropTypes.instanceOf(Theme),
};

export default LoginMobile;

import React from 'react';
import PropTypes from 'prop-types';
import {Styles} from './RememberPasswordDesktop.styles';
import Theme from '../../../../themes/Theme';

const RememberPasswordDesktop = ({theme}) => {
  return <Styles theme={theme}></Styles>;
};

RememberPasswordDesktop.propTypes = {
  theme: PropTypes.instanceOf(Theme),
};

export default RememberPasswordDesktop;

import React from 'react';
import PropTypes from 'prop-types';
import {Styles} from './Card.styles';
import Theme from '../../../themes/Theme';

const Card = ({children, theme, ...props}) => {
  return (
    <Styles theme={theme} {...props}>
      {children}
    </Styles>
  );
};

Card.propTypes = {
  children: PropTypes.node.isRequired,
  theme: PropTypes.instanceOf(Theme),
};

export default Card;

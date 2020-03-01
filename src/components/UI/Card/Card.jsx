import React from 'react';
import PropTypes from 'prop-types';
import {Styles} from './Card.styles';

const Card = ({children, ...props}) => {
  return <Styles {...props}>{children}</Styles>;
};

Card.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Card;

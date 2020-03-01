import React from 'react';
import {Styles} from './AppErrorBoundary.styles';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

const AppErrorBoundary = () => {
  return (
    <Styles>
      <FontAwesomeIcon icon='exclamation-triangle' className='_errorIcon' />
      <p className='_errorMessage'>En error happened when loading the app</p>
    </Styles>
  );
};

export default AppErrorBoundary;

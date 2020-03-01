import React from 'react';
import {Styles} from './AppErrorBoundary.styles';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import Card from '../../UI/Card/Card';

const AppErrorBoundary = () => {
  return (
    <Styles>
      <Card className='AppErrorBoundary'>
        <FontAwesomeIcon icon='exclamation-triangle' className='_errorIcon' />
        <p className='_errorMessage'>An error happened when the app was loading</p>
      </Card>
    </Styles>
  );
};

export default AppErrorBoundary;

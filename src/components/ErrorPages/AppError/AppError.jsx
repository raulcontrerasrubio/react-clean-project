import React from 'react';
import {Styles} from './AppError.styles';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import Card from '../../UI/Card/Card';

const AppError = () => {
  return (
    <Styles>
      <Card className='AppErrorBoundary'>
        <FontAwesomeIcon icon='exclamation-triangle' className='_errorIcon' />
        <p className='_errorMessage'>An error happened when the app was loading</p>
        <p className='_errorMessage'>
          <a href='/'>You can reload the page</a>
        </p>
      </Card>
    </Styles>
  );
};

export default AppError;

import React from 'react';
import {Styles} from './PageError.styles';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import Card from '../../UI/Card/Card';

const PageError = () => {
  return (
    <Styles>
      <Card className='PageError'>
        <FontAwesomeIcon icon='exclamation-triangle' className='_errorIcon' />
        <p className='_errorMessage'>An error happened when the page was loading</p>
        <p className='_errorMessage'>
          <a href='/'>You can reload the page</a>
        </p>
      </Card>
    </Styles>
  );
};

export default PageError;

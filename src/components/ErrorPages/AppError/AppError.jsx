import React from 'react';
import PropTypes from 'prop-types';
import {Styles} from './AppError.styles';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import Card from '../../UI/Card/Card';
import Theme from '../../../themes/Theme';

const AppError = ({theme, ...props}) => {
  return (
    <Styles theme={theme} {...props}>
      <Card className='AppError'>
        <FontAwesomeIcon icon='exclamation-triangle' className='_errorIcon' />
        <p className='_errorMessage'>An error happened when the app was loading</p>
        <p className='_errorMessage'>
          <a href='/'>You can reload the page</a>
        </p>
      </Card>
    </Styles>
  );
};

AppError.propTypes = {
  theme: PropTypes.instanceOf(Theme),
};

export default AppError;

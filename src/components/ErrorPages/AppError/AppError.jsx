import React from 'react';
import PropTypes from 'prop-types';
import {Styles} from './AppError.styles';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import Card from '../../UI/Card/Card';
import Theme from '../../../themes/Theme';
import {useTranslation} from 'react-i18next';

const AppError = ({theme, ...props}) => {
  const {t} = useTranslation();
  return (
    <Styles theme={theme} {...props}>
      <Card className='AppError'>
        <FontAwesomeIcon icon='exclamation-triangle' className='_errorIcon' />
        <p className='_errorMessage'>{t('app:components.error.app.message')}</p>
        <p className='_errorMessage'>
          <a href='/'>{t('app:components.error.app.link')}</a>
        </p>
      </Card>
    </Styles>
  );
};

AppError.propTypes = {
  theme: PropTypes.instanceOf(Theme),
};

export default AppError;

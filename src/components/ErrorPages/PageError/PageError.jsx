import React from 'react';
import {Styles} from './PageError.styles';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import Card from '../../UI/Card/Card';
import {useTranslation} from 'react-i18next';

const PageError = () => {
  const {t} = useTranslation();
  return (
    <Styles>
      <Card className='PageError'>
        <FontAwesomeIcon icon='exclamation-triangle' className='_errorIcon' />
        <p className='_errorMessage'>{t('app:components.error.app.message')}</p>
        <p className='_errorMessage'>
          <a href='/'>{t('app:components.error.app.link')}</a>
        </p>
      </Card>
    </Styles>
  );
};

export default PageError;

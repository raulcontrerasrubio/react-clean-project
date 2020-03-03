import React from 'react';
import PropTypes from 'prop-types';
import {Styles} from './ResizingPage.styles';
import Theme from '../../../themes/Theme';
import {useTranslation} from 'react-i18next';

const ResizingPage = ({theme}) => {
  const {t} = useTranslation();
  return (
    <Styles theme={theme}>
      <h1 className='_message'>{t('app:components.loading.resizing.message')}</h1>
    </Styles>
  );
};

ResizingPage.propTypes = {
  theme: PropTypes.instanceOf(Theme),
};

export default ResizingPage;

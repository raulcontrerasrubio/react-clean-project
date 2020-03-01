import React, {useMemo} from 'react';
import PageLoad from '../../components/Animations/PageLoad/PageLoad';
import {useTranslation} from 'react-i18next';

const MainPage = () => {
  const {t, i18n} = useTranslation();

  const loadedComponent = useMemo(
    () => (
      <div>
        <p>{t('app:test')}</p>
      </div>
    ),
    [t, i18n]
  );

  return <PageLoad onSuccessComponent={loadedComponent} />;
};

export default MainPage;

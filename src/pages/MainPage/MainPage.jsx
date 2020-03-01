import React, {useMemo} from 'react';
import PageLoad from '../../components/Animations/PageLoad/PageLoad';
import {useTranslation} from 'react-i18next';
import {Apple} from '@material-ui/icons';
import {AcUnit} from '@material-ui/icons';

const MainPage = () => {
  const {t, i18n} = useTranslation();

  const loadedComponent = useMemo(
    () => (
      <div>
        <p onClick={() => i18n.changeLanguage('es')}>
          {t('app:test')} <Apple /> <AcUnit />
        </p>
      </div>
    ),
    [t, i18n]
  );

  return <PageLoad onSuccessComponent={loadedComponent} />;
};

export default MainPage;

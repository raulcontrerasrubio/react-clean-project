import React, {useMemo, useContext} from 'react';
import PageLoad from '../../components/Animations/PageLoad/PageLoad';
import {useTranslation} from 'react-i18next';
import {Apple} from '@material-ui/icons';
import {AcUnit} from '@material-ui/icons';
import {ThemeContext} from '../../themes/ThemeContext';
import styled from 'styled-components';

const Styles = styled.div`
  background-color: ${({theme}) => theme.bgColorPrimary};
`;

const MainPage = () => {
  const {theme, setTheme} = useContext(ThemeContext);
  const {t, i18n} = useTranslation();

  const loadedComponent = useMemo(
    () => (
      <Styles theme={theme}>
        <p onClick={() => i18n.changeLanguage('es')}>
          {t('app:test')} <Apple onClick={() => setTheme('dark')} /> <AcUnit />
        </p>
      </Styles>
    ),
    [t, i18n, theme, setTheme]
  );

  return <PageLoad onSuccessComponent={loadedComponent} />;
};

export default MainPage;

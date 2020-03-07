import React, {useMemo, useContext, useCallback} from 'react';
import PageLoad from '../../components/Animations/PageLoad/PageLoad';
import {useTranslation} from 'react-i18next';
import {Apple} from '@material-ui/icons';
import {AcUnit} from '@material-ui/icons';
import {ThemeContext} from '../../themes/ThemeContext';
import styled from 'styled-components';

const Styles = styled.div`
  background-color: ${({theme}) => theme.bgColorPrimary};
`;

const MainPage = props => {
  const {theme, setTheme} = useContext(ThemeContext);
  const {t, i18n} = useTranslation();

  const changeLanguage = useCallback(() => {
    if (i18n.language) {
      switch (i18n.language) {
        case 'en': {
          return i18n.changeLanguage('es');
        }
        case 'es': {
          return i18n.changeLanguage('en');
        }
        default:
          return i18n.changeLanguage('en');
      }
    }
  }, [i18n]);

  const loadedComponent = useMemo(
    () => (
      <Styles theme={theme} {...props}>
        <h1 onClick={changeLanguage}>{t('app:test')}</h1>
        <h2>
          <Apple onClick={() => setTheme('dark')} />
        </h2>
        <h2>
          <AcUnit onClick={() => setTheme('light')} />
        </h2>
      </Styles>
    ),
    [t, theme, setTheme, changeLanguage, props]
  );

  return <PageLoad onSuccessComponent={loadedComponent} />;
};

export default MainPage;

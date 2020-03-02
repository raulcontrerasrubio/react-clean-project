import styled from 'styled-components';

const AppStyles = styled.div`
  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }

  html {
    box-sizing: border-box;
    font-size: 62.5%;
  }

  body {
    font-size: ${({theme}) => theme.fontSize};
    color: ${({theme}) => theme.textColor};
    background-color: ${({theme}) => theme.bgColor};
    font-family: ${({theme}) => theme.fontFamily};
    margin: 0;
    padding: 0;
  }
`;

export default AppStyles;

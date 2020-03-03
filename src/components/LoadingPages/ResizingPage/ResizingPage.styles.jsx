import styled from 'styled-components';

export const Styles = styled.div`
  position: absolute;
  background-color: ${({theme}) => theme.bgColor};
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;

  & > ._message {
    color: ${({theme}) => theme.textColor};
    font-size: 3.2rem;
  }
`;

import styled from 'styled-components';

export const Styles = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 3rem;

  & ._errorIcon {
    color: red;
    font-size: 3.2rem;
    margin: 0.5rem;
  }

  & ._errorMessage {
    text-align: center;
    font-size: 2.4rem;
    margin: 0.5rem;
  }
`;

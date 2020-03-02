import styled from 'styled-components';

export const Styles = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;

  .AppError {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 3rem;
    background-color: ${({theme}) => theme.bgColor};

    & ._errorIcon {
      color: ${({theme}) => theme.error};
      font-size: 5.4rem;
      margin: 2rem;
    }

    & ._errorMessage {
      text-align: center;
      font-size: 2.4rem;
      margin: 2rem;
    }
  }
`;

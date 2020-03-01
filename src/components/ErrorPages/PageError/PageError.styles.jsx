import styled from 'styled-components';
import {bgColor, errorColor} from '../../../config/styleVars';

export const Styles = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;

  .PageError {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 3rem;
    background-color: ${bgColor};

    & ._errorIcon {
      color: ${errorColor};
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

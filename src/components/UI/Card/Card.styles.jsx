import styled from 'styled-components';
import {textColorPrimary} from '../../../config/styleVars';
import colorWithOpacity from '../../../modules/helpers/colorWithOpacity/colorWithOpacity';

export const Styles = styled.div`
  padding: 2rem;
  border: 1px solid ${textColorPrimary};
  box-shadow: 3px 3px 5px ${colorWithOpacity(textColorPrimary, 50)};
  border-radius: 2.5rem;
`;

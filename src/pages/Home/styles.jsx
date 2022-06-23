import styled, { css } from 'styled-components';
import BG from '../../assets/background/galleon.jpeg';
import {
  BlockContainer,
  FlexContainer,
} from '../../components/Containers/styles';

export const HomeWrapper = styled(BlockContainer)`
  ${({ theme }) => css`
    background-image: url(${BG});
    background-repeat: no-repeat;
    background-size: auto;
    /* height: ${theme.sizes.fullPageHeight}; */
    height: ${theme.sizes.fullBoxSize};
  `}
`;

export const LogoWrapper = styled(FlexContainer)`
  ${({ theme }) => css`
    height: fit-content;

    & img {
      height: 30rem;
    }
  `}
`;

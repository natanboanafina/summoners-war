import styled, { css } from 'styled-components';

export const FlexContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    width: ${theme.sizes.fullBoxSize};
  `}
`;

export const BlockContainer = styled(FlexContainer)`
  ${({ theme }) => css`
    display: block;
  `}
`;

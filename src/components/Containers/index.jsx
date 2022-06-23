import React from 'react';
import * as Styled from './styles';

export const FlexContainer = ({ as, children }) => {
  return <Styled.FlexContainer as={as}>{children}</Styled.FlexContainer>;
};

export const BlockContainer = ({ as, children }) => {
  return <Styled.BlockContainer as={as}>{children}</Styled.BlockContainer>;
};

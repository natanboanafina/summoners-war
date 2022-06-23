import React from 'react';
import * as Styled from './styles';

export const Button = () => {
  return (
    <Styled.ButtonWrapper as="div">
      <Styled.Button type="button">Entrar</Styled.Button>
    </Styled.ButtonWrapper>
  );
};

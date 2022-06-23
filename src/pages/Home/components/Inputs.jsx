import React, { useState } from 'react';
import * as Styled from './styles';

export const Inputs = ({
  label,
  labelFor,
  inputId,
  inputType,
  inputValue,
  inputRequired,
  onClick,
  onChange,
  onMouseEnter,
}) => {
  return (
    <Styled.InputsWrapper as="div">
      <Styled.Label htmlFor={labelFor} onClick={onClick}>
        {label}
      </Styled.Label>

      <Styled.Input
        type={inputType}
        id={inputId}
        value={inputValue}
        onClick={onClick}
        onChange={onChange}
        onMouseEnter={onMouseEnter}
        required={inputRequired}
      />
    </Styled.InputsWrapper>
  );
};

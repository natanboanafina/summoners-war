import React, { useState } from 'react';
import * as Styled from './styles';
import Destiny from '../../../assets/logo/destiny-logo-transparent-bg.png';
import { Inputs } from './Inputs';
import { Button } from './Button';

export const Form = () => {
  const [value, setValue] = useState({
    login: '',
    password: '',
  });

  const [isHovered, setIsHovered] = useState({
    login: false,
    password: false,
  });

  return (
    <Styled.FormWrapper as="section">
      <Styled.Form as="form">
        <h1>Clã Destino</h1>
        <Inputs
          label="Login"
          htmlFor="login"
          inputId="login"
          inputType="text"
          inputRequired={true}
          onChange={(e) => setValue({ login: e.target.value })}
          onMouseEnter={(e) => setIsHovered({ login: e.target.focus() })}
        />
        <Inputs
          label="Password"
          htmlFor="password"
          inputId="password"
          inputType="password"
          inputRequired={true}
          onChange={(e) => setValue({ password: e.target.value })}
          onMouseEnter={(e) => setIsHovered({ password: e.target.focus() })}
        />
        <Button />
      </Styled.Form>
    </Styled.FormWrapper>
  );
};

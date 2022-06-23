import React from 'react';
import * as Styled from './styles';
import Logo from '../../assets/logo/new-logo.png';
import { Form } from './components/Form';

function Home() {
  return (
    <>
      <Styled.HomeWrapper as="main">
        <Styled.LogoWrapper as="div">
          <img src={Logo} alt="Logo" />
        </Styled.LogoWrapper>
        <Form />
      </Styled.HomeWrapper>
    </>
  );
}

export default Home;

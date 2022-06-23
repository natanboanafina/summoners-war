import styled, { css } from 'styled-components';
import {
  BlockContainer,
  FlexContainer,
} from '../../../components/Containers/styles';

export const FormWrapper = styled(FlexContainer)`
  ${({ theme }) => css`
    /* background-color: hsla(0, 100%, 50%, 39.6078431372549%); */
    width: ${theme.sizes.halfBoxSize};
    height: ${theme.sizes.fullPageHeight};
  `}
`;

export const Form = styled(FlexContainer)`
  ${({ theme }) => css`
    flex-direction: column;
    border: 5px ridge #3e6462;

    width: 55%;
    height: 75%;

    transition: all 350ms ease-in-out;
    box-shadow: 1px 1px 3px lightgrey;

    &:hover {
      background-color: hsla(240, 100%, 50%, 0.05);
      box-shadow: 2px 1px 3px purple;
    }

    & h1 {
      color: #fff;
      font-size: 5rem;
      transform: translateY(-65%);
      pointer-events: none;
      user-select: none;

      text-shadow: 3px 2px 1px silver;
    }
  `}
`;

export const InputsWrapper = styled(FlexContainer)`
  ${({ theme }) => css`
    position: relative;
    height: 20%;
  `}
`;

export const Label = styled.label`
  ${({ theme }) => css`
    position: absolute;

    /* background-color: #07495f; */
    background-color: #373c3d;
    color: #dedede;
    font-family: Arial;
    font-weight: 600;
    font-size: 2rem;

    top: 12%;
    left: 15%;

    pointer-events: none;
    outline: 2.5px ridge;
  `}
`;

export const Input = styled.input`
  ${({ theme }) => css`
    border-radius: 1.5rem;

    width: 80%;
    height: 3rem;

    padding-left: 3%;
    outline: none;

    &:focus {
      color: #504a4a;
      font-weight: 600;
    }
  `}
`;

export const ButtonWrapper = styled(FlexContainer)`
  ${({ theme }) => css`
    height: 15%;
  `}
`;

export const Button = styled.button`
  ${({ theme }) => css`
    background-color: #0000ff;
    color: #ffffff;
    border: none;
    border-radius: 3rem;
    width: 40%;
    height: 50%;

    cursor: pointer;
    transition: all 350ms ease-in-out;

    &:hover {
      background-color: #2a2ad6;
    }
  `}
`;

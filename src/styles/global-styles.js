import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

//Scrollbar props
/* *::-webkit-scrollbar {
  width: 0.5rem;
}


*::-webkit-scrollbar-track {
  background-color: #3F3F3F;
}

*::-webkit-scrollbar-thumb {
  background: #f5f5f5;
  border-radius: 2.5rem;
} */

html{
  font-size: 62.5%; //para usar rem como se fosse px.
}

h1,
h2,
h3,
h4,
h5,
h6,
p {
    font-family: 'Arial', sans-serif;
}

li{
  list-style: none;
  cursor: pointer;
}

a{
  text-decoration: none;
}

button {
  font-family: 'Times New Roman', sans-serif;
  font-size: 1.8rem;
  font-weight: 500;
  line-height: 2.178rem;
}

`;

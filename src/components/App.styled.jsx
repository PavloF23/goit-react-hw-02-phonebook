import styled from '@emotion/styled';

export const AppStyle = styled.div`
* {
  box-sizing: border-box;
  }
  html {
    scroll-behavior: smooth;
  }
  body {
    font-family: Montserrat, -apple-system, BlinkMacSystemFont, 'Segoe UI',
      Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue',
      sans-serif;
    color: #252f38;
    background-color: #e7ecf2;
  }
  img {
    display: block;
    max-width: 100%;
    height: auto;
  }
  ul {
    padding: 0;
    margin: 0;
    list-style: none;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p {
    margin: 0;
  }


h1{
font-size: 40px;
line-height: 1.5;
}

h2{
font-size: 35px;
line-height: 1.5;
}
`;
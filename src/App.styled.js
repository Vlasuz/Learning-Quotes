import styled from "styled-components";

export const AppStyled = styled.div`
    * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Urbanist', sans-serif;
    font-weight: 400;
  }
  
  body {
    margin: 0;
    font-size: 16px;
    /* line-height: Line-height(24)/font-size(16)=1.5 */
    line-height: 1.5;
    letter-spacing: 0.02em;
    box-sizing: border-box;
  }
  
  main {
    overflow-x: hidden;
  }
  
  html {
    scroll-behavior: smooth;
  }
  
  .container {
    max-width: calc(1280px + 30px);
    margin: 0 auto;
    width: 100%;
    padding-left: 15px;
    padding-right: 15px;
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
  
  p:last-child {
    margin-bottom: 0;
  }
  
  ul,
  ol {
    margin: 0;
    padding: 0;
    list-style: none;
  }
  
  a {
    color: currentColor;
    text-decoration: none;
  }
  
  button {
    cursor: pointer;
    outline: none;
    border: none;
    background-color: transparent;
  }
  
  img {
    display: block;
    width: 100%;
    height: 100%;
  }
  
  input,
  button,
  textarea,
  select {
    font: inherit;
    border: none;
    outline: none;
  }
  
  .h-hidden {
    position: absolute;
    width: 1px;
    height: 1px;
    margin: -1px;
    border: 0;
    padding: 0;
  
    white-space: nowrap;
    clip-path: inset(100%);
    clip: rect(0 0 0 0);
    overflow: hidden;
  }
`
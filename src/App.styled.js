import styled from "styled-components";

export const AppStyled = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Urbanist', sans-serif;
  }
  
  body {
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
  
  .container-main {
    max-width: calc(1150px + 60px);
    margin: 0 auto;
    width: 100%;
    padding-left: 30px;
    padding-right: 30px;

    @media screen and (max-width: 768px) {
      padding-left: 15px;
      padding-right: 15px;
    }
  }
  .container {
    max-width: calc(1280px + 60px);
    margin: 0 auto;
    width: 100%;
    padding-left: 30px;
    padding-right: 30px;

    @media screen and (max-width: 768px) {
      padding-left: 15px;
      padding-right: 15px;
    }
  }
  .container-main-pages {
    max-width: calc(1300px + 60px);
    margin: 0 auto;
    width: 100%;
    padding-left: 30px;
    padding-right: 30px;

    @media screen and (max-width: 768px) {
      padding-left: 15px;
      padding-right: 15px;
    }
  }
  .container-login {
    max-width: calc(1390px + 60px);
    margin: 0 auto;
    width: 100%;
    padding-left: 30px;
    padding-right: 30px;

    @media screen and (max-width: 768px) {
      padding-left: 15px;
      padding-right: 15px;
    }
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

  /* style from animation routes */

  .fade-enter-active,
  .fade-enter {
    visibility: hidden;
    opacity: 0;
    position: absolute;
    top: 0;
  }

  .fade-exit {
    opacity: 0;
    transition: all .3s ease;
  }

  .fade-enter-done {
    opacity: 1;
    transition: all .3s ease;
  }
`
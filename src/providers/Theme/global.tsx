import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *,
  *::after,
  *::before {
    margin: 0;
    padding: 0;
    font-family: "Open Sans", sans-serif;
    font-size: 1em;
    font-weight: 400;

    line-height: 1.2;
    letter-spacing: 0em;

    box-sizing: border-box;
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    word-wrap: break-word;
  }
  /* RESET */
  h1{font-size: 2em; font-weight: 400;}
  h2{font-size: 1.8em; font-weight: 600;}
  h3{font-size: 1.5em; font-weight: 800;}
  p{margin-bottom: 15px;}
  b, strong{font-weight: bold;}
  ul{list-style: none; margin: 0; padding: 0;}
  img{border: none; max-width: 100%; vertical-align: middle;}
  small{font-size: 0.75em; color: #555;}
  a{text-decoration: none; color: ${({ theme }) => theme.textColor}; cursor: pointer;}
  a img{border: 0;}
  button{cursor: pointer; background-color: transparent; border: 0; outline: none;}
  input{outline: none;}
  textarea{outline: none;}

  body, html {
    background-color: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.textColor};
    width: 100%;
  }

  .language-select {
    position: absolute;
    top: 5px;
    left: 5px;
  }

  /* LEAFLET STYLES */
  .leaflet-container {
    width: 100%;
    height: 100%;
  }

  .leaflet-pane .leaflet-marker-pane img, .leaflet-pane .leaflet-shadow-pane img{
    display: none;
  }

  .custom-marker {
    min-width: 1px;
    height: 25px;
    padding: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 3px;
    background-color: ${({ theme }) => theme.colors.darkBlue};
    color: ${({ theme }) => theme.colors.white};
  }
  
  .leaflet-popup {
    bottom: -133px !important;
    left: -50px !important;
  }

  .leaflet-popup-content-wrapper {
    border-radius: 3px;
    padding: 0;
  }

  .leaflet-popup-content {
    min-width: 150px;
    margin: 0;
  }

  .leaflet-popup-close-button {
    display: none;
  }

  .leaflet-popup-tip-container {
    display: none;
  }

`;
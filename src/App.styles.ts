import styled, { createGlobalStyle } from "styled-components";
import backgroundPic from "./images/keith-misner-unsplash.jpg";

export const Wrapper = styled.div`
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-top: 2em;
  width: 40%;

  img {
    max-width: 600px;
    max-height: 600px;
    height: auto;
    width: auto;
  }

  p {
    margin-left: 20px;
    color: white;
    text-align: center;
  }

  Button {
    margin-left: 14em;
  }

  a {
    margin-left: 14.5em;
    color: white;
  }
`;

export const GlobalStyle = createGlobalStyle`
  html {
    height: 100%;
  }

  body {
    // background-image: url(${backgroundPic});
    // background-size: cover;
    // background: radial-gradient(circle, white, black);
    background-color: #837960;
    background-image: linear-gradient(
      to bottom, transparent, #837960
    ), url(${backgroundPic});
    background-repeat: no-repeat;
    background-size: cover;
  }
`;

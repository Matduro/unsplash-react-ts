import styled, { createGlobalStyle } from "styled-components";
import backgroundPic from "./images/keith-misner-unsplash.jpg";

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

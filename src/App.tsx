import React, { useState, useEffect } from "react";
// Components
import { Unsplash } from "./components/Unsplash";
// Types

// Styles
import { GlobalStyle } from "./App.styles";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Unsplash />
    </>
  );
};

export default App;

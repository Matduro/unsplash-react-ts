import React, { useState, useEffect } from "react";
import { fetchUnsplash } from "./API";
// Components
import Button from "@mui/material/Button";
// Types
import { IImage } from "./API";
// Styles
import { Wrapper, GlobalStyle } from "./App.styles";

const App = () => {
  const [unsplashImage, setUnspashImage] = useState("");

  const newPicture = async () => {
    fetchUnsplash().then((res) => setUnspashImage(res));
  };

  useEffect(() => {
    newPicture();
  }, []);

  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <img src={unsplashImage} className="App-image" alt="unsplash" />
        <p>
          This picture is brought to you by Unsplash. To Get a new picture,
          click the button below:
        </p>
        <Button variant="contained" onClick={newPicture}>
          New Picture
        </Button>
        <br />
        <a
          className="unsplash-link"
          href="https://unsplash.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Unsplash
        </a>
      </Wrapper>
    </>
  );
};

export default App;

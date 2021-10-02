import React, { useState, useEffect } from "react";
import { fetchUnsplash } from "../API";
// Components
import Button from "@mui/material/Button";
// Styles
import { Wrapper } from "./Unsplash.styles";
// Types
import { IImage } from "../API";

export const Unsplash = () => {
  const [unsplashImage, setUnspashImage] = useState("");

  const newPicture = async () => {
    fetchUnsplash().then((res) => setUnspashImage(res));
  };

  useEffect(() => {
    newPicture();
  }, []);

  return (
    <Wrapper>
      <img src={unsplashImage} className="App-image" alt="unsplash" />
      <p>
        This picture is brought to you by Unsplash. To Get a new picture, click
        the button below:
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
  );
};

export default Unsplash;

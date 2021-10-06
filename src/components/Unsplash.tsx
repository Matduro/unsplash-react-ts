import React, { useState, useEffect } from "react";
import { fetchUnsplash } from "../API";
// Components
import Button from "@mui/material/Button";
import Image from "material-ui-image";
// Styles
import { Wrapper } from "./Unsplash.styles";
// Types
import { IImage } from "../API";

export const Unsplash = () => {
  const [unsplashImage, setUnsplashImage] = useState("");

  const newPicture = async () => {
    fetchUnsplash()
      .then((res) => setUnsplashImage(res))
      .catch((e) => console.log(e));
  };

  useEffect(() => {
    newPicture();
  }, []);

  return (
    <Wrapper>
      <Image src={unsplashImage} />
      {/* <img src={unsplashImage} className="App-image" alt="unsplash" /> */}
      <div className="unplash-actions">
        <p>To Get a new picture, click the button below:</p>
        <Button variant="contained" onClick={newPicture}>
          New Picture
        </Button>
      </div>
    </Wrapper>
  );
};

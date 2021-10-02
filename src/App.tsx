import React, { useState, useEffect } from "react";
//import { fetchUnsplash } from "./API";
// Types
// import { IImage } from "./API";

export type IImage = {
  url?: string;
};

const fetchUnsplash = async (): Promise<IImage | any> => {
  const endpoint = "https://picsum.photos/600/600";
  return await fetch(endpoint).then((res) => res.url);
};

const App = () => {
  const [unsplashImage, setUnspashImage] = useState("");

  const newPicture = async () => {
    fetchUnsplash().then((res) => setUnspashImage(res));
  };

  useEffect(() => {
    newPicture();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={unsplashImage} className="App-image" alt="unsplash" />
        <p>
          This picture is brought to you by Unsplash. To Get a new picture,
          click the button below:
        </p>
        <button className="next" onClick={newPicture}>
          New Picture
        </button>
        <a
          className="App-link"
          href="https://unsplash.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Unsplash
        </a>
      </header>
    </div>
  );
};

export default App;

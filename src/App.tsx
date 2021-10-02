import React, { useState } from "react";
//import { fetchUnsplash } from "./API";
// Types
// import { IImage } from "./API";

export type IImage = {
  url?: string;
};

const fetchUnsplash = async (): Promise<IImage | any> => {
  const endpoint = "https://picsum.photos/200/300";
  return await fetch(endpoint).then((res) => res.url);
};

const App = () => {
  const [unsplashImage, setUnspashImage] = useState("");

  const newPicture = async () => {
    fetchUnsplash().then((res) => setUnspashImage(res));
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={unsplashImage} className="App-image" alt="unsplash" />
        <p>This picture is brought to you by: Unsplash.</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Hello World!
        </a>
      </header>
    </div>
  );
};

export default App;

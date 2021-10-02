import React, { useState } from "react";
import { fetchUnsplash } from "./API";
// Types
import { IImage } from "./API";

const App = () => {
  const [unsplashImage, setUnspashImage] = useState("");

  fetchUnsplash();

  // .then((res) => {
  //   setUnspashImage(res);
  // });

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

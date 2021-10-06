import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useHistory,
} from "react-router-dom";
// Components
import { Unsplash } from "./components/Unsplash";
import { Shopping } from "./components/Shopping";
import NavBar from "./components/NavBar";
// Types

// Styles
import { GlobalStyle } from "./App.styles";

// Temporarily set as any until more components are built
const withRouter = (WrappedComponent: any) => (props: any) => {
  return (
    <Router>
      <WrappedComponent {...props} />
    </Router>
  );
};

// TODO: Implement routing to feature new components.
const App = () => {
  return (
    <>
      <GlobalStyle />
      <NavBar />
      <Switch>
        <Route path="/unsplash" exact={true} component={Unsplash} />
        <Route path="/shopping" component={Shopping} />
        <Route path="/hello">
          <img src="https://i.imgur.com/ApjVnee.mp4" alt="Hello There" />
          <h1>Stay tuned for new features</h1>
        </Route>
      </Switch>
    </>
  );
};

// export default App;
export default withRouter(App);

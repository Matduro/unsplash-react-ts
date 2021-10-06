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
import { GlobalStyle, Wrapper } from "./App.styles";
import kenobi from "./images/hello-there-general-kenobi.gif";

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
        <Route path="/" exact={true}>
          <Wrapper>
            <h3>Click on the NavBar items to navigate</h3>
          </Wrapper>
        </Route>
        <Route path="/unsplash" component={Unsplash} />
        <Route path="/shopping" component={Shopping} />
        <Route path="/hello">
          <Wrapper>
            <img src={kenobi} alt="Hello There" />
          </Wrapper>
        </Route>
      </Switch>
    </>
  );
};

// export default App;
export default withRouter(App);

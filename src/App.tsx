import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useHistory,
} from "react-router-dom";
// Components
import { Unsplash } from "./components/Unsplash";
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
      {/* <Unsplash /> */}
      <Switch>
        <Route path="/unsplash" exact={true} component={Unsplash} />
        <Route path="/hello">
          <h1>HELLO THERE!</h1>
        </Route>
      </Switch>
    </>
  );
};

// export default App;
export default withRouter(App);

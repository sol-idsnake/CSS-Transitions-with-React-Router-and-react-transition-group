import React from "react";
import "normalize.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import GlobalStyle from "./GlobalStyles";
import Header from "../Header";
import Sidebar from "../Sidebar";
import Content from "../Content";
import Editor from "../Editor";

function App() {
  const routes = [
    {
      exact: true,
      path: "/",
      component: () => <Content />
    },
    {
      path: "/12345",
      component: () => <Editor />
    }
  ];

  return (
    <Router>
      <>
        <GlobalStyle />
        <Header />
        <Sidebar />
        <Route
          render={({ location }) => (
            <TransitionGroup component={null}>
              <CSSTransition key={location.key} classNames="fade" timeout={300}>
                <Switch location={location}>
                  {routes.map(route => (
                    <Route
                      key={location.key}
                      exact={route.exact}
                      path={route.path}
                      component={route.component}
                    />
                  ))}
                </Switch>
              </CSSTransition>
            </TransitionGroup>
          )}
        />
      </>
    </Router>
  );
}

export default App;

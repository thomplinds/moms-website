import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Footer from "./components/Footer";
import Header from "./components/Header";

import About from "./pages/About";
import Resources from "./pages/Resources";
import Services from "./pages/Services";

export default function App() {
  return (
      <Router>
        <div id="app-wrapper">
          <Header />
          <div id="app-body">
            <Switch>
              <Route exact path="/">
                <About />
              </Route>
              <Route path="/services">
                <Services />
              </Route>
              <Route path="/resources">
                <Resources />
              </Route>
            </Switch>
          </div>
        </div>
        <Footer />
      </Router>
  );
}

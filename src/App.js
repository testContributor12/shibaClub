import "./main.css";
import { BrowserRouter, Route } from "react-router-dom";
import React, { Component } from "react";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Intro from "./components/Intro";
import Footer from "./components/Footer";
import Events from "./components/Events/Events";
import Articles from "./components/Articles/Articles";
import { Provider } from "react-redux";
import store from "./store";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div>
            <Navbar />
            <Route exact path="/" component={Intro} />
            <Route exact path="/about" component={About} />
            <Route exact path="/events" component={Events} />
            <Route exact path="/articles" component={Articles} />
            <Footer />
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;

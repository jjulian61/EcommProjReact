import "./App.css";
import Discounted from "./Components/Discounted";
import Explore from "./Components/Explore";
import Featured from "./Components/Featured";
import Footer from "./Components/Footer";
import React, { useState } from "react";
import Highlights from "./Components/Highlights";
import Landing from "./Components/Landing";
import Nav from "./Components/Nav";
import { Switch } from "react-router-dom/cjs/react-router-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"; 
import Home from "./pages/Home";
import Books from "./pages/Books"
import { books } from "../src/data"
import BookInfo from "./pages/BookInfo"
import Cart from "./pages/Cart"
import { BrowserRouter } from "react-router-dom/cjs/react-router-dom.min";

function App() {
  return (
    <Router>
      <div className="App">
        <Router />
        <Nav />
        <Route path="/" exact component={Home} >/
        <Route path="/books" component={books}>/
        <Home />
        <Footer />
      </div>
    </Router>
  );
}

export default App;

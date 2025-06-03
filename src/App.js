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
  const [cart, setCart] = useState([]);

  function addToCart(book) {
    setCart([...cart, {...book, quantity: 1}])
  }

  function changeQuantity(book, quantity) {
    setCart(cart.map(item => 
      item.id === book.id 
        ? {
          ...item,
          quantity: +quantity,
        }
      : item
    )
  );
  }

  function removeItem(item) {
    setCart(cart.filter(book => book.id != item.id))
  }

  function numberOfItems() {
    let counter = 0;
    cart.forEach(item => {
      counter += item.quantity
    })
    return counter;
  }

  useEffect(() => {

  } [cart]);




  return (
    <Router>
      <div className="App">
        <Nav  numberOfItems={numberOfItems()}/>
        <Route path="/" exact component={Home} />
        <Route path="/books" exact render = {() => <Books books={books} />} />
        <Route path="/books/:id"render={() => <BookInfo books={books} addToCart={addToCart} />} />
        <Route path="/cart" render = {() => <Cart books={books} cart={cart} changeQuantity={changeQuantity} removeItem={removeItem} />} />
        <Home />
        <Footer />
      </div>
    </Router>
  );
}

export default App;

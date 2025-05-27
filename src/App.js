import "./App.css";
import Discounted from "./Components/Discounted";
import Explore from "./Components/Explore";
import Featured from "./Components/Featured";
import Footer from "./Components/Footer";
import Highlights from "./Components/Highlights";
import Landing from "./Components/Landing";
import Nav from "./Components/Nav";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home";
import Books from "./pages/Books"

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

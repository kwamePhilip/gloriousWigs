import React from "react";
import Header from "./components/Header";
import HomePage from "./components/Home/HomePage";
import Category from "./components/Home/Category";
import Footer from "./components/Footer";
import CatCard from "./components/CategoryPage/catCard";
import FirstCategory from "./components/CategoryPage/cat1Page";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

export default function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/cat1Page" component={FirstCategory} />
        </Switch>
      </div>
    </Router>
  );
}

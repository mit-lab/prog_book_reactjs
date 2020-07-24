import React, { Component } from "react";
import "./App.css";
import Header from "./Components/Header/Index.js";
import ProductList from "./Components/ProductList/Index";
import { Switch, Route } from "react-router-dom";
import Menu from "./Components/Menu/Menu";
import CartDialog from "./Components/CartDialog/Index";
import Details from "./Components/Details/Index";
import Footer from "./Components/Footer/Index";

class App extends Component {
  render() {
    return (
      <div className="app">
        <Header />
        <div className="app-body">
          <Menu />
          <div className="content">
            <CartDialog />
            <Switch>
              <Route path="/" exact component={ProductList} />
              <Route path="/details/:id" component={Details} />
              <Route
                component={() => (
                  <div style={{ padding: 20 }}>Page not found</div>
                )}
              />
            </Switch>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;

import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

import "./App.css";
import Header from "./Components/Header/Index.js";
import ProductList from "./Page/ProductList/Index";
import Details from "./Page/Details/Index";
import CartDialog from "./Page/CartDialog/Index";
import Menu from "./Components/Menu/Index";
import Footer from "./Components/Footer/Index";

const App = () => {
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
                <div style={{ padding: 20 }}>Cтраница не найдена</div>
              )}
            />
          </Switch>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;

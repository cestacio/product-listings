import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ProductList from './components/ProductList';
import Header from './components/Header';
import Basket from './components/Basket';

import { Provider } from './context';

import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      actions: {
        addToBasket: this.addToBasket,
        removeFromBasket: this.removeFromBasket
      }
    };
  }

  render() {
    return (
      <Provider>
        <Router>
          <div className="App">
            <Header />
            <div className="container">
              <Switch>
                <Route exact path="/" component={ProductList} />
                <Route exact path="/basket" component={Basket} />
              </Switch>
            </div>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;

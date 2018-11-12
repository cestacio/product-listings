import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Consumer } from '../context';

class Header extends Component {
  render() {
    return (
      <Consumer>
        {value => {
          const { basket } = value;
          return (
            <nav className="navbar navbar-expand-sm navbar-dark bg-dark mb-3 py-0">
              <div className="container">
                <Link to="/" className="navbar-brand">
                  Fresh Farms
                </Link>
                <div>
                  <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                      <Link to="/" className="nav-link">
                        Home
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link to="/basket" className="basketButton nav-link">
                        <i className="fas fa-shopping-basket" /> {basket}
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          );
        }}
      </Consumer>
    );
  }
}

export default Header;

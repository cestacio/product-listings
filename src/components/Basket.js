import React, { Component } from 'react';
import BasketItem from './BasketItem';
import { Consumer } from '../context';

class Basket extends Component {
  render() {
    return (
      <Consumer>
        {value => {
          const { basket, myItems } = value;
          return (
            <div>
              <h4 className="display-4">Your Basket</h4>
              <p className="lead">Manage your items below</p>
              <b>{basket}</b> item(s) in your basket
              <ul className="list-group list-group-flush">
                {myItems.map(item => (
                  <BasketItem
                    key={item.id}
                    name={item.name}
                    vendor={item.vendor}
                  />
                ))}
              </ul>
            </div>
          );
        }}
      </Consumer>
    );
  }
}
export default Basket;

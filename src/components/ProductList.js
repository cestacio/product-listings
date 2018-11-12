import React, { Component } from 'react';
import Product from './Product';
import Tags from './Tags';

import { Consumer } from '../context';

class ProductList extends Component {
  render() {
    return (
      <Consumer>
        {value => {
          const { products } = value;
          return (
            <div>
              <h1 className="display-4 mb-2 pb-2">
                <span className="text-success">Product</span> Listings
              </h1>
              <Tags />
              <div className="card-group">
                {products.map(product => (
                  <Product
                    key={product.id}
                    name={product.name}
                    vendor={product.vendor}
                    tags={product.tags}
                    image={product.image}
                  />
                ))}
              </div>
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default ProductList;

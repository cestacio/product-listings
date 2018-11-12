import React, { Component } from 'react';
import { Consumer } from '../context';

class Product extends Component {
  state = {
    count: 0
  };

  onDecreaseClick = (id, dispatch) => {
    dispatch({ type: 'DECREASE_FROM_BASKET', payload: id });
  };

  onAddClick = (id, dispatch) => {
    dispatch({ type: 'ADD_TO_BASKET', payload: id });
  };

  // TODO
  addCount() {
    this.setState({ count: this.state.count + 1 });
  }

  render() {
    const { id, vendor, name, tags, image } = this.props;
    return (
      <Consumer>
        {value => {
          const { dispatch, basket } = value;
          return (
            <div className="card">
              <img
                className="card-img-top py-2 px-4"
                src={image}
                alt={name}
                style={{ height: '150px' }}
              />
              <div className="card-body mb-3">
                <p>{vendor}</p>
                <h6>{name}</h6>
                <p>
                  {tags
                    ? tags.map(tag => (
                        <span className="badge badge-success mx-1">{tag} </span>
                      ))
                    : null}
                </p>
              </div>
              <div className="card-footer">
                <small className="text-muted">
                  Quantity:
                  <div className="buttons">
                    <i
                      onClick={this.onDecreaseClick.bind(
                        this.props,
                        id,
                        dispatch
                      )}
                      className="fas fa-minus-circle"
                      style={{ cursor: 'pointer' }}
                    />
                    <input
                      className="counter"
                      type="text"
                      size="5"
                      value={basket}
                    />
                    <i
                      onClick={this.onAddClick.bind(
                        this.props,
                        this._reactInternalFiber.key,
                        dispatch
                      )}
                      className="fas fa-plus-circle"
                      style={{ cursor: 'pointer' }}
                    />
                  </div>
                </small>
              </div>
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default Product;

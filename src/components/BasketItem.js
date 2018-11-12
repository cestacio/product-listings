import React, { Component } from 'react';
import { Consumer } from '../context';

class BasketItem extends Component {
  handleSubmit = () => {};

  handleChange = () => {};

  onDeleteClick = (id, dispatch) => {
    dispatch({ type: 'DELETE_FROM_MY_ITEMS', payload: id });
  };

  render() {
    const { id, vendor, name } = this.props;
    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div>
              <li key={id} className="list-group-item">
                {vendor}
                <span>
                  <h5>{name}</h5>
                  <form onSubmit={this.handleSubmit}>
                    <label>
                      Quantity:
                      <select
                        // value={this.state.value}
                        onChange={this.handleChange}
                      >
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                      </select>
                    </label>
                  </form>
                  <i
                    onClick={this.onDeleteClick.bind(
                      this.props,
                      this._reactInternalFiber.key,
                      dispatch
                    )}
                    className="fa fa-minus-circle fa-2x"
                    style={{ cursor: 'pointer', color: 'red' }}
                  />
                </span>
              </li>
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default BasketItem;

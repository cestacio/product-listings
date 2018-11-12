import React, { Component } from 'react';

class Tags extends Component {
  render() {
    return (
      <div className="pb-4">
        Filter products:
        <button
          key="dairy"
          type="button"
          className="btn btn-outline-secondary btn-sm mx-1"
        >
          dairy
        </button>
        <button
          key="fruit"
          type="button"
          className="btn btn-outline-secondary btn-sm mx-1"
        >
          fruit
        </button>
        <button
          key="kids"
          type="button"
          className="btn btn-outline-secondary btn-sm mx-1"
        >
          kids
        </button>
        <button
          key="vegan"
          type="button"
          className="btn btn-outline-secondary btn-sm mx-1"
        >
          vegan
        </button>
        <button
          key="reset"
          type="button"
          className="btn btn-outline-danger btn-sm mx-1"
        >
          reset
        </button>
      </div>
    );
  }
}

export default Tags;

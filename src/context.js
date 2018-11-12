// context holds our global state
import React, { Component } from 'react';

const Context = React.createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case 'DECREASE_FROM_BASKET':
      return {
        ...state,
        basket: state.basket > 0 ? state.basket - 1 : 0
      };
    case 'ADD_TO_BASKET':
      // NOTE: the below only works for up to two clicks on each product incremented.
      // const itemInBasket = state.myItems.find(
      //   item => item.id === action.payload
      // );
      // if (itemInBasket) {
      //   itemInBasket.count++;
      // }
      return {
        ...state,
        basket: state.basket + 1,
        // TODO: add conditional that checks if item.id is already in myItems
        // if it is, increment item.count by 1, otherwise append it to myItems (basket)
        // this will avoid adding the same item multiple times, as separate items, to the basket
        myItems: state.myItems.concat(
          state.products.filter(item => item.id === action.payload)
        )
      };
    case 'DELETE_FROM_MY_ITEMS':
      return {
        ...state,
        basket: state.basket > 0 ? state.basket - 1 : 0,
        myItems: state.myItems.filter(item => item.id !== action.payload)
      };
    default:
      return state;
  }
};

export class Provider extends Component {
  state = {
    basket: 0,
    myItems: [],
    products: [
      {
        id: '59f00c2f319df6000b305382',
        vendor: 'Napa Farms',
        name: 'Carrot Sticks',
        tags: ['vegan'],
        image:
          'https://liviehwilliams.files.wordpress.com/2012/06/3_159_carrotfries_original.jpg',
        count: 0
      },
      {
        id: '59efb97d19278c000ac38b0c',
        vendor: 'Napa Farms',
        name: 'Celery Sticks',
        tags: ['kids', 'vegan'],
        image:
          'https://www.markon.com/sites/default/files/styles/large/public/pi_photos/Celery_Sticks_Hero.jpg',
        count: 0
      },
      {
        id: '5aea47d9cb4304000fee340f',
        vendor: 'Napa Farms',
        name: 'Washed Berry Cup',
        tags: ['fruit'],
        image:
          'https://d2lnr5mha7bycj.cloudfront.net/product-image/file/large_c5b395f8-b0a0-4e32-878a-d0fd6eec320e.jpg',
        count: 0
      },
      {
        id: '599f3621385fae000b76e826',
        vendor: 'Napa Farms',
        name: 'Cubed Ham',
        image:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvmTBvTlP-DKVHIhjQ-YHu3Kv0e2UQLqpUp9msC2TwTC1LD2p5',
        count: 0
      },
      {
        id: '59bac4d10afce5000ba3bfc4',
        vendor: "Siggi's",
        name: 'Lowfat Pumpkin & Spice Icelandic Yogurt',
        tags: ['dairy'],
        image: 'http://prod.shopwell.com/gladson/00898248001534_full.jpg',
        count: 0
      }
    ],
    dispatch: action => this.setState(state => reducer(state, action))
  };

  render() {
    // the provider is giving off the value that holds the state
    const { children } = this.props;
    return <Context.Provider value={this.state}>{children}</Context.Provider>;
  }
}

// we have a provider and we use the consumer within any component we want to access the state from
export const Consumer = Context.Consumer;

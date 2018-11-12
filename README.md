## Fresh Farms

A simple product listings page with basket functionality.
Tech stack: React.js and React Context API

## Setup

1. Fork this repo: [link]
2. `npm install`
3. `npm start`

## Goals

As I user, I should:

- be able to see all products listed, with their names and vendor names visible.
- be able to click on a button to add a product to a page-local basket.
  - see an indication that the product is in their basket.
  - be able to see the quantity of a product in their basket. _\*TODO_
  - be able to increment/decrement the quantity of a product in their basket. _\*TODO_
  - be able to remove products entirely from their basket.
- be able to filter the listings by tag. _\*TODO_

## Todo and Notes

- If I had more time, I'd complete the starred items above. Actions listed below:
  - For users to see the quantity of a product in their basket, I would add a new property to the `products` list in state called `count` and initialize it with 0. I would then render this property in the `Basket` component. _see next bullet_
  - For users to increment/decrement quantity of a product in their basket, I would add an event listener on each button clicked from the dropdown form on the `BasketItem` component and update the state of `count`.
  - For users to filter the listings by tag, I would use `map` over the `tags` array and add an event listener to check which button was clicked. Depending on the button clicked, I'd update the `ProductList` component and only render the filtered items.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

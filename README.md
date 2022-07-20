
# Midori E-commerce App

Midori is one stop shop for all your garden needs.


![Logo](https://i.postimg.cc/zfnTsZfR/Untitled-design.png)


## Run Locally

Clone the project

```bash
  git clone https://github.com/mansipadgelwar/Midori_E_Commerce_App.git
```

Go to the project directory

```bash
  cd Midori_E_Commerce_App 
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run start
```


## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`REACT_APP_JWT_SECRET`


## Features

- Home Page
- Product Listing Page
- Filters by
   - Price
   - Category
   - Ratings
- Cart Management
- Wishlist Management
- Authentication
  - Sign-up
  - Login
  - Logout
- Search
- Address Management
- Checkout
- User Profile Page
- Order Summary

## Functionalities
- Authentication
  - Users can sign-up for app
  - Users can log in to app
  - Users can logout from app

- User can see a landing page with a list of featured categories.
- Product Listing Page
  - User can see a product listing page where all the products are listed with a section of filters.
  - User can see multiple filters on the product listing page including,
    - Price: A radio button to sort from low to high & high to low.
    - Category: A checkbox with various categories according to the theme.
    - Ratings: A slider for ratings.
    - User can see a button to clear filters from where I can clear all the applied filters.
 - Cart Management
   - From the navbar, user can navigate to the cart where all the products are mentioned.
   - On the product card,
     - User can see the quantity of a particular product.
     - User can increase or decrease the quantity of a particular product.
     - Remove the product from the cart
     - Add the product to the Wishlist
     - User can see the price details card of the cart containing a button to checkout which will show the total price of the products with its quantity.
- Wishlist Management
  - From the navbar, user can navigate to their wishlist where all the products that they would like to buy are mentioned.
  - On the product card,
    - User can remove the item from the wishlist
    - Add the item to the cart
    - If the cart already contains that item, it's only increasing the quantity.
- Search
  - User can search for an item from the list via the input textbox on the header navbar.
## Tech Stack

React, React Router, Midori UI component library, Git for version control, Vercel for deployment.


## Demo

Insert gif or link to demo


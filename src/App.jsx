import { Component } from "react";
import { Route, Routes, Navigate } from "react-router-dom";

import Home from "./components/Home";
import BookList from "./components/BookList";
import BookDetails from "./components/BookDetails";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
import Checked from "./components/Checked";
import NotFound from "./components/NotFound";

import CartContext from "./context/CartContext";

import "./App.css";

class App extends Component {
  state = {
    cartList: [],
  };

  addToCart = (bookItem) => {
    this.setState((prevState) => ({
      cartList: [...prevState.cartList, bookItem],
    }));
  };
  increaseQuantity = (cartItem) => {};
  decreaseQuantity = (cartItem) => {};
  deleteFromCart = (cartItem) => {
    this.setState((prevState) => ({
      cartList: prevState.cartList.filter(
        (eachCartItem) => eachCartItem.isbn13 !== cartItem.isbn13
      ),
    }));
  };
  resetCart = () => {
    this.setState({ cartList: [] });
  };

  render() {
    const { cartList } = this.state;
    return (
      <CartContext.Provider
        value={{
          cartList,
          addToCart: this.addToCart,
          increaseQuantity: this.increaseQuantity,
          decreaseQuantity: this.decreaseQuantity,
          deleteFromCart: this.deleteFromCart,
          resetCart: this.resetCart,
        }}
      >
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/books" element={<BookList />} />
          <Route exact path="/books/:id" element={<BookDetails />} />
          <Route exact path="/cart" element={<Cart />} />
          <Route exact path="/checkout" element={<Checkout />} />
          <Route exact path="/Checked" element={<Checked />} />
          <Route exact path="/not-found" element={<NotFound />} />
          {/* Redirecting to /not-found if no match is found */}
          <Route path="*" element={<Navigate to="/not-found" />} />
        </Routes>
      </CartContext.Provider>
    );
  }
}

export default App;

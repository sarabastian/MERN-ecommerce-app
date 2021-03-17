import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  Row,
  Col,
  ListGroup,
  Image,
  Form,
  Button,
  Card,
} from "react-bootstrap";
import { addToCart } from "../actions/cartActions";
import Message from "../components/Message";
import { productDetailsReducer } from "../reducers/productReducers";

const CartScreen = ({ match, location, history }) => {
  //getting productId from URL:
  const productId = match.params.id;

  //   query params comes from location.search
  //   check to see if its there- only want the number
  // will set array with the 1 index
  const qty = location.search ? Number(location.search.split("=")[1]) : 1;

  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart);

  const { cartItems } = cart;
  useEffect(() => {
    //   dispatch add to cart if there is a product
    if (productId) {
      dispatch(addToCart(productId, qty));
    }
  }, [dispatch, productId, qty]);
  return <div>Cart</div>;
};

export default CartScreen;

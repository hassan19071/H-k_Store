// src/redux/data/UserData.js
import { createSlice } from '@reduxjs/toolkit';
import toast from 'react-hot-toast';

// Helper function to safely parse JSON
const loadCurrentUser = () => {
  try {
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));
    return currentUser && currentUser.email ? currentUser : null;
  } catch (e) {
    console.error("Error parsing saved currentUser from localStorage", e);
    return null;
  }
};

const addedToWishlist = (msg) => toast.success(msg);
const alreadyAdded = (msg) => toast.error(msg);
const addedToCart = (msg) => toast.success(msg);

const initialState = {
  currentUser: loadCurrentUser(),
};

export const userData = createSlice({
  name: 'user',
  initialState,
  reducers: {
    addCurentUser: (state, action) => {
      state.currentUser = action.payload;
      localStorage.setItem("currentUser", JSON.stringify(state.currentUser));
    },
    addToWishlist: (state, action) => {
      const itemIndex = state.currentUser.wishlist.findIndex(pro => pro.id === action.payload.id);
      if (itemIndex === -1) {
        state.currentUser.wishlist.push({ ...action.payload });
        addedToWishlist(`${action.payload.name}, successfully added to your wishlist!`);
      } else {
        alreadyAdded(`${action.payload.name}, is already in your wishlist!`);
      }
      localStorage.setItem("currentUser", JSON.stringify(state.currentUser));
    },
    removeFromWishlist: (state, action) => {
      state.currentUser.wishlist = state.currentUser.wishlist.filter(pro => pro.id !== action.payload.id);
      localStorage.setItem("currentUser", JSON.stringify(state.currentUser));
    },
    clearWishlist: (state) => {
      state.currentUser.wishlist = [];
      localStorage.setItem("currentUser", JSON.stringify(state.currentUser));
    },
    addToCart: (state, action) => {
      const itemIndex = state.currentUser.cart.findIndex(pro => pro.id === action.payload.id);
      if (itemIndex === -1) {
        state.currentUser.cart.push({ ...action.payload, quantity: 1 });
        addedToCart(`${1} x ${action.payload.name}, successfully added to your cart!`);
      } else {
        state.currentUser.cart[itemIndex].quantity += 1;
        addedToCart(`${state.currentUser.cart[itemIndex].quantity} x ${action.payload.name}, successfully added to your cart!`);
      }
      localStorage.setItem("currentUser", JSON.stringify(state.currentUser));
    },
    removeFromCart: (state, action) => {
      state.currentUser.cart = state.currentUser.cart.filter(pro => pro.id !== action.payload.id);
      localStorage.setItem("currentUser", JSON.stringify(state.currentUser));
    },
    clearCart: (state) => {
      state.currentUser.cart = [];
      localStorage.setItem("currentUser", JSON.stringify(state.currentUser));
    },
    increaseQuantity: (state, action) => {
      const item = state.currentUser.cart.find(pro => pro.id === action.payload.id);
      if (item) {
        item.quantity += 1;
      }
      localStorage.setItem("currentUser", JSON.stringify(state.currentUser));
    },
    decreaseQuantity: (state, action) => {
      const item = state.currentUser.cart.find(pro => pro.id === action.payload.id);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
      } else if (item && item.quantity === 1) {
        state.currentUser.cart = state.currentUser.cart.filter(pro => pro.id !== action.payload.id);
      }
      localStorage.setItem("currentUser", JSON.stringify(state.currentUser));
    },
    placeOrder: (state, action) => {
      const newOrder = {
        id: new Date().toISOString(),
        cartItems: state.currentUser.cart,
        ...action.payload,
      };
      state.currentUser.orders = [...(state.currentUser.orders || []), newOrder];
      state.currentUser.cart = [];
      localStorage.setItem("currentUser", JSON.stringify(state.currentUser));
      toast.success("Order placed successfully!");
    },
    updateCurrentUser(state, action) {
      state.currentUser = action.payload;
    },
  },
});

export const { addCurentUser, updateCurrentUser, addToWishlist, removeFromWishlist, clearWishlist, addToCart, removeFromCart, clearCart, increaseQuantity, decreaseQuantity, placeOrder } = userData.actions;
export default userData.reducer;

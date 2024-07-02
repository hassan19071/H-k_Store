/* eslint-disable no-empty-pattern */
import { createSlice } from '@reduxjs/toolkit';
import toast from 'react-hot-toast';

// Helper function to safely parse JSON
const loadCart = () => {
  try {
    const cart = localStorage.getItem("saveCart");
    return cart ? JSON.parse(cart) : [];
  } catch (e) {
    console.error("Error parsing saved cart from localStorage", e);
    return [];
  }
};

const addedToCart = (msg) => toast.success(msg);

export const cartSettings = createSlice({
    name: 'cart',
    initialState: {
      cart: loadCart(),
    },
    reducers: {
      addToCart: (state, action) => {
            const itemIndex = state.cart.findIndex(pro => pro.id === action.payload.id);
            if (itemIndex === -1) {
              state.cart.push({ ...action.payload, quantity: 1 });
              addedToCart(`${ 1 } x ${action.payload.name},successfully added to your cart!`);
            } else {
              state.cart[itemIndex].quantity += 1;
              addedToCart(`${state.cart[itemIndex].quantity} x ${action.payload.name},successfully added to your cart!`);
            }
            localStorage.setItem("saveCart", JSON.stringify(state.cart));
        },
      removeFromCart: (state, action) => {
        state.cart = state.cart.filter(pro => pro.id !== action.payload.id);
        localStorage.setItem("saveCart", JSON.stringify(state.cart));
      },
      clearCart: (state) => {
        state.cart = [];
        localStorage.setItem("saveCart", JSON.stringify(state.cart));
      },
      increaseQuantity: (state, action) => {
        const item = state.cart.find(pro => pro.id === action.payload.id);
        if (item) {
          item.quantity += 1;
        }
        localStorage.setItem("saveCart", JSON.stringify(state.cart));
      },
      decreaseQuantity: (state, action) => {
        const item = state.cart.find(pro => pro.id === action.payload.id);
        if (item && item.quantity > 1) {
          item.quantity -= 1;
        } else if (item && item.quantity === 1) {
          state.cart = state.cart.filter(pro => pro.id !== action.payload.id);
        }
        localStorage.setItem("saveCart", JSON.stringify(state.cart));
      },
    },
  });
  
  export const { addToCart, removeFromCart, increaseQuantity, decreaseQuantity, clearCart } = cartSettings.actions;
  export default cartSettings.reducer;

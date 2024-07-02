/* eslint-disable no-empty-pattern */
import { createSlice } from '@reduxjs/toolkit';
import toast from 'react-hot-toast';
// Helper function to safely parse JSON
const loadWishlist = () => {
  try {
    const wishlist = localStorage.getItem("saveWishlist");
    return wishlist ? JSON.parse(wishlist) : [];
  } catch (e) {
    console.error("Error parsing saved wishlist from localStorage", e);
    return [];
  }
};

const addedToWishlist = (msg) => toast.success(msg);
const alreadyAdded = (msg) => toast.error(msg);

export const wishlistSettings = createSlice({
    name: 'wishlist',
    initialState: {
      wishlist: loadWishlist(),
    },
    reducers: {
      addToWishlist: (state, action) => {
            const itemIndex = state.wishlist.findIndex(pro => pro.id === action.payload.id);
            if (itemIndex === -1) {
              state.wishlist.push({ ...action.payload });
              addedToWishlist(`${action.payload.name}, successfully added to your wishlist!`);
            } else {
              alreadyAdded(`${action.payload.name}, is already in your wishlist!`);
            }
            localStorage.setItem("saveWishlist", JSON.stringify(state.wishlist));
        },
      removeFromWishlist: (state, action) => {
        state.wishlist = state.wishlist.filter(pro => pro.id !== action.payload.id);
        localStorage.setItem("saveWishlist", JSON.stringify(state.wishlist));
      },
      clearWishlist: (state) => {
        state.wishlist = [];
        localStorage.setItem("saveWishlist", JSON.stringify(state.wishlist));
      },
    },
  });
  
  export const { addToWishlist, removeFromWishlist, clearWishlist } = wishlistSettings.actions;
  export default wishlistSettings.reducer;

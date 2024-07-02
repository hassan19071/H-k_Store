import { createSlice } from '@reduxjs/toolkit';
import toast from 'react-hot-toast';

const ordered = (msg) => toast.success(msg);

const orderSettings = createSlice({
  name: 'order',
  initialState: {
    orders: [],
  },
  reducers: {
    placeOrder(state, action) {
      state.orders.push(action.payload);
      ordered("Your order has been successfully placed! We will notify you once your items are shipped.")
    },
  },
});

export const { placeOrder } = orderSettings.actions;
export default orderSettings.reducer;

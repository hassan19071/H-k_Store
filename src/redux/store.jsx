import { configureStore } from '@reduxjs/toolkit'
import changeSlider  from './data/Slider'
import filterTheProducts  from './data/FilteringProducts'
// import  cartSettings  from './data/CartSettings'
// import  wishlistSettings  from './data/WishlistSettings'
// import OrderSettings from './data/OrderSettings'
import userData from './data/UserData'

export const store = configureStore({
  reducer: {
    slider : changeSlider,
    filter : filterTheProducts,
    // cart : cartSettings,
    // wishlist: wishlistSettings,
    // orders: OrderSettings,
    user: userData
  }
})
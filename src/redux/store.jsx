import { configureStore } from '@reduxjs/toolkit'
import changeSlider  from './data/Slider'
import filterTheProducts  from './data/FilteringProducts'
import userData from './data/UserData'

export const store = configureStore({
  reducer: {
    slider : changeSlider,
    filter : filterTheProducts,
    user: userData
  }
})
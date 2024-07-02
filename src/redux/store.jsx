import { configureStore } from '@reduxjs/toolkit'
import changeSlider  from './data/Slider'
import filterTheProducts  from './data/FilteringProducts'

export const store = configureStore({
  reducer: {
    slider : changeSlider,
    filter : filterTheProducts,
  }
})
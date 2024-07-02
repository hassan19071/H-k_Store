import { createSlice } from '@reduxjs/toolkit'
import {sliderData} from "../../assets/data/dummyData";

const initialState = {
  index: 0,
}

export const changeSlider = createSlice({
  name: 'slider',
  initialState,
  reducers: {
    nextSlide: (state) => {
       if (state.index < sliderData.length - 1){
        state.index += 1;
       }else{
        state.index = 0;
       }
    },
    prevSlide: (state) => {
        if (state.index <= 0){
         state.index = sliderData.length - 1;
        }else{
         state.index -=1;
        }
     }
  },
})

export const { nextSlide, prevSlide } = changeSlider.actions
export default changeSlider.reducer
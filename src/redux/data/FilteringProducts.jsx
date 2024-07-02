import { createSlice } from '@reduxjs/toolkit';
import {storeData} from "../../assets/data/dummyData";


export const filterTheProducts = createSlice({
  name: 'filtering',
  initialState:{
    filteringProducts : storeData,
    genderFilter : localStorage.getItem("saveGender") || "",
    priceFilter:localStorage.getItem("savePrice") || "",
    colorFilter:localStorage.getItem("saveColor") || "",
    sizeFilter:localStorage.getItem("saveSize") || "",
    singleProduct:[],
  },
  reducers: {
     filterByType : (state,action)=>{
        state.filteringProducts = storeData.filter((pro)=>{
            return pro.type.toLowerCase() === action.payload;
        })
     },
     filterById:(state,action)=> {
      state.singleProduct = storeData.filter((pro)=>{
         return pro.id === action.payload;
     })
     },
     changeGender : (state,action)=>{
        state.genderFilter = action.payload;
        let save = state.genderFilter;
        localStorage.setItem("saveGender",save);
     },
     changePrice : (state,action)=>{
        state.priceFilter = action.payload;
        let save = state.priceFilter;
        localStorage.setItem("savePrice",save);
     },
     changeColor : (state,action)=>{
        state.colorFilter = action.payload;
        let save = state.colorFilter;
        localStorage.setItem("saveColor",save);
     },
     changeSize : (state,action)=>{
        state.sizeFilter = action.payload;
        let save = state.sizeFilter;
        localStorage.setItem("saveSize",save);
     },
  },
})

export const { filterByType, changeGender, changePrice, changeColor, changeSize, filterById } = filterTheProducts.actions;
export default filterTheProducts.reducer;
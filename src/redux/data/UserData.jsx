import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  currentUser: [],
}

export const userData = createSlice({
  name: 'user',
  initialState,
  reducers: {
    addCurentUser : (state,action)=>{
        state.currentUser = action.payload;
    }
  },
})

export const { addCurentUser } = userData.actions
export default userData.reducer
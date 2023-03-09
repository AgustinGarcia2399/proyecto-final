import { createSlice } from '@reduxjs/toolkit'


const initialState = {
    item: 0,
  }

export const itemSlice = createSlice({
    name: "items",
    initialState,
    reducers: {
        add: (state, action) => {
            state.item += action.payload
        },
    }
})

export const { add } = itemSlice.actions

export default itemSlice.reducer
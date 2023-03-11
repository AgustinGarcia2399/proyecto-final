import { createSlice } from '@reduxjs/toolkit'


const initialState = {
    cartItem: [],
  }

export const itemSlice = createSlice({
    name: "items",
    initialState,
    reducers: {
        add (state, action){
            const itemIndex = state.cartItem.findIndex(
                (item) => item.id === action.payload.id
            );
                if(itemIndex>=0){
                    state.cartItem[itemIndex].cartQuantity +=1
                }else{
                    const tempProduct = {...action.payload,cartQuantity:1};
                    state.cartItem.push(tempProduct);
                }
        },
        clearCart: (state) =>{
            state.cartItem = [];
        },
        removeFromCart(state,action){
            const nextCartItem = state.cartItem.filter(
                cartIt => cartIt.id !== action.payload.id
            )
            state.cartItem = nextCartItem;
        }
    }
})

export const { add, clearCart, removeFromCart } = itemSlice.actions

export default itemSlice.reducer
import { createSlice } from "@reduxjs/toolkit";


const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: []
    },
    reducers: {
        /* 
               {
                   payload : "pizza"
               }
               this payload is passed as second argument of 
           */
        addItem: (state, action) => {
            state.items.push(action.payload)
        },
        removeItem: (state) => {
            state.items.pop();
        },
        clearCart: (state) => {
            //RTK - either mutate the existing state or return a new state 
            // state.items.length = 0;
            //or
            return { items: [] };
        }
    }
});

// cartSlice will look like this
// 
// {
//     actions:{
//         addItem,removeItem
//     },
//     reducers: {}
// }

export const { addItem, removeItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
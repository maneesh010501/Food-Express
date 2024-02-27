import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";

const appStore = configureStore({
    //reducer for our whole app : contains reducers of each slice
    reducer: {
        cart: cartReducer
    }
});

export default appStore;
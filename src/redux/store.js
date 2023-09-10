import {configureStore} from "@reduxjs/toolkit";
import products from "./reducers/products";
import oneProduct from "./reducers/oneProduct";
import user from "./reducers/user";


export const store = configureStore({
    reducer: {
        products,
        oneProduct,
        user
    }
})
import {createSlice,createAsyncThunk} from "@reduxjs/toolkit";





const userSlice = createSlice({
    name: "user",
    initialState:{
        user:{
            email: localStorage.getItem("user") !== null ? JSON.parse(localStorage.getItem("user")).email : "",
            id:localStorage.getItem("user") !== null ? JSON.parse(localStorage.getItem("user")).id : "",
            login:localStorage.getItem("user") !== null ? JSON.parse(localStorage.getItem("user")).login : "",
            password:localStorage.getItem("user") !== null ? JSON.parse(localStorage.getItem("user")).password : "",
        },
        cart:localStorage.getItem("cart") !== null ? JSON.parse(localStorage.getItem("cart")) : [],
        total:0
    },
    reducers:{

        loginAcc: (state,{payload}) => {
            state.user = payload
        },

        logOutAcc: (state,{payload}) => {
            state.user = {}
            localStorage.removeItem("user")
        },
        addCart: (state,{payload}) => {

            state.cart.find(item => item.id === payload.id && item.sizes === payload.sizes && item.img === item.img) ?
                state.cart = state.cart.map(item => item.id === payload.id && item.sizes === payload.sizes && item.img === item.img ? {...payload,count:item.count + 1} : item)
                :state.cart = [...state.cart,{...payload,count:1}]
            localStorage.setItem("cart",JSON.stringify([
                ...state.cart
            ]))

        },
        deleteCard: (state,{payload}) => {
            state.cart = state.cart.filter(item => item.id !== payload.id)

        },
        addCount:(state,{payload}) => {
            payload.count > 0 ? state.cart = state.cart.map(item => item.id == payload.id ? {...item,count: payload.count} : item) : state.cart = state.cart.filter(item => item.id !== payload.id)

        }
    }
})
export const {loginAcc,logOutAcc,addCart,deleteCard,addCount} = userSlice.actions
export default userSlice.reducer
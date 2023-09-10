import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import instance from "../../utils/instance";


export const getProducts = createAsyncThunk(
    "products/getProducts",
    async (filter, thunkAPI) => {
        try {
            const res = await instance(`/products`)
            return res.data
        } catch (error) {
            return thunkAPI.rejectWithValue(error)
        }
    }
)
export const updateProduct = createAsyncThunk(
    "products/updateProduct",
    async (product, thunkAPI) => {
           await instance.put(`/products/${product.id}`,product)
            return product
    }
)
export const deleteProduct = createAsyncThunk(
    "products/deleteProduct",
    async (id, thunkAPI) => {
           await instance.delete(`/products/${id}`)
            return id
    }
)
export const addProduct = createAsyncThunk(
    "products/addProduct",
    async (product, thunkAPI) => {
           const res = await instance.post(`/products`,product)
            return res.data
    }
)


const productsSlice = createSlice({
    name: "products",
    initialState: {
        data: [],
        status: '',
        error: '',
        idEnd:"",
        filter: {
            limit: 10,
            page: 1,
            country: '',
            year: '',
            genre: ''
        }
    },
    reducers: {

    },
    extraReducers: (builder) => {
        builder
            .addCase(getProducts.pending, (state) => {
                state.status = 'loading'
                state.error = ''
            })
            .addCase(getProducts.fulfilled, (state, {payload}) => {
                state.status = 'done'
                state.data = payload
                state.idEnd = payload[payload.length - 1].id
            })
            .addCase(getProducts.rejected, (state, {payload}) => {
                state.status = 'error'
                state.error = payload
            })
            .addCase(deleteProduct.pending, (state) => {
                state.status = 'loading'
                state.error = ''
            })
            .addCase(deleteProduct.fulfilled, (state, {payload}) => {
                state.status = 'done'
                state.data = state.data.filter(item => item.id !== payload)
            })
            .addCase(deleteProduct.rejected, (state, {payload}) => {
                state.status = 'error'
                state.error = payload
            })
            .addCase(updateProduct.pending, (state) => {
                state.status = 'loading'
                state.error = ''
            })
            .addCase(updateProduct.fulfilled, (state, {payload}) => {
                state.status = 'done'
                state.data = state.data.map(item => item.id === payload.id ? payload : item)
            })
            .addCase(updateProduct.rejected, (state, {payload}) => {
                state.status = 'error'
                state.error = payload
            })
            .addCase(addProduct.pending, (state) => {
                state.status = 'loading'
                state.error = ''
            })
            .addCase(addProduct.fulfilled, (state, {payload}) => {
                state.status = 'done'
                state.data.push(payload)
            })
            .addCase(addProduct.rejected, (state, {payload}) => {
                state.status = 'error'
                state.error = payload
            })
    }
})

export const {} = productsSlice.actions
export default productsSlice.reducer
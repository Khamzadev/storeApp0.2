import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import instance from "../../utils/instance";


export const getOneProducts = createAsyncThunk(
    "oneProducts/getOneProducts",
    async (id, thunkAPI) => {
        try {
            const res = await instance(`/products/${id}`)
            return res.data
        } catch (error) {
            return thunkAPI.rejectWithValue(error)
        }
    }
)


const oneProductsSlice = createSlice({
    name: "oneProducts",
    initialState: {
        data: [],
        status: '',
        error: '',
    },
    reducers: {

    },
    extraReducers: (builder) => {
        builder
            .addCase(getOneProducts.pending, (state) => {
                state.status = 'loading'
                state.error = ''
            })
            .addCase(getOneProducts.fulfilled, (state, {payload}) => {
                state.status = 'done'
                state.data = payload
            })
            .addCase(getOneProducts.rejected, (state, {payload}) => {
                state.status = 'error'
                state.error = payload
            })
    }
})

export const {} = oneProductsSlice.actions
export default oneProductsSlice.reducer
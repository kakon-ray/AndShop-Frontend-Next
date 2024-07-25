"use client"
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from 'react-toastify';



export const showProduct = createAsyncThunk('showProduct', async (args, { rejectWithValue }) => {
    const token = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')).token : null;
    const response = await fetch(`http://127.0.0.1:8000/api/specific/product/show/${args}`, {
        headers: {
            Authorization: 'Bearer' + ' ' + token,
        },
    });
    try {
        const result = await response.json()
        return result;

    } catch (error) {
        return rejectWithValue(error)
    }
})

export const createProduct = createAsyncThunk("createProduct", async (data, { rejectWithValue }) => {
    const token = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')).token : null;
    const response = await axios.post(
        'http://127.0.0.1:8000/api/product/create',
        data,
        {
            headers: {
                'Content-Type': 'multipart/form-data',
                Authorization: `Bearer ${token}`,
            },
        }
    );

    try {
        return response.data;
    } catch (error) {
        return rejectWithValue(error)
    }

})



const productDetail = createSlice({
    name: "productDetail",
    initialState: {
        products: [],
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder

            //   show product
            .addCase(showProduct.pending, (state) => {
                state.loading = true;
            })
            .addCase(showProduct.fulfilled, (state, action) => {
                state.loading = false;
                state.products = action.payload.products;
            })
            .addCase(showProduct.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })

            //   create product
            .addCase(createProduct.pending, (state) => {
                state.loading = true;
            })
            .addCase(createProduct.fulfilled, (state, action) => {
                state.loading = false;
                if(action.payload.success == true){
                    state.products.push(action.payload.product)
                    toast.success(action.payload.msg);
                }else{
                    toast.error(action.payload.msg);
                }
                
            })
            .addCase(createProduct.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
                toast.error('Failed to update User!');
            })

    },
})

export default productDetail.reducer;
"use client"
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


export const showCategory = createAsyncThunk('showCategory', async (_, { rejectWithValue }) => {
    const token = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')).token : null;
    const response = await fetch(`http://127.0.0.1:8000/api/category/show`, {
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


const categoryDetail = createSlice({
    name: "categoryDetail",
    initialState: {
        categories: [],
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder

            .addCase(showCategory.pending, (state) => {
                state.loading = true;
            })
            .addCase(showCategory.fulfilled, (state, action) => {
                state.loading = false;
                state.categories = action.payload.categories;
            })
            .addCase(showCategory.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })

    },
})

export default categoryDetail.reducer;
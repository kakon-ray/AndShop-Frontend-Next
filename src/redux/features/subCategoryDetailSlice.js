"use client"
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


export const showSubcategory = createAsyncThunk('showSubcategory', async (_, { rejectWithValue }) => {
    const token = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')).token : null;
    const response = await fetch(`http://127.0.0.1:8000/api/subcategory/show`, {
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


const subCategoryDetail = createSlice({
    name: "subCategoryDetail",
    initialState: {
        subcategories: [],
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder

            .addCase(showSubcategory.pending, (state) => {
                state.loading = true;
            })
            .addCase(showSubcategory.fulfilled, (state, action) => {
                state.loading = false;
                state.subcategories = action.payload.subcategories;
            })
            .addCase(showSubcategory.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })

    },
})

export default subCategoryDetail.reducer;
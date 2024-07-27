"use client"
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from 'react-toastify';



export const showUser = createAsyncThunk('showUser', async ( _, { rejectWithValue }) => {
    const token = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')).token : null;
    const userid = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')).id : null;
    const response = await fetch(`http://127.0.0.1:8000/api/user/show/${userid}`, {
        headers: {
            Authorization: 'Bearer' + ' ' + token,
        },
    });
    try {
        const result = await response.json()
        return result.user;
    } catch (error) {
        return rejectWithValue(error)
    }
})

export const updateUserSubmit = createAsyncThunk("updateUserSubmit", async (formData, { rejectWithValue }) => {
    const token = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')).token : null;
    const response = await axios.post(
        'http://127.0.0.1:8000/api/user/update',
        formData,
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


export const updateUserRoleRequestSubmit = createAsyncThunk("updateUserRoleRequestSubmit", async (formData, { rejectWithValue }) => {
    const token = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')).token : null;
    const response = await axios.post(
        'http://127.0.0.1:8000/api/user/role/request/submit',
        formData,
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

const userDetail = createSlice({
    name: "userDetail",
    initialState: {
        users: {},
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder

            //   show category
            .addCase(showUser.pending, (state) => {
                state.loading = true;
            })
            .addCase(showUser.fulfilled, (state, action) => {
                state.loading = false;
                state.users = action.payload;
            })
            .addCase(showUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })

            //   update user
            .addCase(updateUserSubmit.pending, (state) => {
                state.loading = true;
            })
            .addCase(updateUserSubmit.fulfilled, (state, action) => {
                state.loading = false;
                if(action.payload.success == true){
                    state.users = action.payload.user
                    toast.success(action.payload.msg);
                }else{
                    toast.error(action.payload.msg);
                }
                
            })
            .addCase(updateUserSubmit.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
                toast.error('Failed to update User!');
            })

            //   update updateUserRoleRequestSubmit
            .addCase(updateUserRoleRequestSubmit.pending, (state) => {
                state.loading = true;
            })
            .addCase(updateUserRoleRequestSubmit.fulfilled, (state, action) => {
                state.loading = false;
                if(action.payload.success == true){
                    state.users = action.payload.user
                    toast.success(action.payload.msg);
                }else{
                    toast.error(action.payload.msg);
                }
                
            })
            .addCase(updateUserRoleRequestSubmit.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
                toast.error('Failed to Request User!');
            })

    },
})

export default userDetail.reducer;
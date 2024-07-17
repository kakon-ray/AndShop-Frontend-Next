import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from 'react-toastify';


const user = JSON.parse(localStorage.getItem('user'));
const token = user?.token


export const showUser = createAsyncThunk('showUser', async (args, { rejectWithValue }) => {
    const response = await fetch(`http://127.0.0.1:8000/api/user/show/${args}`, {
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
        return response.data.user;
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

            //   update category
            .addCase(updateUserSubmit.pending, (state) => {
                state.loading = true;
            })
            .addCase(updateUserSubmit.fulfilled, (state, action) => {
                state.loading = false;
                state.users = action.payload
                toast.success('User update successfully!');
            })
            .addCase(updateUserSubmit.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
                toast.error('Failed to update User!');
            })

    },
})

export default userDetail.reducer;
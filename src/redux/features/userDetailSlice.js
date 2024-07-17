import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from 'react-toastify';

const user = JSON.parse(localStorage.getItem('user'));
const token = user?.token


export const showUser = createAsyncThunk('showCategory', async (args, { rejectWithValue }) => {
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

export const updateUser = createAsyncThunk("updateCategory", async (data, { rejectWithValue }) => {
    //   console.log(data)
    const response = await fetch(
        `http://127.0.0.1:8000/api/category/edit`,
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: 'Bearer' + ' ' + token,
            },
            body: JSON.stringify(data),
        }
    );

    try {
        const result = await response.json();
        return result;

    } catch (error) {
        return rejectWithValue(error)
    }


}
);


const userDetail = createSlice({
    name: "userDetail",
    initialState: {
        users: [],
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
            .addCase(updateUser.pending, (state) => {
                state.loading = true;
            })
            .addCase(updateUser.fulfilled, (state, action) => {
                console.log(action.payload.data)
                state.loading = false;
                state.users = action.payload
                toast.success('Category update successfully!');
            })
            .addCase(updateUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
                toast.error('Failed to update Category!');
            })

    },
})

export default userDetail.reducer;
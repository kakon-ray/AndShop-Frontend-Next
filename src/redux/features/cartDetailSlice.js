"use client";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from 'react-toastify';

const getTokenAndUserId = () => {
  const user = typeof window !== 'undefined' ? JSON.parse(localStorage.getItem('user')) : null;
  return {
    token: user ? user.token : null,
    userId: user ? user.id : null
  };
};

export const showCartList = createAsyncThunk(
  'showCartList',
  async (_, { rejectWithValue }) => {
    const { token, userId } = getTokenAndUserId();
    try {
      const response = await fetch(`http://127.0.0.1:8000/api/show/cartlist/${userId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const result = await response.json();
      return result;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const addCartList = createAsyncThunk(
  "addCartList",
  async (data, { rejectWithValue }) => {
    const { token } = getTokenAndUserId();
    try {
      const response = await axios.post(
        'http://127.0.0.1:8000/api/add/cartlist',
        data,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
            Authorization: `Bearer ${token}`,
          },
        }
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const deleteCartList = createAsyncThunk(
  "deleteCartList",
  async (id, { rejectWithValue }) => {
    const { token } = getTokenAndUserId();
    try {
      const response = await axios.delete(
        `http://127.0.0.1:8000/api/delete/cartlist/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const cartListDetail = createSlice({
  name: "cartListDetail",
  initialState: {
    cartlist: [],
    loading: false,
    successMessage: null,
    error: null,
  },
  reducers: {
    clearMessages: (state) => {
      state.successMessage = null;
      state.error = null;
    }
  },
  extraReducers: (builder) => {
    builder
      // showCartList
      .addCase(showCartList.pending, (state) => {
        state.loading = true;
      })
      .addCase(showCartList.fulfilled, (state, action) => {
        state.loading = false;
        state.cartlist = action.payload.cartlist;
      })
      .addCase(showCartList.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        toast.error(action.payload);
      })

      // addCartList
      .addCase(addCartList.pending, (state) => {
        state.loading = true;
        state.successMessage = null;
      })
      .addCase(addCartList.fulfilled, (state, action) => {
        state.loading = false;
        if (action.payload.success) {
          state.successMessage = action.payload.msg;
          state.cartlist.push(action.payload.cartlist);
          toast.success(action.payload.msg);
        } else {
          state.successMessage = action.payload.msg;
          toast.error(action.payload.msg);
        }
      })
      .addCase(addCartList.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        toast.error('Failed to add to cart!');
      })

      // deleteCartList
      .addCase(deleteCartList.pending, (state) => {
        state.loading = true;
      })
      .addCase(deleteCartList.fulfilled, (state, action) => {
        state.loading = false;
        if (action.payload.success) {
          state.cartlist = state.cartlist.filter((item) => item.id !== action.payload.id);
          toast.success(action.payload.msg);
        } else {
          toast.error(action.payload.msg);
        }
      })
      .addCase(deleteCartList.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        toast.error('Failed to delete from cart!');
      });
  },
});

export const { clearMessages } = cartListDetail.actions;

export default cartListDetail.reducer;

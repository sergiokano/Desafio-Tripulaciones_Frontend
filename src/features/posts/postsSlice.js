import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import postsService from "./postsService";

const initialState = {
  isError: false,
  isSuccess: false,
  isLoading: false,
  errorMessage: "",
  isRegistered: false,
  post: null,
};

export const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    reset: (state) => {
      state.isError = false;
      state.isSuccess = false;
      state.isLoading = false;
      state.errorMessage = "";
      state.post = null;
    },
  },
  extraReducers: (builder) => {
    builder

      .addCase(createPost.fulfilled, (state) => {
        state.isSuccess = true;
      })
      .addCase(createPost.rejected, (state) => {
        state.isError = true;
      })

      .addCase(getById.fulfilled, (state, action) => {
        state.isSuccess = true;
        state.post = action.payload.post;
      })

      .addCase(getById.rejected, (state) => {
        state.isError = true;
      });
  },
});

export const createPost = createAsyncThunk("posts/createPost", async (data) => {
  try {
    return await postsService.createPost(data);
  } catch (error) {
    console.error(error);
  }
});

export const getById = createAsyncThunk("posts/getById", async (data) => {
  try {
    return await postsService.getById(data);
  } catch (error) {
    console.error(error);
  }
});

export const { reset } = postsSlice.actions;
export default postsSlice.reducer;

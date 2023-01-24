import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import postsService from "./postsService";

const initialState = {
    isError: false,
    isSuccess: false,
    isLoading: false,
    errorMessage: "",
    isRegistered: false,
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
        },
    },
    extraReducers: (builder) => {
        builder.addCase(createPost.fulfilled, (state) => {
            state.isSuccess = true;
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

export const { reset } = postsSlice.actions;
export default postsSlice.reducer;

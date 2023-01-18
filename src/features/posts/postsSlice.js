import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import postsService from "./postsService";

const initialState = {
    posts: [],
    isLoading: false,
    isSuccess: false,
    isError: false,
    post: {},
    message: ""
};

export const createPost = createAsyncThunk("posts/", async (postData) => {
    try {
        return await postsService.createPost(postData);
    } catch (error) {
        console.error(error)
    }
});

export const postsSlice = createSlice({
    name: "posts",
    initialState,
    reducers: {
        reset: (state) => {
           
            state.isLoading = false;
            state.isSuccess = false;
            state.isError = false;
            state.message = "";
        },
    },
    extraReducers: (builder) => {
        builder
        
            .addCase(createPost.fulfilled, (state, action) => {
                state.posts = [action.payload, ...state.posts];
            })
            
    },

});


export const { reset, resetMessage } = postsSlice.actions;
export default postsSlice.reducer;



import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import postsService from "./postsService";

const initialState = {
    posts: [],
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
            state.posts = [];
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
            .addCase(getAllPosts.fulfilled, (state, action) => {
                state.posts = action.payload;
            })
            .addCase(getById.fulfilled, (state, action) => {
                state.isSuccess = true;
                state.post = action.payload.post;
            })
            .addCase(getById.rejected, (state) => {
                state.isError = true;
            })
            .addCase(addLike.fulfilled, (state, action) => {
                state.isError = false;
                state.post = action.payload.post;
            })
            .addCase(removeLike.fulfilled, (state, action) => {
                state.isError = false;
                state.post = action.payload.post;
            })
            .addCase(createComment.fulfilled, (state, action) => {
                state.isError = false;
                state.post = action.payload;
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

export const createComment = createAsyncThunk(
    "posts/createComment",
    async (data) => {
        try {
            return await postsService.createComment(data);
        } catch (error) {
            console.error(error);
        }
    }
);

export const getAllPosts = createAsyncThunk("posts/getAllPosts", async () => {
    try {
        return await postsService.getAllPosts();
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
export const addLike = createAsyncThunk("posts/addLike", async (_id) => {
    try {
        return await postsService.addLike(_id);
    } catch (error) {
        console.error(error);
    }
});

export const removeLike = createAsyncThunk("posts/removeLike", async (_id) => {
    try {
        return await postsService.removeLike(_id);
    } catch (error) {
        console.error(error);
    }
});

export const { reset } = postsSlice.actions;
export default postsSlice.reducer;

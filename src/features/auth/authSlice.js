import { createSlice } from "@reduxjs/toolkit";

const token = JSON.parse(localStorage.getItem("token"));

const initialState = {
    user: null,
    token: token ? token : null,
    isError: false,
    isSuccess: false,
    isLoading: false,
    errorMessage: "",
};

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        reset: (state) => {
            state.isError = false;
            state.isSuccess = false;
            state.isLoading = false;
            state.errorMessage = "";
        },
    },
    extraReducers: (builder) => {},
});

export const { reset } = authSlice.actions;

export default authSlice.reducer;

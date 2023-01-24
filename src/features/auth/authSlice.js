import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import authService from "./authService";

const token = JSON.parse(localStorage.getItem("token"));

const initialState = {
    user: null,
    token: token ? token : null,
    isError: false,
    isSuccess: false,
    isLoading: false,
    errorMessage: "",
    isRegistered: false,
};

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        reset: (state) => {
            state.isError = false;
            state.isSuccess = false;
            state.isLoading = false;
            state.isRegistered = false;
            state.errorMessage = "";
            state.errorIcon = "";
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(login.fulfilled, (state, action) => {
                state.user = action.payload;
                state.isSuccess = true;
            })
            .addCase(login.rejected, (state, action) => {
                state.isError = true;
                state.message = action.payload;
            })
            .addCase(logout.fulfilled, (state) => {
                state.user = null;
            })
            .addCase(registerUser.fulfilled, (state) => {
                state.isSuccess = true;
                state.isError = false;
                state.isLoading = false;
                state.isRegistered = true;
            })
            .addCase(registerUser.rejected, (state, action) => {
                state.isError = true;
                state.isLoading = false;
                state.errorMessage = action.payload.errors[0].msg;
                state.errorIcon = action.payload.errors[0].param;
            })
            .addCase(registerAssociation.fulfilled, (state) => {
                state.isSuccess = true;
                state.isError = false;
                state.isLoading = false;
            })
            .addCase(registerAssociation.rejected, (state, action) => {
                state.isError = true;
                state.isLoading = false;
                state.errorMessage = action.payload.errors[0].msg;
                state.errorIcon = action.payload.errors[0].param;
            });
    },
});

export const login = createAsyncThunk(
    "auth/loginUser",
    async (user, thunkAPI) => {
        try {
            return await authService.login(user);
        } catch (error) {
            console.error(error);
            return thunkAPI.rejectWithValue(error.response.data);
        }
    }
);

export const logout = createAsyncThunk("auth/logoutUser", async () => {
    try {
        return await authService.logout();
    } catch (error) {
        console.error(error);
    }
});

export const registerUser = createAsyncThunk(
    "auth/registerUser",
    async (user, thunkAPI) => {
        try {
            return await authService.registerUser(user);
        } catch (error) {
            console.error(error);
            return thunkAPI.rejectWithValue(error.response.data);
        }
    }
);
export const registerAssociation = createAsyncThunk(
    "auth/registerAssociation",
    async (user, thunkAPI) => {
        try {
            return await authService.registerAssociation(user);
        } catch (error) {
            console.error(error);
            return thunkAPI.rejectWithValue(error.response.data);
        }
    }
);

export const { reset } = authSlice.actions;
export default authSlice.reducer;

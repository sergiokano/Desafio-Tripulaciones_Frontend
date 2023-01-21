import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import authService from "./authService";

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
          .addCase(register.fulfilled, (state, action) => {
       

            state.message = action.payload.message;
          })
          .addCase(register.rejected, (state, action) => {
            state.isError = true;
    
            state.message = action.payload;
          })
          }
        })
      

    export const login = createAsyncThunk("auth/loginUser", async (user) => {
      try {
        return await authService.login(user);
      } catch (error) {
        console.error(error);
      }
    });
    
    
    export const logout = createAsyncThunk("auth/logoutUser", async () => {
      try {
        return await authService.logout();
      } catch (error) {
        console.error(error);
      }
    });
    

    export const register = createAsyncThunk("auth/createUser", async (user) => {
      try {
        return await authService.register(user);
      } catch (error) {
        console.error(error);
      }
    });
    

    
    export const { reset } = authSlice.actions;
    export default authSlice.reducer;
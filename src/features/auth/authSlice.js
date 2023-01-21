import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import authService from "./authService";

const user = JSON.parse(localStorage.getItem("user"));
const initialState = {
  user: user ? user : null,
  isError: false,
  isSuccess: false,
  isSuccessLogout: false,

  msg: "",
};

export const register = createAsyncThunk("auth/register", async (user) => {
    try {
        return await authService.register(user);
    } catch (error) {
        console.error(error);
    }
});

export const login = createAsyncThunk("auth/login", async (user) => {
    try {
        return await authService.login(user);
    } catch (error) {
        console.error(error);
    }
});
export const logout = createAsyncThunk("auth/logout", async () => {
    try {
      return await authService.logout();
    } catch (error) {
      console.error(error);
    }
  });
  export const getInfo = createAsyncThunk("auth/getInfo", async () => {
    try {
        return await authService.getInfo();
    } catch (error) {
        console.error(error)
    }
  });

export const authSlice = createSlice({

    name: "auth",
    initialState,
    reducers: {
        reset: (state) => {
    
          state.isError = false;
          
          state.isSuccess = false;
          state.isSuccessLogout = false;
    
          state.message = "";
          
          },
      },

      extraReducers: (builder) => {
        builder
          .addCase(login.fulfilled, (state, action) => {
            state.user = action.payload;
            state.isSuccess = true;
            state.msg = action.payload.msg;
          })
          .addCase(getInfo.fulfilled, (state, action) => {
            state.user ={...state.user, user: action.payload.user};
            state.isSuccess = true;
            state.msg = action.payload.msg;
          })
          .addCase(login.rejected, (state, action) => {
            state.isError = true;
    
            state.msg = action.payload;
          })
          .addCase(logout.fulfilled, (state,action) => {
            state.user = null;
            state.isSuccessLogout = true;
    
            state.msg = action.payload.msg;
          })
    
          .addCase(register.fulfilled, (state, action) => {
            state.isSuccess = true;
    
            state.msg = action.payload.msg;
          })
          
          .addCase(register.rejected, (state, action) => {
            state.isError = true;
    
            state.msg = action.payload;
          });
      },
    });
    export const { reset } = authSlice.actions;
    export default authSlice.reducer;
    
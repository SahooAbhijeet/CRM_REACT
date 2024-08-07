import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../../config/axiosInstance";
import toast from "react-hot-toast";

const initialState = {
    role: localStorage.getItem('role') || '',
    data: JSON.parse(localStorage.getItem('data')) || undefined,
    token: localStorage.getItem('token') || undefined,
    isLoggedIn: localStorage.getItem('isLoggedIn') || false
}

export const login = createAsyncThunk('auth/login', async(data) => { // async thunk is only way of calling asynchronously a function . It takes a string and a callback func. that mainly does the api call
    try {
        const response = axiosInstance.post('auth/signin', data);
        toast.promise(response, {
            loading: 'Submitting form',
            success: 'Successfully logged in',
            error: 'Something went wrong'
        })
        return await response;
    } catch (error) {
        console.log(error);
    }
});

export const signup = createAsyncThunk('auth/signup', async(data) => { 
    try {
        const response = axiosInstance.post('auth/signup', data);
        toast.promise(response, {
            loading: 'Submitting form',
            success: 'Successfully signed up',
            error: 'Something went wrong'
        })
        return await response;
    } catch (error) {
        console.log("error", error);
    }
});

const AuthSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logout: (state) => {
            localStorage.clear();
            state.role = '';
            state.isLoggedIn = false;
            state.data = '';
            state.token = '';
        }
    },
    extraReducers: (builder) => { // extrareducers taks the function builder and here we have to do builder.addcase which as the async thunk is nothing more vthan promise so here if that promise got fulfilled what action we have to do or if it gets rejected what action we have to do . If you observe clearly it nothing more the reducer function.
        builder.addCase(login.fulfilled, (state,action) => {
            console.log("action", action);
            if(!action.payload) return;
            state.isLoggedIn = (action.payload?.data?.token != undefined);
            state.data = action.payload?.data?.userData;
            state.token = action.payload?.data?.token;
            state.role = action.payload?.data?.userData?.userType;
            localStorage.setItem("role",action.payload?.data?.userData?.userType);
            localStorage.setItem("isLoggedIn",(action.payload?.data?.token != undefined));
            localStorage.setItem("data",JSON.stringify(action.payload?.data?.userData));
            localStorage.setItem("token",action.payload?.data?.token);
        });
    }
});

export const { logout } = AuthSlice.actions;
export default AuthSlice.reducer;
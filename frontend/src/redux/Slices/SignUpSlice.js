import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// First, create the thunk
export const SignUpAsync = createAsyncThunk("users/signup", async ({email, password}) => {
  try {

    console.log(" email - " ,email )
    console.log(" password - " , password )

    const response = await axios.post("http://localhost:8000/users/signup/" , {
        email: email,
        password: password
    } );

    // console.log("13 -" , response )

    return response.data;

  } catch (error) {
    console.log(error);
  }
});

const initialState = { data: [], isLoading: false, isError: false };

const signUpSlice = createSlice({
  name: "signUp",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(SignUpAsync.pending, (state, action) => {
        state.isLoader = true;
      })
      .addCase(SignUpAsync.fulfilled, (state, action) => {
        state.isLoader = false;
        state.data = action.payload;
        alert(action.payload.msg)

      })

      .addCase(SignUpAsync.rejected, (state, action) => {
        state.isLoader = false;
        state.isError = true;
      });
  },
});

export default signUpSlice.reducer;

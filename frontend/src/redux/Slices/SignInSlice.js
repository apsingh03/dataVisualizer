import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// First, create the thunk
export const SignInAsync = createAsyncThunk(
  "users/signup",
  async ({ email, password }) => {
    try {
      //   console.log(" email - " ,email )
      //   console.log(" password - " , password )

      const response = await axios.post("http://localhost:8000/users/login/", {
        email: email,
        password: password,
      });

      // console.log("13 -" , response )

      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);

const initialState = {
  data: [],
  isLoading: false,
  isError: false,
  loggedAdminInfo: {
    user:
      sessionStorage.getItem("userLogged") !== null
        ? JSON.parse(sessionStorage.getItem("userLogged"))
        : "",
  },
};

const signInSlice = createSlice({
  name: "signin",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(SignInAsync.pending, (state, action) => {
        state.isLoader = true;
      })
      .addCase(SignInAsync.fulfilled, (state, action) => {
        state.isLoader = false;
        state.data = action.payload;
        console.log(action.payload);

        try {

            if (action.payload.msg === "SignIn Successfull") {

                const {email , name ,id} = action.payload.data[0];

                let user = {
                    id: id,
                    email : email,
                    name: name,
                }
    
                const convert = JSON.stringify(user);
                sessionStorage.setItem("userLogged", convert);

            }
          
            
        } catch (error) {
            
        }

      })

      .addCase(SignInAsync.rejected, (state, action) => {
        state.isLoader = false;
        state.isError = true;
      });
  },
});

export default signInSlice.reducer;

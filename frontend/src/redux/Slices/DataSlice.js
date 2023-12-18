import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { backendUrl } from "./Urls";


// First, create the thunk
export const fetchDataAsync = createAsyncThunk("data/getData", async () => {
  try {
    const response = await axios.get( backendUrl.data );

    // console.log("13 -" , response )

    return response.data;
  } catch (error) {
    console.log(error);
  }
});



const initialState = { data: [], isLoading: false, isError: false };

const getVisualizationData = createSlice({
  name: "data",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(fetchDataAsync.pending, (state, action) => {
        state.isLoader = true;
      })
      .addCase(fetchDataAsync.fulfilled, (state, action) => {
        state.isLoader = false;
        state.data = action.payload;
      })

      .addCase(fetchDataAsync.rejected, (state, action) => {
        state.isLoader = false;
        state.isError = true;
      });
  },
});

export default getVisualizationData.reducer;

import { configureStore } from '@reduxjs/toolkit'

import getVisualizationData from "./Slices/DataSlice"
import signUpSlice from "./Slices/SignUpSlice"
import SignInSlice from './Slices/SignInSlice';


export const store = configureStore({
    reducer: {
      data : getVisualizationData,
      signup : signUpSlice,
      signin : SignInSlice,
     
    },

  });
  
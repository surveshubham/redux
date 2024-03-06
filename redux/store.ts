import { configureStore } from "@reduxjs/toolkit";
import  userDetail from "./slices/userDetailSlice";

export const store = configureStore({
    reducer: {
      app : userDetail,      
    },
});


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
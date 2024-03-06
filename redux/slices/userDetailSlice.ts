import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

export const fetchUser = createAsyncThunk("user/getAllUsers", async (thunkapi) => {
  const res = await fetch(`https://dummyjson.com/users`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      // expiresInMins: 60, // optional
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },

  });

  const respo = await res.json();
  return respo.users
})


export interface UserState {
  user: Array<any>
  loading : boolean
}

const initialState: UserState = {
  user: [],
  loading : true,
}

export const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchUser.fulfilled , (state , action)=>{
         state.user.push(...action.payload)
         state.loading = false
    })
  }
})

// Action creators are generated for each case reducer function
export default userSlice.reducer
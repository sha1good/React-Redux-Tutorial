import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    userInfo: {
      name: "Adebisi",
      email: "adebisisheriff572@gmail.com",
    },
    error: null,
    pending: null,
  },
   reducers :{
       updateStart : (state) =>{
         state.pending = true;
       },
       updateSuccess : (state, actions) =>{
          state.pending = false;
          state.userInfo = actions.payload;
       },
       updateError :  (state) =>{
          state.error  = true;
       },
       remove : (state) =>{
            state.userInfo = {}
       }
   }
});

export const { updateStart, updateSuccess, updateError, remove } = userSlice.actions;

export default userSlice.reducer;

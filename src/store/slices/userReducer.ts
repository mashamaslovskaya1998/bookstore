import { createSlice } from "@reduxjs/toolkit";
import { IUserStore } from "../../types";

const initialState: IUserStore = {
  isAuth: false,
  email: undefined,
  name: undefined,
};
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.isAuth = true;
      state.email = action.payload;
    },
    setUserName: (state, action) => {
      state.name = action.payload;
    },
    unsetUser: (state) => {
      state.isAuth = false;
      state.email = undefined;
    },
  },
});

export const { setUser, unsetUser, setUserName } = userSlice.actions;
export default userSlice.reducer;

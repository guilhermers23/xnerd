import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { IUser } from "../../types/IUser";

type userState = { user: IUser | null };
const initialState: userState = { user: null };

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<IUser | null>) => {
      state.user = action.payload;
    },
    logout: (state) => {
      state.user = null;
    }
  }
});

export const { setUser, logout } = userSlice.actions;
export default userSlice.reducer;

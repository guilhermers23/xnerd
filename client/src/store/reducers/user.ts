import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

type userState = { user: IUser | null };
const initialState: userState = { user: null };

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action: PayloadAction<IUser | null>) => {
      state.user = action.payload;
    },
    logout: (state) => {
      state.user = null;
    }
  }
});

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;

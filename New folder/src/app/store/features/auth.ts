import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

// Define a type for the slice state
interface UserState {
  user: {
    email: string;
    number: string;
    name: string;
    access_token: string;
  };
  isLoading: boolean;
  isError: boolean;
}

// Define the initial state using that type
const initialState: UserState = {
  user:
    typeof window !== "undefined"
      ? JSON.parse(localStorage.getItem("user") as any) || null
      : null,
  isLoading: false,
  isError: false,
};

export const userSlice = createSlice({
  name: "user",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    STARTLOGING: (state) => {
      state.user = null as any;
      state.isLoading = true;
      state.isError = false;
    },

    // Use the PayloadAction type to declare the contents of `action.payload`
    SUCCESSLOGIN: (state, action: PayloadAction<UserState>) => {
      state.user = action.payload as any;
      state.isLoading = false;
      state.isError = false;
      localStorage.setItem("user", JSON.stringify(action.payload) as any);
    },
    FAILURELOGIN: (state) => {
      state.user = null as any;
      state.isLoading = false;
      state.isError = true;
    },
    LOGOUT: (state) => {
      state.user = null as any;
      state.isLoading = false;
      state.isError = false;
      localStorage.removeItem("user");
    },
  },
});

export const { STARTLOGING, SUCCESSLOGIN, FAILURELOGIN, LOGOUT } =
  userSlice.actions;

export const selectCount = (state: RootState) => state.users;

export default userSlice.reducer;

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currentUser: null,
  error: null,
  loading: false,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    StoreUserStart: (state) => {
      state.loading = true;
    },
    StoreUserSuccess: (state, action) => {
      state.currentUser = action.payload;
      state.loading = false;
      state.error = null;
    },
    StoreUserFailure: (state, action) => {
      state.currentUser = null;
      state.error = action.payload;
      state.loading = false;
    },
    updateUserStart: (state) => {
      state.loading = true;
    },
    updateUserSuccess: (state, action) => {
      state.currentUser = action.payload;
      state.loading = false;
      state.error = false;
    },
    updateUserFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    signOutUserStart: (state) => {
      state.loading = true;
    },
    signOutUserSuccess: (state) => {
      state.currentUser = null;
      state.loading = false;
      state.error = null;
    },
    signOutUserFailure: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },

    FollowUserStart: (state) => {
      state.loading = true;
    },
    FollowUserSuccess: (state) => {
      state.currentUser = null;
      state.loading = false;
      state.error = null;
    },
    FollowUserFailure: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
  },
});

export const {
  StoreUserStart,
  StoreUserSuccess,
  StoreUserFailure,
  signOutUserStart,
  signOutUserSuccess,
  signOutUserFailure,
  updateUserStart,
  updateUserSuccess,
  updateUserFailure,
  FollowUserStart,
  FollowUserSuccess,
  FollowUserFailure,
} = userSlice.actions;

export default userSlice.reducer;

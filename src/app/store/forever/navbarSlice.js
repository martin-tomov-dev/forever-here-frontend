import { createSlice } from '@reduxjs/toolkit';

const navbarSlice = createSlice({
  name: 'navbar',
  initialState: {
    open: true,
    mobileOpen: false,
  },
  reducers: {
    navbarToggleMobile: (state, action) => {
      state.mobileOpen = !state.mobileOpen;
    },
    navbarCloseMobile: (state, action) => {
      state.mobileOpen = false;
    },
  },
});

export const {
  navbarToggleMobile,
  navbarCloseMobile,
} = navbarSlice.actions;

export const selectForeverNavbar = ({ forever }) => forever.navbar;

export default navbarSlice.reducer;

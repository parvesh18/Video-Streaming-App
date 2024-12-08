import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "app",
  initialState: {
    isMenuOpen: true,
    searchQuery: "",
    category: "",
  },
  reducers: {
    toggleMenu: (state) => {
      state.isMenuOpen = !state.isMenuOpen;
    },
    searchQuery: (state, action) => {
      state.searchQuery = action.payload;
    },
    category: (state, action) => {
      state.category = action.payload;
    },
  },
});

export const { toggleMenu, searchQuery, category } = appSlice.actions;

export default appSlice.reducer;

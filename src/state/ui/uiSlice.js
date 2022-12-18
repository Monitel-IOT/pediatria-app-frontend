import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  showResponseModal: false,
};

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    openResponseModal: (state) => {
      state.showResponseModal = true;
    },
    closeResponseModal: (state) => {
      state.showResponseModal = false;
    },
  },
});

export const {
  openResponseModal,
  closeResponseModal,
} = uiSlice.actions;
export default uiSlice.reducer;

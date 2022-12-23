import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  showResponseModal: false,
  showLoginErrorAlert: false,
  showLoginSuccessAlert: false,
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
    openLoginErrorAlert: (state) => {
      state.showLoginErrorAlert = true;
    },
    closeLoginErrorAlert: (state) => {
      state.showLoginErrorAlert = false;
    },
    openLoginSuccessAlert: (state) => {
      state.showLoginSuccessAlert = true;
    },
    closeLoginSuccessAlert: (state) => {
      state.showLoginSuccessAlert = false;
    },
  },
});

export const {
  openResponseModal,
  closeResponseModal,
  openLoginErrorAlert,
  closeLoginErrorAlert,
  openLoginSuccessAlert,
  closeLoginSuccessAlert,
} = uiSlice.actions;
export default uiSlice.reducer;

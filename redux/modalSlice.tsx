import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  signupModalOpen: false,
}

interface RootState {
  modals: {
    signupModalOpen: boolean;
  };
}

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    handleSignupModal: (state) => {
      state.signupModalOpen = !state.signupModalOpen
    },
    openSignupModal: (state) => {
      state.signupModalOpen = true
    },
    closeSignupModal: (state) => {
      state.signupModalOpen = false
    },
  }
});

export const { handleSignupModal } = modalSlice.actions

export default modalSlice.reducer
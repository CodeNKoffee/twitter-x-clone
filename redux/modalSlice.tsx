import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  signupModalOpen: false,
  loginModalOpen: false,
}

interface RootState {
  modals: {
    signupModalOpen: boolean;
    loginModalOpen: boolean;
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
    handleLoginModal: (state) => {
      state.loginModalOpen = !state.loginModalOpen
    },
    openLoginModal: (state) => {
      state.loginModalOpen = true
    },
    closeLoginModal: (state) => {
      state.loginModalOpen = false
    },
  }
});

export const { handleSignupModal, handleLoginModal } = modalSlice.actions

export default modalSlice.reducer
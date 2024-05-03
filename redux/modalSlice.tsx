import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  signupModalOpen: false,
  loginModalOpen: false,
  commentModalOpen: false,

  commentTweetDetails: {
    id: null,
    tweet: null,
    photoUrl: null,
    name: null, 
    username: null,
  }
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
    // openSignupModal: (state) => {
    //   state.signupModalOpen = true
    // },
    // closeSignupModal: (state) => {
    //   state.signupModalOpen = false
    // },
    handleLoginModal: (state) => {
      state.loginModalOpen = !state.loginModalOpen
    },
    // openLoginModal: (state) => {
    //   state.loginModalOpen = true
    // },
    // closeLoginModal: (state) => {
    //   state.loginModalOpen = false
    // },
    handleCommentModal: (state) => {
      state.loginModalOpen = !state.commentModalOpen
    },
    // openCommentModal: (state) => {
    //   state.commentModalOpen = true
    // },
    // closeCommentModal: (state) => {
    //   state.commentModalOpen = false
    // },
    setCommentTweet: (state, action) => {
      state.commentTweetDetails.username = action.payload.username,
      state.commentTweetDetails.name = action.payload.name,
      state.commentTweetDetails.id = action.payload.id,
      state.commentTweetDetails.photoUrl = action.payload.photoUrl
      state.commentTweetDetails.tweet = action.payload.tweet
  }
  }
});

export const { handleSignupModal, handleLoginModal, handleCommentModal, setCommentTweet } = modalSlice.actions

export default modalSlice.reducer
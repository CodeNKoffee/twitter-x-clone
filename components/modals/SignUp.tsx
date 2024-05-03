import { handleSignupModal } from "@/redux/modalSlice";
import { RootState } from "@/redux/store";
import Modal from "@mui/material/Modal";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function SignUp() {
  const isOpen = useSelector((state: RootState) => state.modals.signupModalOpen);
  const dispatch = useDispatch();

  return (
    <>
      <button 
        className="rounded-full bg-white text-black w-[160px] h-[40px] hover:bg-[#CBD2D7]"
        onClick={() => dispatch(handleSignupModal())}
      >
        Sign Up
      </button>

      <Modal
        open={isOpen}
        onClose={() => dispatch(handleSignupModal())}
        className="flex justify-center items-center"
      >
        <div className="w-[400px] h-[200px] bg-white">
          Signup over here
        </div>
      </Modal>
    </>
  )
};

import Modal from "@mui/material/Modal";
import { useState } from "react";

export default function SignUp() {
  const [isOpen, setIsOpen] = useState(false);
  const handleModal = () => setIsOpen(!isOpen)
  return (
    <>
      <button 
        className="rounded-full bg-white text-black w-[160px] h-[40px] hover:bg-[#CBD2D7]"
        onClick={handleModal}
      >
        Sign Up
      </button>

      <Modal
        open={isOpen}
        onClose={handleModal}
        className="flex justify-center items-center"
      >
        <div className="w-[400px] h-[200px] bg-white">
          Signup over here
        </div>
      </Modal>
    </>
  )
};

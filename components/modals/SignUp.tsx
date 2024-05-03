import { handleSignupModal } from "@/redux/modalSlice";
import { RootState } from "@/redux/store";
import Modal from "@mui/material/Modal";
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
        <div className="w-[90%] h-[600px] bg-black text-white md:w-[600px] border border-gray-700 rounded-lg flex flex-col items-center">
          <div className="w-[90%] mt-8 flex flex-col">
            <button className="bg-white text-black w-full font-bold text-lg p-2 rounded-md">Sign In as Guest</button>
            <h1 className="text-center mt-4 font-bold text-lg">or</h1>
            <h1 className="mt-4 font-bold text-4xl text-center">Create your Account</h1>
            <input className="h-10 rounded-md bg-transparent border border-gray-700 p-6 mt-8" placeholder="Full Name" type="text" />
            <input className="h-10 rounded-md bg-transparent border border-gray-700 p-6 mt-8" placeholder="Email" type="email" />
            <input className="h-10 rounded-md bg-transparent border border-gray-700 p-6 mt-8" placeholder="Password" type="password" />
            <button className="bg-white text-black w-full font-bold text-lg p-2 mt-8 rounded-md">Create account</button>
          </div>
        </div>
      </Modal>
    </>
  )
};

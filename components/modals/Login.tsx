import { handleLoginModal } from "@/redux/modalSlice";
import { RootState } from "@/redux/store";
import Modal from "@mui/material/Modal";
import { useDispatch, useSelector } from "react-redux";

export default function Login() {
  const isOpen = useSelector((state: RootState) => state.modals.loginModalOpen);
  const dispatch = useDispatch();

  return (
    <>
      <button 
        className="border border-white rounded-full w-[160px] h-[40px] bg-transparent text-white hover:bg-[#CBD2D7]"
        onClick={() => dispatch(handleLoginModal())}
      >
        Log In
      </button>

      <Modal
        open={isOpen}
        onClose={() => dispatch(handleLoginModal())}
        className="flex justify-center items-center"
      >
        <div className="w-[90%] h-[600px] bg-black text-white md:w-[600px] border border-gray-700 rounded-lg flex flex-col items-center">
          <div className="w-[90%] mt-8 flex flex-col">
            <h1 className="mt-4 font-bold text-4xl text-center">Sign in into your account</h1>
            <input className="h-10 rounded-md bg-transparent border border-gray-700 p-6 mt-8" placeholder="Email" type="email" />
            <input className="h-10 rounded-md bg-transparent border border-gray-700 p-6 mt-8" placeholder="Password" type="password" />
            <button className="bg-white text-black w-full font-bold text-lg p-2 mt-8 rounded-md">Sign In</button>
            <h1 className="text-center mt-4 font-bold text-lg">or</h1>
            <button className="bg-white text-black w-full font-bold text-lg p-2 mt-4 rounded-md">Sign In as Guest</button>
          </div>
        </div>
      </Modal>
    </>
  )
};

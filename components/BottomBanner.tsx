import Login from "./modals/Login";
import SignUp from "./modals/SignUp";

export default function BottomBanner() {
  return (
    <div className="fixed bottom-0 xl:space-x-[200px] w-full h-[80px] bg-[#1D9BF0] flex justify-center items-center">
      <div className="hidden xl:inline text-white">
        <h1 className="text-2xl font-bold">Don't miss what's happening</h1>
        <span className="text-[18px] font-normal">People on Twitter are the first to know</span>
      </div>
      <div className="flex space-x-3 items-center">
        <Login />
        <SignUp />
      </div>
    </div>
  )
};

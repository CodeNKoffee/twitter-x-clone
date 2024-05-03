export default function BottomBanner() {
  return (
    <div className="fixed bottom-0 xl:space-x-[200px] w-full h-[80px] bg-[#1D9BF0] flex justify-center items-center">
      <div className="hidden xl:inline text-white">
        <h1 className="text-2xl font-bold">Don't miss what's happening</h1>
        <span className="text-[18px] font-normal">People on Twitter are the first to know</span>
      </div>
      <div className="flex space-x-3 items-center">
        <button className="border border-white rounded-full w-[160px] h-[40px] bg-transparent text-white hover:bg-[#CBD2D7]">
          Log In
        </button>
        <button className="rounded-full bg-white text-black w-[160px] h-[40px] hover:bg-[#CBD2D7]">
          Sign Up
        </button>
      </div>
    </div>
  )
};

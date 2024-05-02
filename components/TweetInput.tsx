import { CalendarIcon, ChartBarIcon, EmojiHappyIcon, LocationMarkerIcon, PhotographIcon } from "@heroicons/react/outline";

export default function TweetInput() {
  return (
    <div className="flex space-x-3 p-3 borer-b border-gray-700">
      <img 
        className="w-11 h-11 rounded-full object-cover"
        src="/public/assets/kylie.png"
        alt="Pfp" 
      />
      <div className="w-full">
        <textarea 
          placeholder="What's on your mind?"
          className="bg-transparent resize-none outline-none min-h-[50px] text-lg"
        />
        <div className="flex justify-between border-t border-gray-700 pt-4">
          <div className="flex space-x-0">
            <div className="icons__animation">
              <PhotographIcon className="h-[22px] text-[#1D9BF0]" />
            </div>
            <div className="icons__animation">
              <ChartBarIcon className="h-[22px] text-[#1D9BF0]" />
            </div>
            <div className="icons__animation">
              <EmojiHappyIcon className="h-[22px] text-[#1D9BF0]" />
            </div>
            <div className="icons__animation">
              <CalendarIcon className="h-[22px] text-[#1D9BF0]" />
            </div>
            <div className="icons__animation">
              <LocationMarkerIcon className="h-[22px] text-[#1D9BF0]" />
            </div>
          </div>
          <button className="bg-[#1D9BF0] rounded-full px-4 py-1.5 font-bold">
            Tweet
          </button>
        </div>
      </div>
    </div>
  )
};

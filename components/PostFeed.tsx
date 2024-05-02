import Tweet from "./Tweet";
import TweetInput from "./TweetInput";

export default function PostFeed() {
  return (
    <div className="sm:ml-20 xl:ml-96 max-w-2xl flex-grow border-x-gray-700">
      <div className="sticky top-0 z-50 px-3 py-2 text-lg sm:text-xl font-bold border-b border-gray-700">
        Home
      </div>
      <TweetInput />
      <Tweet />
    </div>
  )
};

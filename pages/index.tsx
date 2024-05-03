import Image from "next/image";
import { Inter } from "next/font/google";
import Sidebar from "@/components/Sidebar";
import PostFeed from "@/components/PostFeed";
import Trending from "@/components/Trending";
import BottomBanner from "@/components/BottomBanner";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <div className="bg-black max-w-[1400px] min-h-screen text-[#E7E9EA] mx-auto flex">
        <Sidebar />
        <PostFeed />
        <Trending />
      </div>
      <BottomBanner />
    </div>
  );
}

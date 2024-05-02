import Image from "next/image";
import { Inter } from "next/font/google";
import Sidebar from "@/components/Sidebar";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="bg-black max-w-[1400px] min-h-screen text-[#E7E9EA] mx-auto">
      <Sidebar />
      {/* <PostsFeed />
      <Trending /> */}
    </div>
  );
}

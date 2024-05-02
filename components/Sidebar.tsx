import { sidebarLinks } from "@/constants";
import { SidebarLinkProps } from "@/types";
import { 
  HomeIcon, 
  HashtagIcon,
  BookmarkIcon,
  ClipboardListIcon,
  UserIcon,
  BellIcon, 
  InboxIcon,
  DotsCircleHorizontalIcon,
} from "@heroicons/react/outline";
import Image from "next/image";
import TwitterLogo from "@/public/assets/twitter-logo.png";

export default function Sidebar() {
  return (
    <div className="fixed hidden h-full md:flex flex-col">
      <nav className="h-full marker:xl:space-y-1.5">
        {/* {sidebarLinks.map((sidebarLink, index) => (
          <SidebarLink
            key={index}
            text={sidebarLink.text}
            Icon={sidebarLink.Icon}
          />
        )} */}
        <div className="py-3 xl:p-3 flex xl:justify-start justify-center items-center">
          <Image 
            src={TwitterLogo}
            alt="White Twitter Logo"
            width={34}
            height={34}
          />
        </div>
        <SidebarLink text="Home" Icon={HomeIcon} />
        <SidebarLink text="Explore" Icon={HashtagIcon} />
        <SidebarLink text="Notifications" Icon={BellIcon} />
        <SidebarLink text="Messages" Icon={InboxIcon} />
        <SidebarLink text="Bookmarks" Icon={BookmarkIcon} />
        <SidebarLink text="Profile" Icon={UserIcon} />
        <SidebarLink text="More" Icon={DotsCircleHorizontalIcon} />
        <button className="hidden xl:inline bg-[#1D9BF0] rounded-full h-[52px] mt-2 w-[200px] text-lg font-bold">
          Tweet 
        </button>
        <div className="absolute bottom-0">
          User
        </div>
      </nav>
    </div>
  )
};

function SidebarLink({ text, Icon }: SidebarLinkProps) {
  return (
    <li className="hover__animation text-xl mb-6 flex xl:justify-start justify-center items-center space-x-3">
      <Icon className="h-7" />
      <span className="hidden xl:inline">{text}</span>
    </li>
  )
}
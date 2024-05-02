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
    <div className="fixed hidden md:flex flex-col">
      <div className="py-3">
        <Image 
          src={TwitterLogo}
          alt="White Twitter Logo"
          width={34}
          height={34}
        />
      </div>
      <nav>
        {/* {sidebarLinks.map((sidebarLink, index) => (
          <SidebarLink
            key={index}
            text={sidebarLink.text}
            Icon={sidebarLink.Icon}
          />
        )} */}
        <SidebarLink text="Home" Icon={HomeIcon} />
        <SidebarLink text="Explore" Icon={HashtagIcon} />
        <SidebarLink text="Notifications" Icon={BellIcon} />
        <SidebarLink text="Messages" Icon={InboxIcon} />
        <SidebarLink text="Bookmarks" Icon={BookmarkIcon} />
        <SidebarLink text="Profile" Icon={UserIcon} />
        <SidebarLink text="More" Icon={DotsCircleHorizontalIcon} />
      </nav>
      <div>
        User
      </div>
    </div>
  )
};

function SidebarLink({ text, Icon }: SidebarLinkProps) {
  return (
    <li className="text-xl mb-6 flex items-center space-x-3">
      <Icon className="h-7" />
      <span className="hidden xl:inline">{text}</span>
    </li>
  )
}
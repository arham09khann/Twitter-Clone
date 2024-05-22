import React from "react";
import TwitterIcon from "@mui/icons-material/Twitter";
import SidebarOption from "./SidebarOption";
import "./Sidebar.css";
import {
  Bookmark,
  Home,
  List,
  Message,
  More,
  NotificationsNone,
  Person,
  Search,
} from "@mui/icons-material";
import { Button } from "@mui/material";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <TwitterIcon className="sidebar__twitterIcon" />

      <SidebarOption active Icon={Home} text="Home" />
      <SidebarOption Icon={Search} text="Explore" />
      <SidebarOption Icon={NotificationsNone} text="Notification" />
      <SidebarOption Icon={Message} text="Messages" />
      <SidebarOption Icon={Bookmark} text="Bookmarks" />
      <SidebarOption Icon={List} text="Lists" />
      <SidebarOption Icon={Person} text="Profile" />
      <SidebarOption Icon={More} text="More" />

      <Button variant="outlined" className="sidebar__tweet" fullWidth>
        Tweet
      </Button>
    </div>
  );
};

export default Sidebar;

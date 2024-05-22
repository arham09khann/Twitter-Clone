import React from "react";
import "./Sidebaroption.css";

const SidebarOption = ({ text, Icon, active }) => {
  return (
    <div className={`sidebarOption ${active && "sidebarOption--active"}`}>
      <Icon />
      <h3>{text}</h3>
    </div>
  );
};

export default SidebarOption;

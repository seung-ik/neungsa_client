import React from "react";
import CreateIcon from "@material-ui/icons/Create";
import PostAddIcon from "@material-ui/icons/PostAdd";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";
import DoneIcon from "@material-ui/icons/Done";
import SidebarRow from "./SidebarRow";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import "./Sidebar.css";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar__container">
        <SidebarRow Icon={CreateIcon} title="기본 정보" />
        <CheckCircleIcon className="Check" />
      </div>
      <div className="sidebar__container">
        <SidebarRow Icon={PostAddIcon} title="추가 정보" />
        <CheckCircleIcon className="Check" />
      </div>
    </div>
  );
}

export default Sidebar;

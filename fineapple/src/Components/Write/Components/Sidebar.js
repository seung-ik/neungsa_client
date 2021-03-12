import React from "react";
import CreateIcon from "@material-ui/icons/Create";
import PostAddIcon from "@material-ui/icons/PostAdd";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";
import DoneIcon from "@material-ui/icons/Done";
import SidebarRow from "./SidebarRow";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import "./Sidebar.css";

function Sidebar({ page2, page3, page4, page5 }) {
  return (
    <div className="sidebar">
      <div className="sidebar__container">
        <SidebarRow Icon={CreateIcon} title="제목 및 카테고리" />
        <CheckCircleIcon className={page2 ? "Check" : "noneCheck"} />
      </div>
      <div className="sidebar__container">
        <SidebarRow Icon={PostAddIcon} title="상세설명" />
        <CheckCircleIcon className={page3 ? "Check" : "noneCheck"} />
      </div>
      <div className="sidebar__container">
        <SidebarRow Icon={AttachMoneyIcon} title="예산" />
        <CheckCircleIcon className={page4 ? "Check" : "noneCheck"} />
      </div>
      <div className="sidebar__container">
        <SidebarRow Icon={DoneIcon} title="리뷰" />
        <CheckCircleIcon className={page5 ? "Check" : "noneCheck"} />
      </div>
    </div>
  );
}

export default Sidebar;

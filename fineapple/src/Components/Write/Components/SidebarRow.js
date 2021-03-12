import React from "react";
import "./SidebarRow.css";

function SidebarRow({ Icon, title, complete }) {
  return (
    <div className="sidebarRow">
      {Icon && <Icon className="Icon" />}
      <h4 className="sidebarrow__title">{title}</h4>
    </div>
  );
}

export default SidebarRow;

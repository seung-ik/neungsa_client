import React from 'react'
import CreateIcon from '@material-ui/icons/Create';
import PostAddIcon from '@material-ui/icons/PostAdd';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import DoneIcon from '@material-ui/icons/Done';
import SidebarRow from './SidebarRow'
import './Sidebar.css'



function Sidebar() {
    return (
        <div className="sidebar">
            <SidebarRow Icon={ CreateIcon} title="제목 및 카테고리"/>
            <SidebarRow Icon={PostAddIcon} title="상세설명" />
            <SidebarRow Icon={AttachMoneyIcon} title="예산" />
            <SidebarRow Icon={ DoneIcon} title="리뷰"/>
        </div>
        
    )
}

export default Sidebar

import React from 'react'
import "./SidebarRow.css"

import CheckCircleIcon from '@material-ui/icons/CheckCircle';

function SidebarRow({Icon, title}) {
    return (
        <div className="sidebarRow">
            
            {Icon && <Icon className="Icon" />}
            <h4 className="sidebarrow__title">{title}</h4>
            <CheckCircleIcon className="Check" />
        </div>
    )
}

export default SidebarRow

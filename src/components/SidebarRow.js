// this is child of Sidebar(Parent of SidebarRow.js)

import React from 'react'
import "../App.css"
 
const SidebarRow = ({ selected,Icon, title}) => {
  return (
    <div className={`sidebarRow ${selected && 'selected'}`}>
     <Icon className="sidebarRow_icon" /> 
    <h2 className="sidebarRow_title">{title}</h2>
    </div>
  )
}

export default SidebarRow

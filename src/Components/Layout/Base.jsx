import React from 'react'
import SideBar from './SideBar'
const Base = (props) => {
  return (
    <div>
        <SideBar/>
      {props.children}
    </div>
  )
}

export default Base

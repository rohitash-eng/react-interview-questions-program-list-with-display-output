import React from "react";
import { Outlet } from "react-router-dom";

const MainContent = () =>{
    return (<div className='core-css-main-content-container'>
    <div className='core-css-main-content-section'>
      <Outlet />
    </div>
  </div>)
};
export default MainContent;
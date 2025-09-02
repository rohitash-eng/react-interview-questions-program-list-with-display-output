import React from "react";
import { Link, Outlet } from "react-router-dom";

const Headers = () => {
    return (<>
    <div className='core-css-main-container'>
        <div className='core-css-header'>
            <ul className='core-main-menu-list'>
                <li className="main-li"><Link className="main-link" to="/">Home</Link></li>
                <li className="main-li has-submenu">
                    <Link className="main-link" to="/learn-core-css">Core CSS</Link>
                    <ul className='core-sub-menu-list'>
                        <li className="sub-main-li"><Link to="/learn-core-css/basics">YouTube Video Cards</Link></li>
                        <li className="sub-main-li"><Link to="/learn-core-css/chess">Chess</Link></li>
                        <li className="sub-main-li"><Link to="/learn-core-css/float-n-clear">Float and clear</Link></li>
                    </ul>
                </li>
                <li className="main-li has-submenu">
                    <Link className="main-link" to="/learn-bootstrap-css/programs-list">Interview Program List</Link>
                </li>
                <li className="main-li has-submenu">
                    <Link className="main-link" to="/learn-bootstrap-css/html-n-editor">Html Editor Link</Link>
                </li>
            </ul>
        </div>

    </div>
    </>
    )
};
export default Headers;
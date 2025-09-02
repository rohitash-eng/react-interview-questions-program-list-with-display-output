import React from "react";
import Headers from "./Headers";
import MainContent from "./MainContent";
import Footers from "./Footers";
import AmanPopup from "../features/coreCss/components/AmanPopup";
type IFooterType = {
    isFooter?: boolean
}
const Menu:React.FC<IFooterType> = ({isFooter = true}) => {
    return (
        // <AmanPopup />
        <div className='core-css-main-container'>
            <Headers />
            <MainContent />
            {isFooter && <Footers />}
        </div>
    );
};
export default Menu;
import React from 'react';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import LanguageIcon from "@material-ui/icons/Language";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Avatar } from "@material-ui/core";
function Header() {
    return (
        <div className="header">
            <img className="header__icon"
            src="https://www.paredro.com/wp-content/uploads/2019/03/El-logo-de-Airbnb-es-el-si%CC%81mbolo-de-la-gente-lugares-amor-y-un-22A22.jpg" alt="" />
        
        
        <div className="header__center">
            <input className="" type="text" />
            <SearchIcon />
        </div>
        <div className="header__right">
            <p>Become a Host</p>
            <LanguageIcon />
            <ExpandMoreIcon />
            <Avatar />
        </div>
        </div>
    )
}

export default Header;

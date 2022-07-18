import React from "react";
import {Link} from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/vipman.svg";
import './header.styles.scss';


const Header = () => {
  return (
    <div className="header">
        <Link className="logo-container" to={"/vipman-clothing"}><Logo/></Link>
        <div className="options">
            <Link className="option" to={"/vipman-clothing/shop"}>SHOP</Link>
            <Link className="option" to={"/vipman-clothing/contact"}>CONTACT</Link>
        </div>
    </div>
  )
}

export default Header
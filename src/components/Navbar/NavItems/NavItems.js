import React from "react";
import styles from "./NavItems.module.scss";
import NavItem from "./NavItem/NavItem";

const NavItems = (props) => {
    if (props.open) document.body.style.overflow = "hidden"
    else document.body.style.overflow = "visible"
    return (
        <ul
            className={`${styles.list} ${
                props.open ? styles["list--open"] : styles["list--close"]
            }`}
            onClick={props.clicked}
        >
            <NavItem link="/">Home</NavItem>
            <NavItem link="/login" box>
                Log In
            </NavItem>
            <NavItem link="/signup" box fill>
                Sign Up
            </NavItem>
        </ul>
    );
};

export default NavItems;

import React, { useState, useEffect } from "react";
import styles from "./Navbar.module.scss";
import NavItems from "./NavItems/NavItems";
import NavLogo from "./NavLogo/NavLogo";
import NavToggle from "./NavToggle/NavToggle";

const Navbar = () => {
    const [openNav, setOpenNav] = useState(false);
    const [shadow, setShadow] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    });

    const toggle = () => {
        setOpenNav(!openNav);
    };

    const handleScroll = () => {
        if (window.scrollY === 0 && shadow === true) {
            setShadow(!shadow);
        } else if (window.scrollY !== 0 && shadow !== true) {
            setShadow(!shadow);
        }
    };

    return (
        <>
            <nav
                className={`${styles.nav} ${
                    shadow ? styles["nav--shadow"] : ""
                }`}
            >
                <div className={styles.logo}>
                    <NavLogo />
                </div>
                <NavItems open={openNav} clicked={toggle} />
                <NavToggle open={openNav} clicked={toggle} />
            </nav>
        </>
    );
};

export default Navbar;

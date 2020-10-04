import React from "react";
import logo from "./logo.png";
import styles from "./NavLogo.module.scss";

const Logo = (props) => {
    return (
        <div className={styles.logo}>
            <img src={logo} alt="IOSD" className={styles.img} />
        </div>
    );
};

export default Logo;

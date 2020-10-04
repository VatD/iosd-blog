import React from "react";
import { ReactComponent as Heart } from "./heart.svg";
import styles from "./Footer.module.scss";
import whiteLogo from "./logo.png";

const Footer = (props) => {
    return (
        <footer className={styles.footer}>
            <img src={whiteLogo} alt="IOSD Logo" className={styles.logo} />
            <p>
                Made for IOSD Junior Council Selection with 
                <Heart className={styles.svg} /> and ReactJS.
            </p>
            <p>&copy; Vatsal Dhar, 2020</p>
        </footer>
    );
};

export default Footer;

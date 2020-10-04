import React from "react";
import Person from "./Elements/Person";
import styles from "./Hero.module.scss";

const Hero = () => {
    return (
        <header className={styles.hero}>
            <div className={styles.herosvg}>
                <Person />
            </div>
            <div className={styles.herotext}>
                <h3>Welcome To</h3>
                <h2>IOSD Blogs</h2>
                <p>
                    Get to know about latest trends and technology and personal
                    experiences of your Seniors, Alumni and Industry Experts and
                    become a part of one of the largest technical societies in
                    India.
                </p>
            </div>
        </header>
    );
};

export default Hero;

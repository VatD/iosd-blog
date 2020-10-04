import React from "react";
import styles from "./NavToggle.module.scss";

const NavToggle = (props) => {
    return (
        <div className={styles.ham} onClick={props.clicked}>
            <span
                className={`${styles.hambar} ${
                    props.open ? styles["hambar--open"] : ""
                }`}
            >
                &nbsp;
            </span>
        </div>
    );
};

export default NavToggle;

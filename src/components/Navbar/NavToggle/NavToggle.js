import React, { useRef } from "react";
import styles from "./NavToggle.module.scss";

const NavToggle = (props) => {
    const toggle = useRef(null);

    return (
        <button
            className={styles.ham}
            onClick={props.clicked}
            ref={toggle}
            onMouseUp={() => toggle.current.blur()}
        >
            <span
                className={`${styles.hambar} ${
                    props.open ? styles["hambar--open"] : ""
                }`}
            >
                &nbsp;
            </span>
        </button>
    );
};

export default NavToggle;

import React, { useRef } from "react";
import { NavLink } from "react-router-dom";
import styles from "./NavItem.module.scss";

const NavItem = (props) => {
    const hlink = useRef(null);

    let classes = [];
    if (props.box) {
        classes.push(styles.box);
        if (props.fill) classes.push(styles["box--fill"]);
        else classes.push(styles["box--nofill"]);
    } else classes.push(styles.link);

    return (
        <NavLink
            to={props.link}
            className={classes.join(" ")}
            ref={hlink}
            onMouseUp={() => hlink.current.blur()}
        >
            {props.children}
        </NavLink>
    );
};

export default NavItem;

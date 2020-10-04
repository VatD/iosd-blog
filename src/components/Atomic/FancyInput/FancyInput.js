import React from "react";
import styles from "./FancyInput.module.scss";

const FancyInput = (props) => {
    return <input className={styles.fancyip} {...props} />;
};

export default FancyInput;

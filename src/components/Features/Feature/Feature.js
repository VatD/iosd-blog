import React from "react";
import styles from "./Feature.module.scss";

const Feature = (props) => {
    return (
        <div className={styles.feature}>
            <div>{props.svg}</div>
            <h4>{props.title}</h4>
            <p>{props.body}</p>
        </div>
    );
};

export default Feature;

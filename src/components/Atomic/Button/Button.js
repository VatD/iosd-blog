import React, { useRef } from "react";
import styles from "./Button.module.scss";

const Button = (props) => {
    let col = props.col;

    if (!col) col = "darkblue";

    const customStyles = {
        color: col,
        borderColor: col,
    };

    if (props.fillbtn) {
        customStyles.color = "white";
        customStyles.backgroundColor = col;
    }

    const btn = useRef(null);

    return (
        <button
            {...props}
            className={`
                ${styles.btn} 
                ${styles[`btn--${props.size}`]} 
            `}
            style={customStyles}
            ref={btn}
            onMouseUp={() => btn.current.blur()}
        >
            {props.children}
        </button>
    );
};

export default Button;

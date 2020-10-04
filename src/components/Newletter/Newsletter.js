import React from "react";
import Button from "../Atomic/Button/Button";
import styles from "./Newsletter.module.scss";
import blob from "./blob.svg";
import FancyInput from "../Atomic/FancyInput/FancyInput";

const Newsletter = (props) => {
    const inputHandler = (e) => {
        e.preventDefault();
        console.log(e.target.subEmail.value);
        e.target.subEmail.value = "";
    };

    return (
        <section className={styles.news}>
            <div className={styles["news__text"]}>
                <h2>Subscribe to Our Newsletter!</h2>
                <p>No spams or promotions, just quality content.</p>
            </div>
            <form
                className={styles["news__form"]}
                style={{ backgroundImage: `url(${blob})` }}
                onSubmit={inputHandler}
            >
                <FancyInput
                    placeholder="Your E-Mail"
                    type="email"
                    name="subEmail"
                />
                <Button fillbtn={1} col="#f34508" size="md">
                    Subscribe
                </Button>
            </form>
        </section>
    );
};

export default Newsletter;

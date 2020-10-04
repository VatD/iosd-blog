import React from "react";
import FeatureList from "./FeatureList";
import Feature from "./Feature/Feature";
import styles from "./Features.module.scss";

const Features = () => {
    return (
        <section className={styles.features}>
            <h1>Why IOSD Blogs?</h1>
            <div className={styles.container}>
                {FeatureList.map((feature, i) => (
                    <Feature
                        title={feature.title}
                        body={feature.body}
                        svg={feature.img}
                        key={i}
                    />
                ))}
            </div>
        </section>
    );
};

export default Features;

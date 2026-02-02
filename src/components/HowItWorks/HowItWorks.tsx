import React from 'react';
import { scrollToSearch } from '../../utils/scrollToSearch';
import styles from './HowItWorks.module.scss';

const HowItWorks: React.FC = () => {
    const steps = [
        { number: "1)", text: "Enter your name" },
        { number: "2)", text: "We are collecting open information" },
        { number: "3)", text: "Receive a convenient report + options" }
    ];

    return (
        <div className={styles.container}>
            {/* Heading */}
            <h2 className={styles.heading}>
                How it works?
            </h2>

            {/* Steps List */}
            <div className={styles.stepsList}>
                {steps.map((step, index) => (
                    <div key={index} className={styles.stepItem}>
                        <span className={styles.number}>{step.number}</span>
                        <p className={styles.text}>{step.text}</p>
                    </div>
                ))}
            </div>

            {/* CTA Button */}
            <button className={styles.button} onClick={scrollToSearch}>
                START DIGITAL PROFILE SEARCH
            </button>
        </div>
    );
};

export default HowItWorks;

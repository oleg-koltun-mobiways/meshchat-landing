import React from 'react';
import checkIcon from '../../assets/images/check.svg';
import styles from './BenefitsSection.module.scss';

const BenefitsSection: React.FC = () => {
    const benefits = [
        "Social media activity, news mentions, photos, hidden profiles, red flags, and more, all in one clear report.",
        "Use it to protect your identity, control how you look online, or quickly vet someone before you decide to trust them."
    ];

    return (
        <div className={styles.container}>
            {/* Heading */}
            <h2 className={styles.heading}>
                All in one clear report
            </h2>

            {/* Benefits List */}
            <div className={styles.benefitsList}>
                {benefits.map((benefit, index) => (
                    <div key={index} className={styles.benefitItem}>
                        <img src={checkIcon} alt="Check" className={styles.checkIcon} />
                        <p className={styles.benefitText}>
                            {benefit}
                        </p>
                    </div>
                ))}
            </div>

            {/* CTA Button */}
            <button className={styles.button}>
                SEARCH NOW
            </button>
        </div>
    );
};

export default BenefitsSection;

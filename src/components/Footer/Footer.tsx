import React from 'react';
import logo from '../../assets/images/logo.svg';
import styles from './Footer.module.scss';

const Footer: React.FC = () => {
    const currentYear = new Date().getFullYear();

    return (
        <div className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.content}>
                    {/* Logo and Brand */}
                    <div className={styles.branding}>
                        <img src={logo} alt="Mesh Chat AI Logo" className={styles.logo} />
                        <span className={styles.brandName}>
                            Mesh chat AI
                        </span>
                    </div>

                    {/* Year */}
                    <span className={styles.year}>
                        {currentYear}
                    </span>
                </div>
            </div>
        </div>
    );
};

export default Footer;

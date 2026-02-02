import React from 'react';
import logo from '../../assets/images/logo.svg';
import { scrollToSearch } from '../../utils/scrollToSearch';
import styles from './Header.module.scss';

const Header: React.FC = () => {
    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <div className={styles.innerContainer}>
                    {/* Logo */}
                    <div className={styles.logoContainer}>
                        <img src={logo} alt="Mesh Chat AI Logo" className={styles.logoImage} />
                        <span className={styles.logoText}>
                            Mesh Chat AI
                        </span>
                    </div>

                    {/* CTA Button */}
                    <button className={styles.button} onClick={scrollToSearch}>
                        Find Digital Profile
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;

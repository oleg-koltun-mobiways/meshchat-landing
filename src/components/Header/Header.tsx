import React from 'react';
import { useNavigate, useLocation } from '@tanstack/react-router';
import logo from '../../assets/images/logo.svg';
import { scrollToSearch } from '../../utils/scrollToSearch';
import { isAuthenticated, removeAuthCookie } from '../../utils/auth';
import styles from './Header.module.scss';

const Header: React.FC = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const isAuth = isAuthenticated();
    const isLoginPage = location.pathname === '/login';

    const handleLogout = () => {
        removeAuthCookie();
        navigate({ to: '/login' });
    };

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

                    {/* CTA Buttons */}
                    <div className={styles.buttonGroup}>
                        {isAuth && !isLoginPage && (
                            <>
                                <button className={styles.button} onClick={scrollToSearch}>
                                    Find Digital Profile
                                </button>
                                <button className={styles.logoutButton} onClick={handleLogout}>
                                    Logout
                                </button>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;

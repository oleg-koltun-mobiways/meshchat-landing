import React, { useState } from 'react';
import { useNavigate } from '@tanstack/react-router';
import { validateCredentials, setAuthCookie } from '../../utils/auth';
import styles from './Login.module.scss';

const Login: React.FC = () => {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setError('');
        setIsLoading(true);

        // Simulate a small delay for better UX
        setTimeout(() => {
            if (validateCredentials(login, password)) {
                setAuthCookie();
                navigate({ to: '/' });
            } else {
                setError('Invalid credentials. Please try again.');
                setIsLoading(false);
            }
        }, 500);
    };

    return (
        <div className={styles.loginContainer}>
            <div className={styles.loginCard}>
                <div className={styles.logoSection}>
                    <h1 className={styles.logo}>MeshChat</h1>
                    <p className={styles.subtitle}>Please sign in to continue</p>
                </div>

                <form onSubmit={handleSubmit} className={styles.loginForm}>
                    <div className={styles.inputGroup}>
                        <label htmlFor="login" className={styles.label}>
                            Email
                        </label>
                        <input
                            id="login"
                            type="text"
                            value={login}
                            onChange={(e) => setLogin(e.target.value)}
                            className={styles.input}
                            placeholder="Enter your email"
                            required
                            autoComplete="username"
                            disabled={isLoading}
                        />
                    </div>

                    <div className={styles.inputGroup}>
                        <label htmlFor="password" className={styles.label}>
                            Password
                        </label>
                        <input
                            id="password"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className={styles.input}
                            placeholder="Enter your password"
                            required
                            autoComplete="current-password"
                            disabled={isLoading}
                        />
                    </div>

                    {error && (
                        <div className={styles.error} role="alert">
                            {error}
                        </div>
                    )}

                    <button
                        type="submit"
                        className={styles.submitButton}
                        disabled={isLoading}
                    >
                        {isLoading ? 'Signing in...' : 'Sign In'}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Login;

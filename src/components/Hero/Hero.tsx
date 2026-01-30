import React, { useState } from 'react';
import checkIcon from '../../assets/images/check.svg';
import user1 from '../../assets/images/user1.png';
import user2 from '../../assets/images/user2.png';
import user3 from '../../assets/images/user3.png';
import user4 from '../../assets/images/user4.png';
import user5 from '../../assets/images/user5.png';
import user6 from '../../assets/images/user6.png';
import styles from './Hero.module.scss';

const Hero: React.FC = () => {
    const [searchQuery, setSearchQuery] = useState('');

    const features = [
        "Public social profiles in one place",
        "Personality & interests",
        "Digital Footprint"
    ];

    const testimonialUsers = [user1, user2, user3, user4, user5, user6];

    const handleSearch = () => {
        console.log('Search for:', searchQuery);
    };

    return (
        <section className={styles.section}>
            <div className={styles.contentWrapper}>
                {/* Main Heading */}
                <h1 className={styles.heading}>
                    Discover Anyone's Digital
                    <br />
                    Profile Instantly
                </h1>

                <div className={styles.featuresContainer}>
                    {features.map((feature, index) => (
                        <div key={index} className={styles.featureItem}>
                            <img src={checkIcon} alt="Check" className={styles.checkIcon} />
                            <span className={styles.featureText}>{feature}</span>
                        </div>
                    ))}
                    <div className={styles.searchFormContainer}>
                        <div className={styles.searchRow}>
                            <input
                                type="text"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                placeholder="Angelina Jolie, USA, actress"
                                className={styles.searchInput}
                            />
                            <button
                                onClick={handleSearch}
                                className={styles.searchButton}
                            >
                                Search
                            </button>
                        </div>
                        <p className={styles.helperText}>
                            Enter full name and any known details to start search
                        </p>
                    </div>
                </div>

                {/* User Avatars */}
                <div className={styles.avatarsContainer}>
                    {testimonialUsers.map((user, index) => (
                        <div
                            key={index}
                            className={styles.avatar}
                            style={{
                                backgroundImage: `url(${user})`
                            }}
                        />
                    ))}
                </div>

                {/* Trust Badges */}
                <div className={styles.trustBadges}>
                    <p className={styles.trustBadge}>
                        Trusted by 97,000+ Clients ⭐⭐⭐⭐⭐
                    </p>
                    <p className={styles.trustBadge}>
                        1M+ People Searched
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Hero;

import React from 'react';
import resultUser from '../../assets/images/result-user.png';
import twitter from '../../assets/images/twitter.svg';
import linkedin from '../../assets/images/linkedin.svg';
import facebook from '../../assets/images/facebook.svg';
import { TikTokIcon, SnapchatIcon } from '../SocialIcons';
import styles from './ResultCard.module.scss';

interface ResultCardProps {
    name?: string;
    location?: string;
    dataSources?: number;
    socialProfiles?: string[];
    overview?: string;
}

const ResultCard: React.FC<ResultCardProps> = ({
    name = "John Smith",
    location = "San Francisco, USA",
    dataSources = 72,
    socialProfiles = ['twitter', 'linkedin', 'tiktok', 'snapchat', 'facebook'],
    overview = "His social media is filled with stunning photos of mountain hikes, beach sunsets, and city escapades. With a passion for photography, he captures moments that inspire others to get outside and enjoy life."
}) => {
    const renderSocialIcon = (platform: string) => {
        switch (platform) {
            case 'tiktok':
                return <TikTokIcon size={32} />;
            case 'snapchat':
                return <SnapchatIcon size={32} />;
            case 'twitter':
            case 'linkedin':
            case 'facebook':
                const socialIcons: Record<string, string> = {
                    twitter,
                    linkedin,
                    facebook,
                };
                return (
                    <div className={styles.socialIcon}>
                        <img src={socialIcons[platform]} alt={platform} />
                    </div>
                );
            default:
                return (
                    <div className={styles.socialIcon}>
                        <span>{platform[0].toUpperCase()}</span>
                    </div>
                );
        }
    };

    return (
        <div className={styles.card}>
            {/* Success Badge */}
            <div className={styles.successBadge}>
                <div className={styles.successIcon}>
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                </div>
                <span className={styles.successText}>Your report is ready!</span>
            </div>

            {/* User Info */}
            <div className={styles.userInfo}>
                <img
                    src={resultUser}
                    alt={name}
                    className={styles.userAvatar}
                />
                <div>
                    <h3 className={styles.userName}>{name}</h3>
                    <p className={styles.userLocation}>{location}</p>
                </div>
            </div>

            {/* Data Sources */}
            <p className={styles.dataSources}>
                Data Sources analyzed: <span className={styles.count}>{dataSources}</span>
            </p>

            {/* Social Profiles */}
            <div className={styles.socialProfiles}>
                <span className={styles.label}>Social profiles:</span>
                <div className={styles.socialIcons}>
                    {socialProfiles.slice(0, 5).map((platform, index) => (
                        <div key={index}>
                            {renderSocialIcon(platform)}
                        </div>
                    ))}
                </div>
            </div>

            {/* Overview */}
            <div className={styles.overview}>
                <h4 className={styles.heading}>Overview:</h4>
                <p className={styles.text}>
                    {overview}{' '}
                    {/* <button className="text-blue-500 underline hover:text-blue-600">
                        Read more
                    </button> */}
                </p>
            </div>

            {/* CTA */}
            {/* <div className="text-center">
                <h2 className="font-bold text-3xl text-black">All in one clear report</h2>
            </div> */}
        </div>
    );
};

export default ResultCard;

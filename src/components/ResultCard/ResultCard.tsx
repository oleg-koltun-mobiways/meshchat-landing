import React from 'react';
import resultUser from '../../assets/images/result-user.png';
import twitter from '../../assets/images/twitter.svg';
import linkedin from '../../assets/images/linkedin.svg';
import facebook from '../../assets/images/facebook.svg';
import { TikTokIcon, SnapchatIcon } from '../SocialIcons';

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
                    <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
                        <img src={socialIcons[platform]} alt={platform} className="w-5 h-5" />
                    </div>
                );
            default:
                return (
                    <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
                        <span className="text-xs">{platform[0].toUpperCase()}</span>
                    </div>
                );
        }
    };

    return (
        <div className="bg-white border border-white rounded-3xl shadow-[0px_4px_10px_0px_rgba(0,0,0,0.1)] p-5 max-w-lg mx-auto">
            {/* Success Badge */}
            <div className="flex items-center gap-2 mb-4">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                </div>
                <span className="text-green-600 font-semibold text-base">Your report is ready!</span>
            </div>

            {/* User Info */}
            <div className="flex items-center gap-3 mb-4">
                <img
                    src={resultUser}
                    alt={name}
                    className="w-14 h-14 rounded-full object-cover"
                />
                <div>
                    <h3 className="font-semibold text-xl text-black">{name}</h3>
                    <p className="text-gray-600 text-sm">{location}</p>
                </div>
            </div>

            {/* Data Sources */}
            <p className="text-gray-600 text-sm mb-3">
                Data Sources analyzed: <span className="font-medium text-black">{dataSources}</span>
            </p>

            {/* Social Profiles */}
            <div className="flex items-center gap-2 mb-4">
                <span className="text-gray-600 text-sm">Social profiles:</span>
                <div className="flex gap-2">
                    {socialProfiles.slice(0, 5).map((platform, index) => (
                        <div key={index}>
                            {renderSocialIcon(platform)}
                        </div>
                    ))}
                </div>
            </div>

            {/* Overview */}
            <div className="mb-4">
                <h4 className="font-semibold text-sm text-gray-700 mb-2">Overview:</h4>
                <p className="text-gray-500 text-sm leading-relaxed">
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

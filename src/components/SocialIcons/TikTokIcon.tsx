import React from 'react';
import tiktokIcon from '../../assets/images/TikTok.svg';

interface TikTokIconProps {
    size?: number;
}

export const TikTokIcon: React.FC<TikTokIconProps> = ({ size = 32 }) => {
    return (
        <div
            className="bg-black rounded-full flex items-center justify-center overflow-hidden"
            style={{ width: size, height: size }}
        >
            <img
                src={tiktokIcon}
                alt="TikTok"
                className="w-[65%] h-[65%] object-contain"
            />
        </div>
    );
};

export default TikTokIcon;

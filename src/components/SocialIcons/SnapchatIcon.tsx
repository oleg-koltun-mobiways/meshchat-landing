import React from 'react';
import snapchatIcon from '../../assets/images/snapchat.svg';

interface SnapchatIconProps {
    size?: number;
}

export const SnapchatIcon: React.FC<SnapchatIconProps> = ({ size = 32 }) => {
    return (
        <div
            className="rounded-full flex items-center justify-center overflow-hidden"
            style={{
                width: size,
                height: size,
                backgroundColor: '#FFFC00'
            }}
        >
            <img
                src={snapchatIcon}
                alt="Snapchat"
                className="w-[62%] h-[62%] object-contain"
            />
        </div>
    );
};

export default SnapchatIcon;

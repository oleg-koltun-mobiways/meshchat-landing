import React from 'react';
import logo from '../../assets/images/logo.svg';

const Footer: React.FC = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="px-8 py-6 bg-gradient-to-b from-[#e8d5f0] to-[rgba(255, 125, 38, 0.60)]">
            <div className="max-w-screen-xl mx-auto">
                <div className="flex items-center gap-3">
                    {/* Logo and Brand */}
                    <div className="flex items-center gap-0">
                        <img src={logo} alt="Mesh Chat AI Logo" className="w-7 h-7" />
                        <span className="font-medium text-lg uppercase text-black ml-0">
                            Mesh chat AI
                        </span>
                    </div>

                    {/* Year */}
                    <span className="font-medium text-lg uppercase text-black">
                        {currentYear}
                    </span>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

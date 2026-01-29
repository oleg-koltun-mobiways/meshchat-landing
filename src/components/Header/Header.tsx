import React from 'react';
import logo from '../../assets/images/logo.svg';

const Header: React.FC = () => {
    return (
        <header className="fixed top-0 left-0 right-0 z-50 px-8 py-4">
            <div className="max-w-screen-xl mx-auto">
                <div className="bg-white/60 backdrop-blur-sm border border-white rounded-[24px] shadow-[0px_4px_8px_0px_rgba(0,0,0,0.05)] px-3 py-2 flex items-center justify-between">
                    {/* Logo */}
                    <div className="flex items-center gap-0">
                        <img src={logo} alt="Mesh Chat AI Logo" className="w-8 h-8" />
                        <span className="font-medium text-lg text-black ml-0">
                            Mesh chat AI
                        </span>
                    </div>

                    {/* CTA Button */}
                    <button className="bg-[#131217] text-white px-6 py-3 rounded-[20px] text-base font-medium hover:bg-[#1f1e24] transition-colors">
                        Find Digital Profile
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;

import React, { useState } from 'react';
import checkIcon from '../../assets/images/check.svg';
import user1 from '../../assets/images/user1.png';
import user2 from '../../assets/images/user2.png';
import user3 from '../../assets/images/user3.png';
import user4 from '../../assets/images/user4.png';
import user5 from '../../assets/images/user5.png';
import user6 from '../../assets/images/user6.png';

const Hero: React.FC = () => {
    const [searchQuery, setSearchQuery] = useState('');

    const features = [
        "Public social profiles in one place",
        "Personality & interests",
        "Digital Footprint"
    ];

    const testimonialUsers = [user1, user2, user3, user4, user5, user6];

    const handleSearch = () => {
        // Search handler - to be implemented
        console.log('Search for:', searchQuery);
    };

    return (
        <section className="min-h-screen flex items-center justify-center px-8 pt-24 pb-16 bg-gradient-to-b from-[#f5e6e8] to-[#fce8e5]">
            <div className="max-w-3xl w-full text-left">
                {/* Main Heading */}
                <h1 className="font-bold text-5xl md:text-6xl lg:text-6xl text-center leading-tight mb-6 text-black">
                    Discover Anyone's Digital Profile Instantly
                </h1>

                <div className="flex flex-col gap-3 justify-start mb-12 max-w-lg mx-auto">
                    {features.map((feature, index) => (
                        <div key={index} className="flex items-center gap-3">
                            <img src={checkIcon} alt="Check" className="w-5 h-5" />
                            <span className="text-lg text-black">{feature}</span>
                        </div>
                    ))}
                    <div className="flex flex-col gap-1 justify-start">
                        <div className="w-full gap-2 flex items-center justify-between w-full">
                            <input
                                type="text"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                placeholder="Angelina Jolie, USA, actress"
                                className="flex-1 px-6 py-1 flex items-center h-[44px] rounded-2xl border border-gray-200 bg-white/80 text-base placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-300"
                            />
                            <button
                                onClick={handleSearch}
                                className="h-[44px] bg-[#131217] text-white px-10 rounded-[16px] text-base font-medium hover:bg-[#1f1e24] transition-colors"
                            >
                                Search
                            </button>
                        </div>
                        <p className="text-sm text-black text-center font-light mb-16 ">
                            Enter full name and any known details to start search
                        </p>
                    </div>
                </div>

                {/* User Avatars */}
                <div className="flex justify-center items-center gap-[-8px] mb-6">
                    {testimonialUsers.map((user, index) => (
                        <img
                            key={index}
                            src={user}
                            alt={`User ${index + 1}`}
                            className="w-16 h-16 rounded-full border-2 border-white object-cover -ml-2 first:ml-0"
                        />
                    ))}
                </div>

                {/* Trust Badges */}
                <div className="space-y-2">
                    <p className="text-lg font-medium text-black text-center">
                        Trusted by 97,000+ Clients ⭐⭐⭐⭐⭐
                    </p>
                    <p className="text-lg font-medium text-black text-center">
                        1M+ People Searched
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Hero;

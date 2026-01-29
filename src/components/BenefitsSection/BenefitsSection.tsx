import React from 'react';
import checkIcon from '../../assets/images/check.svg';

const BenefitsSection: React.FC = () => {
    const benefits = [
        "Social media activity, news mentions, photos, hidden profiles, red flags, and more, all in one clear report.",
        "Use it to protect your identity, control how you look online, or quickly vet someone before you decide to trust them."
    ];

    return (
        <div className="flex flex-col gap-7 items-center w-full max-w-[672px] mx-auto mb-40">
            {/* Heading */}
            <h2 className="font-bold text-[42px] leading-normal text-black text-center w-full">
                All in one clear report
            </h2>

            {/* Benefits List */}
            <div className="flex flex-col gap-3 items-center w-full max-w-[500px]">
                {benefits.map((benefit, index) => (
                    <div key={index} className="flex gap-3 items-start w-full">
                        <img src={checkIcon} alt="Check" className="w-6 h-6 shrink-0 mt-0.5" />
                        <p className="flex-1 text-[18px] font-medium leading-[1.4] text-black">
                            {benefit}
                        </p>
                    </div>
                ))}
            </div>

            {/* CTA Button */}
            <button className="bg-[#131217] text-white px-6 py-4 rounded-2xl h-[54px] w-full max-w-[500px] text-[16px] font-medium uppercase hover:bg-[#1f1e24] transition-colors">
                SEARCH NOW
            </button>
        </div>
    );
};

export default BenefitsSection;

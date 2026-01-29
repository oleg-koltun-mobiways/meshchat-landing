import React from 'react';

const HowItWorks: React.FC = () => {
    const steps = [
        { number: "1)", text: "Enter your name" },
        { number: "2)", text: "We are collecting open information" },
        { number: "3)", text: "Receive a convenient report + options" }
    ];

    return (
        <div className="flex flex-col gap-7 items-center w-full max-w-[672px] mx-auto">
            {/* Heading */}
            <h2 className="font-bold text-[42px] leading-normal text-black text-center w-full">
                How it works?
            </h2>

            {/* Steps List */}
            <div className="flex flex-col gap-3 items-center w-full max-w-[374px]">
                {steps.map((step, index) => (
                    <div key={index} className="flex gap-3 items-start w-full text-[18px] font-medium leading-normal text-black">
                        <span className="shrink-0">{step.number}</span>
                        <p className="flex-1">{step.text}</p>
                    </div>
                ))}
            </div>

            {/* CTA Button */}
            <button className="bg-[#131217] text-white px-6 py-4 rounded-2xl h-[54px] w-full max-w-[500px] text-[16px] font-medium uppercase hover:bg-[#1f1e24] transition-colors">
                START DIGITAL PROFILE SEARCH
            </button>
        </div>
    );
};

export default HowItWorks;

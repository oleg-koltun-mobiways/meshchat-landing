import { useState } from 'react';
import chevronDown from '../../assets/images/chevron-down-faq.svg';

interface FAQItem {
    question: string;
    answer: string;
}

const faqData: FAQItem[] = [
    {
        question: 'Where do the data come from?',
        answer: 'Our data comes from various open sources, including public accounts and accessible databases. This allows us to provide accurate and reliable information while respecting privacy.',
    },
    {
        question: 'Do you use private or confidential information?',
        answer: 'No, we only use publicly available information. We respect privacy and do not access or use any private or confidential data.',
    },
    {
        question: 'Can I delete my profile?',
        answer: 'Yes, you can request to delete your profile at any time. We will remove all associated data from our systems.',
    },
    {
        question: 'How accurate is this?',
        answer: 'Our data accuracy is very high as we use multiple sources and verification methods. However, we recommend verifying critical information independently.',
    },
];

export default function FAQSection() {
    const [expandedIndex, setExpandedIndex] = useState<number>(0);

    const toggleFAQ = (index: number) => {
        setExpandedIndex(expandedIndex === index ? -1 : index);
    };

    return (
        <div className="w-full py-16 px-4">
            <div className="max-w-screen-xl mx-auto flex flex-col gap-7 items-center">
                {/* Heading */}
                <h2 className="text-[42px] font-bold text-black text-center">FAQ</h2>

                {/* FAQ Items */}
                <div className="flex flex-col gap-3 w-full max-w-[500px]">
                    {faqData.map((faq, index) => (
                        <div
                            key={index}
                            className="flex flex-col gap-3"
                        >
                            {/* Question */}
                            <button
                                onClick={() => toggleFAQ(index)}
                                className="flex gap-3 items-start w-full text-left"
                            >
                                <p className="flex-1 text-[20px] font-medium text-black leading-normal">
                                    {faq.question}
                                </p>
                                <img
                                    src={chevronDown}
                                    alt="Toggle"
                                    className={`w-6 h-6 transition-transform duration-300 ${expandedIndex === index ? '' : 'rotate-180'
                                        }`}
                                />
                            </button>

                            {/* Answer */}
                            {expandedIndex === index && (
                                <div className="w-full">
                                    <p className="text-[16px] font-medium text-[rgba(0,0,0,0.6)] leading-[1.4]">
                                        {faq.answer}
                                    </p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

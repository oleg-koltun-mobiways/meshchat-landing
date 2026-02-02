import { useState } from 'react';
import chevronDown from '../../assets/images/chevron-down-faq.svg';
import styles from './FAQSection.module.scss';

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
        answer: 'Our data comes from various open sources, including public accounts and accessible databases. This allows us to provide accurate and reliable information while respecting privacy.',
    },
    {
        question: 'Can I delete my profile?',
        answer: 'Our data comes from various open sources, including public accounts and accessible databases. This allows us to provide accurate and reliable information while respecting privacy.',
    },
    {
        question: 'How accurate is this?',
        answer: 'Our data comes from various open sources, including public accounts and accessible databases. This allows us to provide accurate and reliable information while respecting privacy.',
    },
];

export default function FAQSection() {
    const [expandedIndex, setExpandedIndex] = useState<number>(0);

    const toggleFAQ = (index: number) => {
        setExpandedIndex(expandedIndex === index ? -1 : index);
    };

    return (
        <div className={styles.section}>
            <div className={styles.container}>
                {/* Heading */}
                <h2 className={styles.heading}>FAQ</h2>

                {/* FAQ Items */}
                <div className={styles.faqList}>
                    {faqData.map((faq, index) => (
                        <div
                            key={index}
                            className={styles.faqItem}
                        >
                            {/* Question */}
                            <button
                                onClick={() => toggleFAQ(index)}
                                className={styles.question}
                            >
                                <p className={styles.text}>
                                    {faq.question}
                                </p>
                                <img
                                    src={chevronDown}
                                    alt="Toggle"
                                    className={`${styles.icon} ${expandedIndex === index ? '' : styles.rotated}`}
                                />
                            </button>

                            {/* Answer */}
                            {expandedIndex === index && (
                                <div className={styles.answer}>
                                    <p className={styles.text}>
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

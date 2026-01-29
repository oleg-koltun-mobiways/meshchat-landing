import React, { useState } from 'react';
import testimonialUser1 from '../../assets/images/testimonial-user.png';
import testimonialUser2 from '../../assets/images/testimonial-user-2.png';
import testimonialUser3 from '../../assets/images/testimonial-user-3.png';
import stars from '../../assets/images/stars.svg';
import chevronLeft from '../../assets/images/chevron-left.svg';

interface Testimonial {
    text: string;
    author: string;
    avatar: string;
}

const TestimonialsSection: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const testimonials: Testimonial[] = [
        {
            text: "Using this online profile search service was both enlightening and beneficial. I will certainly come back to this platform for future insights.",
            author: "JenniferH",
            avatar: testimonialUser1
        },
        {
            text: "It provided me with valuable insights about my prospective business partner. I'm grateful I could learn everything I needed before diving into the real business with them.",
            author: "MichaelR_72",
            avatar: testimonialUser2
        },
        {
            text: "This service was incredibly engaging from beginning to end. Thanks to it, I found a childhood friend I believed I'd lost forever, and now we're back in touch!",
            author: "Sarah.Johnson",
            avatar: testimonialUser3
        },
        {
            text: "Amazing platform! I was able to verify someone's professional background before making an important business decision. The depth of information was impressive.",
            author: "David.Chen",
            avatar: testimonialUser1
        },
        {
            text: "I used this service to reconnect with old college friends. The search was quick and the results were comprehensive. Highly recommend!",
            author: "Emma_Williams",
            avatar: testimonialUser2
        },
        {
            text: "This tool helped me verify the identity of someone I met online. It gave me peace of mind before our first meeting. Very thorough and easy to use.",
            author: "Robert.Martinez",
            avatar: testimonialUser3
        },
        {
            text: "I found information about a potential roommate that helped me make an informed decision. The service is accurate and user-friendly.",
            author: "Lisa.Thompson",
            avatar: testimonialUser1
        },
        {
            text: "Excellent service for background research. I was able to learn about a business contact's professional history. Very helpful for networking.",
            author: "James_Anderson",
            avatar: testimonialUser2
        },
        {
            text: "Great tool for reconnecting with people from my past. I found several childhood friends I had lost contact with. Thank you!",
            author: "Maria.Garcia",
            avatar: testimonialUser3
        }
    ];

    const companyLogos = [
        { name: "Business Insider", width: "103px" },
        { name: "Medium", width: "208px" },
        { name: "Newsfile", width: "152px" },
        { name: "Yahoo! Finance", width: "148px" }
    ];

    const cardsToShow = 3;
    const maxIndex = testimonials.length - cardsToShow;

    const handlePrev = () => {
        setCurrentIndex((prev) => Math.max(0, prev - 1));
    };

    const handleNext = () => {
        setCurrentIndex((prev) => Math.min(maxIndex, prev + 1));
    };

    const isAtStart = currentIndex === 0;
    const isAtEnd = currentIndex === maxIndex;

    const visibleTestimonials = testimonials.slice(currentIndex, currentIndex + cardsToShow);

    return (
        <div className="w-full max-w-screen-xl mx-auto">
            {/* Company Logos Section */}
            <div className="flex items-center justify-center gap-8 mb-16 flex-wrap">
                {companyLogos.map((logo, index) => (
                    <div
                        key={index}
                        className="h-[54px] flex items-center justify-center px-4"
                        style={{ width: logo.width }}
                    >
                        <div className="text-black font-bold text-sm uppercase tracking-wider opacity-60">
                            {logo.name}
                        </div>
                    </div>
                ))}
            </div>

            {/* Carousel Container */}
            <div className="flex flex-col items-center gap-6">
                {/* Testimonial Cards - Overflow Container */}
                <div className="overflow-hidden w-full max-w-[808px]">
                    <div
                        className="flex gap-8 transition-transform duration-500 ease-in-out"
                        style={{
                            transform: `translateX(-${currentIndex * (244.67 + 32)}px)` // card width + gap
                        }}
                    >
                        {testimonials.map((testimonial, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-[20px] shadow-[0px_4px_20px_0px_rgba(0,0,0,0.1)] p-4 flex-shrink-0"
                                style={{ width: '244.67px' }}
                            >
                                {/* Testimonial Content */}
                                <div className="flex flex-col gap-4 mb-4">
                                    <p className="text-[18px] leading-[1.4] text-[rgba(0,0,0,0.6)] h-[175px] overflow-hidden">
                                        {testimonial.text}
                                    </p>
                                    {/* Stars */}
                                    <div className="h-[20.4px] w-[102px]">
                                        <img src={stars} alt="5 stars" className="w-full h-full" />
                                    </div>
                                </div>

                                {/* User Info */}
                                <div className="flex gap-2 items-center">
                                    <div className="w-[60px] h-[60px] rounded-full overflow-hidden">
                                        <img
                                            src={testimonial.avatar}
                                            alt={testimonial.author}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <p className="text-[18px] leading-[1.4] font-medium text-black">
                                        {testimonial.author}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Navigation Buttons */}
                <div className="flex gap-3 items-center justify-center">
                    {/* Previous Button */}
                    <button
                        onClick={handlePrev}
                        disabled={isAtStart}
                        className={`p-[10px] rounded-md w-[40px] h-[40px] flex items-center justify-center transition-colors ${isAtStart
                            ? 'bg-[#dfddea] cursor-not-allowed'
                            : 'bg-white border border-[#e4e4e7] hover:bg-gray-50'
                            }`}
                        aria-label="Previous testimonial"
                    >
                        <img src={chevronLeft} alt="Previous" className="w-4 h-4" />
                    </button>

                    {/* Next Button */}
                    <button
                        onClick={handleNext}
                        disabled={isAtEnd}
                        className={`p-[10px] rounded-md w-[40px] h-[40px] flex items-center justify-center transition-colors ${isAtEnd
                            ? 'bg-[#dfddea] cursor-not-allowed'
                            : 'bg-white border border-[#e4e4e7] hover:bg-gray-50'
                            }`}
                        aria-label="Next testimonial"
                    >
                        <img src={chevronLeft} alt="Next" className="w-4 h-4 rotate-180" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default TestimonialsSection;

import React, { useState } from 'react';
import testimonialUser1 from '../../assets/images/testimonial-user.png';
import testimonialUser2 from '../../assets/images/testimonial-user-2.png';
import testimonialUser3 from '../../assets/images/testimonial-user-3.png';
import stars from '../../assets/images/stars.svg';
import chevronLeft from '../../assets/images/chevron-left.svg';
import inciderLogo from '../../assets/images/incider.svg';
import mediumLogo from '../../assets/images/medium.svg';
import newlifeLogo from '../../assets/images/newlife.svg';
import yahooFinanceLogo from '../../assets/images/yahoo_finance.svg';
import styles from './TestimonialCard.module.scss';

interface Testimonial {
    text: string;
    author: string;
    avatar: string;
}

const TestimonialsSection: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [touchStart, setTouchStart] = useState<number | null>(null);
    const [touchEnd, setTouchEnd] = useState<number | null>(null);
    const [isDragging, setIsDragging] = useState(false);
    const [dragOffset, setDragOffset] = useState(0);

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
        { name: "Business Insider", width: "115px", src: inciderLogo },
        { name: "Medium", width: "208px", src: mediumLogo },
        { name: "Newsfile", width: "152px", src: newlifeLogo },
        { name: "Yahoo! Finance", width: "148px", src: yahooFinanceLogo }
    ];

    const cardsToShow = 3;
    const maxIndex = testimonials.length - cardsToShow;

    // Minimum swipe distance (in px) to trigger navigation
    const minSwipeDistance = 50;

    const handlePrev = () => {
        setCurrentIndex((prev) => Math.max(0, prev - 1));
    };

    const handleNext = () => {
        setCurrentIndex((prev) => Math.min(maxIndex, prev + 1));
    };

    const onTouchStart = (e: React.TouchEvent) => {
        setTouchEnd(null);
        setTouchStart(e.targetTouches[0].clientX);
        setIsDragging(true);
    };

    const onTouchMove = (e: React.TouchEvent) => {
        if (!touchStart) return;

        const currentTouch = e.targetTouches[0].clientX;
        setTouchEnd(currentTouch);

        // Calculate the drag distance
        const diff = currentTouch - touchStart;

        // Apply drag offset with boundaries
        const maxDrag = currentIndex === 0 ? 0 : -Infinity;
        const minDrag = currentIndex === maxIndex ? 0 : Infinity;

        setDragOffset(Math.max(maxDrag, Math.min(minDrag, diff)));
    };

    const onTouchEnd = () => {
        setIsDragging(false);
        setDragOffset(0);

        if (!touchStart || !touchEnd) return;

        const distance = touchStart - touchEnd;
        const isLeftSwipe = distance > minSwipeDistance;
        const isRightSwipe = distance < -minSwipeDistance;

        if (isLeftSwipe && currentIndex < maxIndex) {
            handleNext();
        } else if (isRightSwipe && currentIndex > 0) {
            handlePrev();
        }
    };

    const isAtStart = currentIndex === 0;
    const isAtEnd = currentIndex === maxIndex;

    return (
        <div className={styles.container}>
            {/* Company Logos Section */}
            <div className={styles.companyLogos}>
                {companyLogos.map((logo, index) => (
                    <div key={index} className={styles.logos}>
                        <img src={logo.src} alt="" />
                    </div>
                ))}
            </div>

            {/* Carousel Container */}
            <div className={styles.carousel}>
                {/* Testimonial Cards - Overflow Container */}
                <div
                    className={styles.cardsContainer}
                    onTouchStart={onTouchStart}
                    onTouchMove={onTouchMove}
                    onTouchEnd={onTouchEnd}
                >
                    <div
                        className={styles.cardsTrack}
                        data-dragging={isDragging}
                        style={{
                            transform: `translateX(${dragOffset - (currentIndex * (244.67 + 32))}px)`,
                            transition: isDragging ? 'none' : undefined
                        }}
                    >
                        {testimonials.map((testimonial, index) => (
                            <div
                                key={index}
                                className={styles.card}
                            >
                                {/* Testimonial Content */}
                                <div className={styles.cardContent}>
                                    <p className={styles.testimonialText}>
                                        {testimonial.text}
                                    </p>
                                    {/* Stars */}
                                    <div className={styles.stars}>
                                        <img src={stars} alt="5 stars" />
                                    </div>
                                </div>

                                {/* User Info */}
                                <div className={styles.userInfo}>
                                    <div className={styles.avatar}>
                                        <img
                                            src={testimonial.avatar}
                                            alt={testimonial.author}
                                        />
                                    </div>
                                    <p className={styles.author}>
                                        {testimonial.author}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Navigation Buttons */}
                <div className={styles.navigation}>
                    {/* Previous Button */}
                    <button
                        onClick={handlePrev}
                        disabled={isAtStart}
                        className={styles.navButton}
                        aria-label="Previous testimonial"
                    >
                        <img src={chevronLeft} alt="Previous" />
                    </button>

                    {/* Next Button */}
                    <button
                        onClick={handleNext}
                        disabled={isAtEnd}
                        className={styles.navButton}
                        aria-label="Next testimonial"
                    >
                        <img src={chevronLeft} alt="Next" className={styles.rotate} />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default TestimonialsSection;

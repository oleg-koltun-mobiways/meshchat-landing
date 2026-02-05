import { createFileRoute } from '@tanstack/react-router';
import { useState, useEffect, useRef } from 'react';
import twitterIcon from '../assets/icons/twitter.svg';
import linkedinIcon from '../assets/icons/linkedin.svg';
import facebookIcon from '../assets/icons/facebook.svg';
import tiktokIcon from '../assets/images/TikTok.svg';
import snapchatIcon from '../assets/images/Snapchat.svg';
import checkIcon from '../assets/icons/check-circle.svg';
import circleDashedIcon from '../assets/icons/circle-dashed.svg';
import loaderCircleIcon from '../assets/icons/loader-circle.svg';
import styles from './search.module.scss';
import SearchBar from "../components/SearchBar";
import { GetReportForm, GetReportFormRef } from '../components/GetReportForm/GetReportForm';
import Footer from "../components/Footer";

type SearchParams = {
    search?: string;
};

const animationTime = 10000;

export const Route = createFileRoute('/search')({
    component: SearchComponent,
    validateSearch: (search: Record<string, unknown>): SearchParams => {
        return {
            search: (search.search as string) || '',
        };
    },
});

function SearchComponent() {
    const { search: searchParam } = Route.useSearch();
    // const navigate = Route.useNavigate();
    const [searchQuery, setSearchQuery] = useState(searchParam || '');
    const [isSearching, setIsSearching] = useState(!!searchParam);
    const [animationStage, setAnimationStage] = useState(0);
    const formRef = useRef<GetReportFormRef>(null);

    useEffect(() => {
        setSearchQuery(searchParam || '');
        if (searchParam) {
            setIsSearching(true);
            setAnimationStage(0);

            const timers: NodeJS.Timeout[] = [];

            timers.push(setTimeout(() => setAnimationStage(1), 1000));
            timers.push(setTimeout(() => setAnimationStage(2), 5000));
            timers.push(setTimeout(() => setAnimationStage(3), 8000));
            timers.push(setTimeout(() => setAnimationStage(4), 10000));
            timers.push(setTimeout(() => setAnimationStage(5), 11000));
            timers.push(setTimeout(() => setAnimationStage(6), 14000));

            const finalTimer = setTimeout(() => {
                // Optional: handle end of search
            }, animationTime + 5000);

            return () => {
                timers.forEach(clearTimeout);
                clearTimeout(finalTimer);
            };
        } else {
            setIsSearching(false);
            setAnimationStage(0);
        }
    }, [searchParam]);

    // Auto-scroll to bottom when animation finishes (stage 6)
    useEffect(() => {
        if (animationStage === 5) {
            // Add a small delay to let the form render with its slide-up animation
            const scrollTimer = setTimeout(() => {
                const targetPosition = document.documentElement.scrollHeight;
                const startPosition = window.pageYOffset;
                const distance = targetPosition - startPosition;
                const duration = 1500; // 1.8 seconds for slower, smoother scroll
                let startTime: number | null = null;

                // Easing function for smooth acceleration and deceleration
                const easeInOutCubic = (t: number): number => {
                    return t < 0.5
                        ? 4 * t * t * t
                        : 1 - Math.pow(-2 * t + 2, 3) / 2;
                };

                const animation = (currentTime: number) => {
                    if (startTime === null) startTime = currentTime;
                    const timeElapsed = currentTime - startTime;
                    const progress = Math.min(timeElapsed / duration, 1);
                    const ease = easeInOutCubic(progress);

                    window.scrollTo(0, startPosition + distance * ease);

                    if (progress < 1) {
                        requestAnimationFrame(animation);
                    } else {
                        // Focus input after scroll completes
                        setTimeout(() => {
                            formRef.current?.focusInput();
                        }, 100);
                    }
                };

                requestAnimationFrame(animation);
            }, 200);

            return () => clearTimeout(scrollTimer);
        }
    }, [animationStage]);

    // const handleSearchClick = () => {
    //     if (searchQuery.trim()) {
    //         navigate({
    //             to: '/search',
    //             search: { search: searchQuery.trim() },
    //         });
    //     }
    // };

    const getStepState = (stepIndex: number) => {
        if (animationStage === 0) {
            return { icon: circleDashedIcon, className: styles.stepIconSpinning };
        }

        if (stepIndex === 0) { // Analyzing logic part
            if (animationStage >= 2) {
                return { icon: checkIcon, className: styles.stepIconPulsing };
            } else if (animationStage >= 1) {
                return { icon: loaderCircleIcon, className: styles.stepIconSpinAndPulse };
            }
        } else if (stepIndex === 1) { // Evaluating answers
            if (animationStage >= 3) {
                return { icon: checkIcon, className: styles.stepIconPulsing };
            } else if (animationStage >= 2) {
                return { icon: loaderCircleIcon, className: styles.stepIconSpinAndPulse };
            }
        } else if (stepIndex === 2) { // Calculating final score
            if (animationStage >= 4) {
                return { icon: checkIcon, className: styles.stepIconPulsing };
            } else if (animationStage >= 3) {
                return { icon: loaderCircleIcon, className: styles.stepIconSpinAndPulse };
            }
        }

        return { icon: circleDashedIcon, className: styles.stepIconSpinning };
    };

    const step1 = getStepState(0);
    const step2 = getStepState(1);
    const step3 = getStepState(2);

    return (
        <div className={styles.page}>
            <div className={styles.searchSection}>
                <div className={styles.searchContainer}>
                    <SearchBar value={searchQuery} />
                </div>

                {isSearching && searchParam && (
                    <div className={styles.resultsSection}>
                        <div className={styles.profileCard}>
                            <div className={`${styles.profileAvatar} ${animationStage >= 0 && animationStage < 5 ? styles.shimmerActive : ''}`}></div>
                            <div className={styles.profileInfo}>
                              <p className={styles.profileTitle}>{animationStage < 5 ? 'Angelina' : 'Angelina Jolie, actress, filmmaker'}</p>
	                            <p className={` ${styles.profileDescription} ${animationStage < 5 ? styles.shimmerActive : ''}`}>
		                            {animationStage < 5 ? '' : 'humanitarian known as a ...'}
	                            </p>
                            </div>
                        </div>

                        <div className={styles.loadingContainer}>
                            <div className={styles.loadingHeader}>
                                <div className={styles.socialIcons}>
                                    <img src={twitterIcon} alt="Twitter/X" className={styles.socialIcon} />
                                    <img src={linkedinIcon} alt="LinkedIn" className={styles.socialIcon} />
                                    <img src={tiktokIcon} alt="TikTok" className={styles.socialIcon} />
                                    <img src={snapchatIcon} alt="Snapchat" className={styles.socialIcon} />
                                    <img src={facebookIcon} alt="Facebook" className={styles.socialIcon} />
                                </div>

                                <span className={styles.loadingTitle}>
                                    Searching "{searchParam}" Getting your results...
                                </span>
                            </div>

                            <div className={styles.progressBar}>
                                <div
                                    className={styles.progressFill}
                                    style={{ animationDuration: `${animationTime}ms` }}
                                ></div>
                            </div>

                            <div className={styles.stepsList}>
                                <div className={styles.stepItem}>
                                    <img src={step1.icon} alt="Step 1" className={step1.className} />
                                    <span className={animationStage >= 2 ? styles.stepText : styles.stepTextPending}>
                                        Analyzing logic part
                                    </span>
                                </div>
                                <div className={styles.stepItem}>
                                    <img src={step2.icon} alt="Step 2" className={step2.className} />
                                    <span className={animationStage >= 3 ? styles.stepText : styles.stepTextPending}>
                                        Evaluating answers...
                                    </span>
                                </div>
                                <div className={styles.stepItem}>
                                    <img src={step3.icon} alt="Step 3" className={step3.className} />
                                    <span className={animationStage >= 4 ? styles.stepText : styles.stepTextPending}>
                                        Calculating final score
                                    </span>
                                </div>
                            </div>

                            {animationStage >= 5 && (
                                <div style={{ marginTop: '24px', width: '100%', display: 'flex', justifyContent: 'center' }}>
                                    <GetReportForm
                                        ref={formRef}
                                        onGetReport={(data) => {
                                            console.log('Get Report requested:', data);
                                            // TODO: Implement actual report handling
                                        }}
                                    />
                                </div>
                            )}
                        </div>
                    </div>
                )}
            </div>
	          <Footer/>
        </div>
    );
}

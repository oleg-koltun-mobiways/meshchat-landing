import { createFileRoute } from '@tanstack/react-router';
import React, { useState, useEffect } from 'react';
import twitterIcon from '../assets/icons/twitter.svg';
import linkedinIcon from '../assets/icons/linkedin.svg';
import facebookIcon from '../assets/icons/facebook.svg';
import checkIcon from '../assets/icons/check-circle.svg';
import circleDashedIcon from '../assets/icons/circle-dashed.svg';
import loaderCircleIcon from '../assets/icons/loader-circle.svg';
import styles from './search.module.scss';
import SearchBar from "../components/SearchBar";

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
    const navigate = Route.useNavigate();
    const [searchQuery, setSearchQuery] = useState(searchParam || '');
    const [isSearching, setIsSearching] = useState(!!searchParam);
    const [animationStage, setAnimationStage] = useState(0);

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
            timers.push(setTimeout(() => setAnimationStage(5), 12000));

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

    const handleSearchClick = () => {
        if (searchQuery.trim()) {
            navigate({
                to: '/search',
                search: { search: searchQuery.trim() },
            });
        }
    };

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
                            <div className={styles.profileAvatar}></div>
                            <p className={styles.profileName}>{searchParam}</p>
                        </div>

                        <div className={styles.loadingContainer}>
                            <div className={styles.socialIcons}>
                                <img src={twitterIcon} alt="Twitter/X" className={styles.socialIcon} />
                                <img src={linkedinIcon} alt="LinkedIn" className={styles.socialIcon} />
                                <img src={facebookIcon} alt="Facebook" className={styles.socialIcon} />
                            </div>

                            <p className={styles.loadingTitle}>
                                Searching "{searchParam}" Getting your results...
                            </p>

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
                                <p className={styles.securityText}>
                                    Ensure your data is secure with your report
                                </p>
                            )}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

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

    useEffect(() => {
        setSearchQuery(searchParam || '');
        if (searchParam) {
            // Simulate search process
            setIsSearching(true);
            const timer = setTimeout(() => {
                setIsSearching(false);
            }, 100000);
            return () => clearTimeout(timer);
        } else {
            setIsSearching(false);
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

    // const handleClearClick = () => {
    //     setSearchQuery('');
    // };
    //
    // const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    //     if (e.key === 'Enter') {
    //         handleSearchClick();
    //     }
    // };

    return (
        <div className={styles.page}>
            <div className={styles.searchSection}>
                <div className={styles.searchContainer}>
                    {/* Search Input */}
                    {/*<div className={styles.searchInputWrapper}>*/}
                    {/*    <div className={styles.searchInputContainer}>*/}
                    {/*        <input*/}
                    {/*            type="text"*/}
                    {/*            value={searchQuery}*/}
                    {/*            onChange={(e) => setSearchQuery(e.target.value)}*/}
                    {/*            onKeyPress={handleKeyPress}*/}
                    {/*            placeholder="Angelina Jolie, USA, actress"*/}
                    {/*            className={styles.searchInput}*/}
                    {/*        />*/}
                    {/*        {searchQuery && (*/}
                    {/*            <button*/}
                    {/*                onClick={handleClearClick}*/}
                    {/*                className={styles.clearButton}*/}
                    {/*                aria-label="Clear search"*/}
                    {/*            >*/}
                    {/*                <img src={closeIcon} alt="Clear" className={styles.icon} />*/}
                    {/*            </button>*/}
                    {/*        )}*/}
                    {/*    </div>*/}
                    {/*    <button*/}
                    {/*        onClick={handleSearchClick}*/}
                    {/*        className={styles.searchButton}*/}
                    {/*        aria-label="Search"*/}
                    {/*    >*/}
                    {/*        <img src={searchIcon} alt="Search" className={styles.icon} />*/}
                    {/*    </button>*/}
                    {/*</div>*/}
                    <SearchBar value={searchQuery} />
                </div>

                {/* Search Results / Loading State */}
                {isSearching && searchParam && (
                    <div className={styles.resultsSection}>
                        {/* Profile Card */}
                        <div className={styles.profileCard}>
                            <div className={styles.profileAvatar}></div>
                            <p className={styles.profileName}>{searchParam}</p>
                        </div>

                        {/* Loading State */}
                        <div className={styles.loadingContainer}>
                            <div className={styles.socialIcons}>
                                <img src={twitterIcon} alt="Twitter/X" className={styles.socialIcon} />
                                <img src={linkedinIcon} alt="LinkedIn" className={styles.socialIcon} />
                                <img src={facebookIcon} alt="Facebook" className={styles.socialIcon} />
                            </div>

                            <p className={styles.loadingTitle}>
                                Searching "Angelina Jolie" Getting your results...
                            </p>

                            <div className={styles.progressBar}>
                                <div className={styles.progressFill}></div>
                            </div>

                            <div className={styles.stepsList}>
                                <div className={styles.stepItem}>
                                    <img src={checkIcon} alt="Complete" className={styles.stepIconPulsing} />
                                    <span className={styles.stepText}>Analyzing logic part</span>
                                </div>
                                <div className={styles.stepItem}>
                                    <img src={loaderCircleIcon} alt="Loading" className={styles.stepIconSpinAndPulse} />
                                    <span className={styles.stepTextPending}>Evaluating answers...</span>
                                </div>
                                <div className={styles.stepItem}>
                                    <img src={circleDashedIcon} alt="Pending" className={styles.stepIconSpinning} />
                                    <span className={styles.stepTextPending}>Calculating final score</span>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

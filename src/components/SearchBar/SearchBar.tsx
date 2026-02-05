import React from 'react';
import searchIcon from '../../assets/icons/close.svg'; // Note: close.svg actually contains search icon
// import closeIcon from '../../assets/icons/search.svg'; // Note: search.svg actually contains close icon
import styles from './SearchBar.module.scss';

interface SearchBarProps {
    value: string;
    placeholder?: string;
    helperText?: string;
    className?: string;
}

const SearchBar: React.FC<SearchBarProps> = ({
    value,
    placeholder = "Angelina Jolie, USA, actress",
    helperText = "Enter full name and any known details to start search",
    className = ''
}) => {
    return (
        <div className={`${styles.container} ${className}`}>
            <div className={styles.searchBar}>
                <div className={styles.inputContainer}>
                    <div className={styles.textWrapper}>
                        <p className={styles.inputText}>
                            {value || placeholder}
                        </p>
                    </div>
                    {/*<div className={styles.closeIcon}>*/}
                    {/*    <img src={closeIcon} alt="" className={styles.icon} />*/}
                    {/*</div>*/}
                </div>
                <div className={styles.searchIcon}>
                    <img src={searchIcon} alt="" className={styles.icon} />
                </div>
            </div>
            <p className={styles.helperText}>{helperText}</p>
        </div>
    );
};

export default SearchBar;

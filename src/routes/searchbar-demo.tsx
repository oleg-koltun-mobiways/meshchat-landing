import { createFileRoute } from '@tanstack/react-router';
import SearchBar from '../components/SearchBar';
import styles from './searchbar-demo.module.scss';

export const Route = createFileRoute('/searchbar-demo')({
    component: SearchBarDemo,
});

function SearchBarDemo() {
    const searchValue = 'Angelina Jolie, USA, actress';

    return (
        <div className={styles.demoContainer}>
            <h1 className={styles.title}>SearchBar Component Demo</h1>

            <div className={styles.demoSection}>
                <h2 className={styles.sectionTitle}>With Value</h2>
                <SearchBar
                    value={searchValue}
                />
            </div>

            <div className={styles.demoSection}>
                <h2 className={styles.sectionTitle}>Empty (showing placeholder)</h2>
                <SearchBar
                    value=""
                />
            </div>

            <div className={styles.demoSection}>
                <h2 className={styles.sectionTitle}>Focused State</h2>
                <SearchBar
                    value=""
                />
            </div>

            <div className={styles.comparisonSection}>
                <h2 className={styles.sectionTitle}>Figma Design Reference</h2>
                <img
                    src="data:image/svg+xml,%3Csvg width='500' height='100' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='500' height='100' fill='%23f5e6e8'/%3E%3Ctext x='250' y='50' text-anchor='middle' fill='%23999' font-family='Arial'%3EFigma Design Screenshot%3C/text%3E%3C/svg%3E"
                    alt="Figma design placeholder"
                    className={styles.figmaImage}
                />
                <p className={styles.note}>
                    Compare the component above with the Figma design to verify visual accuracy
                </p>
            </div>
        </div>
    );
}

// Utility function to scroll to search section and focus input
export const scrollToSearch = () => {
    const searchSection = document.getElementById('search-section');
    if (searchSection) {
        searchSection.scrollIntoView({ behavior: 'smooth', block: 'center' });

        // Find and focus the input after scroll
        setTimeout(() => {
            const searchInput = searchSection.querySelector('input');
            if (searchInput) {
                searchInput.focus();
            }
        }, 500);
    }
};

import { render, screen } from '@testing-library/react';
import { describe, it, expect } from '@jest/globals';
import Footer from './Footer';

describe('Footer', () => {
    it('renders the logo', () => {
        render(<Footer />);
        const logo = screen.getByAltText('Mesh Chat AI Logo');
        expect(logo).toBeInTheDocument();
    });

    it('renders the brand name', () => {
        render(<Footer />);
        const brandName = screen.getByText(/Mesh chat AI/i);
        expect(brandName).toBeInTheDocument();
    });

    it('renders the current year', () => {
        render(<Footer />);
        const currentYear = new Date().getFullYear().toString();
        expect(screen.getByText(currentYear)).toBeInTheDocument();
    });

    it('has correct footer tag', () => {
        const { container } = render(<Footer />);
        const footer = container.querySelector('footer');
        expect(footer).toBeInTheDocument();
    });
});

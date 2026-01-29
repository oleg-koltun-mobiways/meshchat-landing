import { render, screen } from '@testing-library/react';
import { describe, it, expect } from '@jest/globals';
import Header from './Header';

describe('Header', () => {
    it('renders the logo', () => {
        render(<Header />);
        const logo = screen.getByAltText('Mesh Chat AI Logo');
        expect(logo).toBeInTheDocument();
    });

    it('renders the brand name', () => {
        render(<Header />);
        const brandName = screen.getByText(/Mesh chat AI/i);
        expect(brandName).toBeInTheDocument();
    });

    it('renders the CTA button', () => {
        render(<Header />);
        const ctaButton = screen.getByRole('button', { name: /Find Digital Profile/i });
        expect(ctaButton).toBeInTheDocument();
    });

    it('has correct styling classes', () => {
        const { container } = render(<Header />);
        const header = container.querySelector('header');
        expect(header).toHaveClass('fixed', 'top-0', 'z-50');
    });
});

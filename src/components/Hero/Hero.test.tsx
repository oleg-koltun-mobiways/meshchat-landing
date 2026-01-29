import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, jest } from '@jest/globals';
import Hero from './Hero';

describe('Hero', () => {
    it('renders the main heading', () => {
        render(<Hero />);
        const heading = screen.getByText(/Discover Anyone's Digital Profile Instantly/i);
        expect(heading).toBeInTheDocument();
    });

    it('renders all feature items', () => {
        render(<Hero />);
        expect(screen.getByText(/Public social profiles in one place/i)).toBeInTheDocument();
        expect(screen.getByText(/Personality & interests/i)).toBeInTheDocument();
        expect(screen.getByText(/Digital Footprint/i)).toBeInTheDocument();
    });

    it('renders search input with placeholder', () => {
        render(<Hero />);
        const input = screen.getByPlaceholderText(/Angelina Jolie/i);
        expect(input).toBeInTheDocument();
    });

    it('updates input value on change', () => {
        render(<Hero />);
        const input = screen.getByPlaceholderText(/Angelina Jolie/i) as HTMLInputElement;
        fireEvent.change(input, { target: { value: 'John Doe' } });
        expect(input.value).toBe('John Doe');
    });

    it('renders search button', () => {
        render(<Hero />);
        const button = screen.getByRole('button', { name: /Search/i });
        expect(button).toBeInTheDocument();
    });

    it('calls search handler on button click', () => {
        const consoleSpy = jest.spyOn(console, 'log');
        render(<Hero />);
        const input = screen.getByPlaceholderText(/Angelina Jolie/i);
        const button = screen.getByRole('button', { name: /Search/i });

        fireEvent.change(input, { target: { value: 'Test User' } });
        fireEvent.click(button);

        expect(consoleSpy).toHaveBeenCalledWith('Search for:', 'Test User');
        consoleSpy.mockRestore();
    });

    it('renders trust badges', () => {
        render(<Hero />);
        expect(screen.getByText(/Trusted by 97,000\+ Clients/i)).toBeInTheDocument();
        expect(screen.getByText(/1M\+ People Searched/i)).toBeInTheDocument();
    });

    it('renders user avatars', () => {
        render(<Hero />);
        const avatars = screen.getAllByAltText(/User \d+/);
        expect(avatars).toHaveLength(6);
    });
});

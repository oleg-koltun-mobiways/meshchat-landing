import { render, screen } from '@testing-library/react';
import { describe, it, expect } from '@jest/globals';
import ResultCard from './ResultCard';

describe('ResultCard', () => {
    it('renders success message', () => {
        render(<ResultCard />);
        expect(screen.getByText(/Your report is ready!/i)).toBeInTheDocument();
    });

    it('renders user name and location', () => {
        render(<ResultCard name="Jane Doe" location="New York, USA" />);
        expect(screen.getByText('Jane Doe')).toBeInTheDocument();
        expect(screen.getByText('New York, USA')).toBeInTheDocument();
    });

    it('renders default values when no props provided', () => {
        render(<ResultCard />);
        expect(screen.getByText('John Smith')).toBeInTheDocument();
        expect(screen.getByText('San Francisco, USA')).toBeInTheDocument();
    });

    it('renders data sources count', () => {
        render(<ResultCard dataSources={50} />);
        expect(screen.getByText(/Data Sources analyzed:/i)).toBeInTheDocument();
        expect(screen.getByText('50')).toBeInTheDocument();
    });

    it('renders social profiles section', () => {
        render(<ResultCard />);
        expect(screen.getByText(/Social profiles:/i)).toBeInTheDocument();
    });

    it('renders overview section', () => {
        render(<ResultCard />);
        expect(screen.getByText(/Overview:/i)).toBeInTheDocument();
        expect(screen.getByText(/His social media is filled/i)).toBeInTheDocument();
    });

    it('renders read more button', () => {
        render(<ResultCard />);
        const readMoreButton = screen.getByRole('button', { name: /Read more/i });
        expect(readMoreButton).toBeInTheDocument();
    });

    it('renders CTA heading', () => {
        render(<ResultCard />);
        expect(screen.getByText(/All in one clear report/i)).toBeInTheDocument();
    });

    it('renders user avatar with correct alt text', () => {
        render(<ResultCard name="Test User" />);
        const avatar = screen.getByAltText('Test User');
        expect(avatar).toBeInTheDocument();
    });
});

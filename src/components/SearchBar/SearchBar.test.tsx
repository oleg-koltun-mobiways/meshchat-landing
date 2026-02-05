import React from 'react';
import { render, screen } from '@testing-library/react';
import SearchBar from './SearchBar';

describe('SearchBar', () => {
    it('renders with default props', () => {
        const mockOnChange = jest.fn();
        render(<SearchBar value="" onChange={mockOnChange} />);

        expect(screen.getByText(/Enter full name and any known details to start search/i)).toBeInTheDocument();
    });

    it('renders with custom value', () => {
        const mockOnChange = jest.fn();
        render(<SearchBar value="John Doe" onChange={mockOnChange} />);

        expect(screen.getByText('John Doe')).toBeInTheDocument();
    });

    it('renders placeholder when value is empty', () => {
        const mockOnChange = jest.fn();
        render(<SearchBar value="" onChange={mockOnChange} />);

        expect(screen.getByText('Angelina Jolie, USA, actress')).toBeInTheDocument();
    });

    it('renders custom helper text', () => {
        const mockOnChange = jest.fn();
        render(
            <SearchBar
                value=""
                onChange={mockOnChange}
                helperText="Custom helper text"
            />
        );

        expect(screen.getByText('Custom helper text')).toBeInTheDocument();
    });
});

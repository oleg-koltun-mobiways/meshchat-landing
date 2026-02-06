import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import { GetReportForm } from './GetReportForm';

describe('GetReportForm', () => {
    const mockOnGetReport = jest.fn();

    beforeEach(() => {
        mockOnGetReport.mockClear();
    });

    test('renders form elements correctly', () => {
        render(<GetReportForm onGetReport={mockOnGetReport} />);

        expect(screen.getByText('Ensure your data is secure with your report.')).toBeInTheDocument();
        expect(screen.getByPlaceholderText('Enter your email')).toBeInTheDocument();
        expect(screen.getByText('I agree to the terms and conditions')).toBeInTheDocument();
        expect(screen.getByRole('button', { name: /get report/i })).toBeInTheDocument();
    });

    test('shows error validation for invalid email', async () => {
        render(<GetReportForm onGetReport={mockOnGetReport} />);

        const input = screen.getByPlaceholderText('Enter your email');
        const button = screen.getByRole('button', { name: /get report/i });

        fireEvent.change(input, { target: { value: 'invalid-email' } });
        fireEvent.click(button);

        await waitFor(() => {
            expect(screen.getByText('Please enter a valid email address')).toBeInTheDocument();
        });
        expect(mockOnGetReport).not.toHaveBeenCalled();
    });

    test('shows error validation for unchecked terms', async () => {
        render(<GetReportForm onGetReport={mockOnGetReport} />);

        const input = screen.getByPlaceholderText('Enter your email');
        const button = screen.getByRole('button', { name: /get report/i });

        fireEvent.change(input, { target: { value: 'test@example.com' } });
        // Checkbox starts unchecked by default
        fireEvent.click(button);

        await waitFor(() => {
            expect(screen.getByText('You must agree to the terms and conditions')).toBeInTheDocument();
        });
        expect(mockOnGetReport).not.toHaveBeenCalled();
    });

    test('validates successfully and calls onGetReport', async () => {
        render(<GetReportForm onGetReport={mockOnGetReport} />);

        const input = screen.getByPlaceholderText('Enter your email');
        const checkbox = screen.getByText('I agree to the terms and conditions'); // Label click toggles checkbox
        const button = screen.getByRole('button', { name: /get report/i });

        fireEvent.change(input, { target: { value: 'test@example.com' } });
        fireEvent.click(checkbox); // Agree
        fireEvent.click(button);

        await waitFor(() => {
            expect(mockOnGetReport).toHaveBeenCalledWith({
                email: 'test@example.com',
                agreed: true
            });
        });
    });
});

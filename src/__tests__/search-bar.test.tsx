// src/components/SearchBar.test.tsx

import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import SearchBar from '../components/search-bar'; // Adjust the import based on your folder structure

describe('SearchBar Component', () => {
    const mockOnSearchChange = jest.fn(); // Create a mock function for the onChange handler

    beforeEach(() => {
        // Clear mock before each test
        mockOnSearchChange.mockClear();
    });

    test('renders search input with correct placeholder and value', () => {
        render(<SearchBar search="test" onSearchChange={mockOnSearchChange} />);

        const inputElement = screen.getByLabelText('Search for a country');
        expect(inputElement).toBeInTheDocument(); // Check if the input is in the document
        expect(inputElement).toHaveAttribute('placeholder', 'Search for a country...'); // Check placeholder
        expect(inputElement).toHaveValue('test'); // Check initial value
    });

    test('calls onSearchChange function when input value changes', () => {
        render(<SearchBar search="" onSearchChange={mockOnSearchChange} />);

        const inputElement = screen.getByLabelText('Search for a country');

        // Simulate changing the input value
        fireEvent.change(inputElement, { target: { value: 'United States' } });

        // Check if the mock function was called
        expect(mockOnSearchChange).toHaveBeenCalledTimes(1);

        // Check if the function was called with the right event
        expect(mockOnSearchChange).toHaveBeenCalledWith(expect.any(Object)); // Check it was called with an event
    });
});

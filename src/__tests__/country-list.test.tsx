/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { render, screen } from '@testing-library/react';
import CountryList from '../components/country-list'; // Update the path according to your file structure
import '@testing-library/jest-dom'; // For better assertions

// Mock CountryCard to isolate the test for CountryList
jest.mock('../components/country-card', () => ({ country }: { country: any }) => (
    <div data-testid="country-card">{country.name.common}</div>
));

describe('CountryList Component', () => {
    const mockCountries = [
        {
            cca3: 'USA',
            name: {
                official: 'United States of America',
                common: 'USA',
            },
            flags: {
                png: 'https://example.com/flag-usa.png',
            },
            capital: 'Washington D.C.',
            region: 'Americas',
            population: 331000000,
        },
        {
            cca3: 'FRA',
            name: {
                official: 'French Republic',
                common: 'France',
            },
            flags: {
                png: 'https://example.com/flag-france.png',
            },
            capital: 'Paris',
            region: 'Europe',
            population: 67000000,
        },
    ];

    test('renders a list of countries with the correct aria-label', () => {
        render(<CountryList countries={mockCountries} />);

        // Check if the list with role="list" and aria-label is present
        const countryList = screen.getByRole('list', { name: /Country list/i });
        expect(countryList).toBeInTheDocument();
    });

    test('renders the correct number of list items', () => {
        render(<CountryList countries={mockCountries} />);

        // Check that the number of rendered list items matches the number of countries
        const countryListItems = screen.getAllByRole('listitem');
        expect(countryListItems).toHaveLength(mockCountries.length);
    });

    test('renders each CountryCard with the correct country name', () => {
        render(<CountryList countries={mockCountries} />);

        // Check that each CountryCard renders the correct country common name
        mockCountries.forEach((country) => {
            expect(screen.getByText(country.name.common)).toBeInTheDocument();
        });
    });
});

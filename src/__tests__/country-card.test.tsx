import React from 'react';
import { render, screen } from '@testing-library/react';
import CountryCard from '../components/country-card'; // Adjust this import path as per your directory structure

describe('CountryCard Component', () => {
    const mockCountry = {
        name: {
            official: 'United States of America',
            common: 'USA',
        },
        flags: {
            png: 'https://example.com/flag.png',
        },
        flag: '🇺🇸',
        cca3: 'USA',
        capital: 'Washington D.C.',
        region: 'Americas',
        population: 331000000,
    };

    const mockShortCountry = {
        name: {
            official: 'France',
            common: 'France',
        },
        flags: {
            png: 'https://example.com/flag.png',
        },
        flag: '🇫🇷',
        cca3: 'FRA',
        capital: 'Paris',
        region: 'Europe',
        population: 67000000,
    };

    test('renders the country card with truncated official name when it exceeds 12 characters', () => {
        render(<CountryCard country={mockCountry} />);

        // Verify that the common name and truncated official name are displayed
        const countryTitle = screen.getByLabelText(mockCountry.name.common);
        expect(countryTitle).toHaveTextContent('USA : United State...');

        // Check other country information
        expect(screen.getByText('Capital:')).toBeInTheDocument();
        expect(screen.getByText('Washington D.C.')).toBeInTheDocument();
        expect(screen.getByText('Region:')).toBeInTheDocument();
        expect(screen.getByText('Americas')).toBeInTheDocument();
        expect(screen.getByText('Population:')).toBeInTheDocument();
        expect(screen.getByText('331,000,000')).toBeInTheDocument();
    });

    test('renders the country card with full official name if it is shorter than 12 characters', () => {
        render(<CountryCard country={mockShortCountry} />);

        // Verify that the common name and full official name are displayed
        const countryTitle = screen.getByLabelText(mockShortCountry.name.common);
        expect(countryTitle).toHaveTextContent('France : France');

        // Check other country information
        expect(screen.getByText('Capital:')).toBeInTheDocument();
        expect(screen.getByText('Paris')).toBeInTheDocument();
        expect(screen.getByText('Region:')).toBeInTheDocument();
        expect(screen.getByText('Europe')).toBeInTheDocument();
        expect(screen.getByText('Population:')).toBeInTheDocument();
        expect(screen.getByText('67,000,000')).toBeInTheDocument();
    });

    test('renders the flag image and alt text correctly', () => {
        render(<CountryCard country={mockCountry} />);

        // Check that the flag image is rendered with the correct alt text
        const flagImage = screen.getByAltText(`Flag of ${mockCountry.name.official}`);
        expect(flagImage).toBeInTheDocument();
        expect(flagImage).toHaveAttribute('src', mockCountry.flags.png);
    });
});

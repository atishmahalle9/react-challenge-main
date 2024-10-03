/* eslint-disable */
import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../store/store'; // Import the default store
import App from '../App'; // Ensure the path is correct
import { fetchCountries } from '../store/countrySlice'; // Your async action

// Mock components
jest.mock('../components/search-bar', () => ({ search, onSearchChange }) => (
    <input
        data-testid="search-input"
        value={search}
        onChange={onSearchChange}
    />
));
jest.mock('../components/loading', () => () => <div>Loading...</div>);
jest.mock('../components/error-message', () => ({ message }) => <div>{message}</div>);
jest.mock('../components/no-result', () => ({ search }) => <div>No results for "{search}"</div>);
jest.mock('../components/country-list', () => ({ countries }) => (
    <ul>
        {countries.map((country) => (
            <li key={country.cca3}>{country.name.official}</li>
        ))}
    </ul>
));

// Test cases
describe('App Component', () => {
    beforeEach(() => {
        // Reset the store before each test
        store.getState = jest.fn().mockReturnValue({
            countries: {
                countries: [],
                loading: false,
                error: null,
            },
        });
        store.dispatch = jest.fn(); // Mock dispatch function
    });

    test('renders search input and title', () => {
        render(
            <Provider store={store}>
                <App />
            </Provider>
        );

        expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Country Search');
        expect(screen.getByTestId('search-input')).toBeInTheDocument();
    });


    test('displays error message when there is an error', () => {
        // Mock the state to simulate an error
        store.getState = jest.fn().mockReturnValue({
            countries: {
                countries: [],
                loading: false,
                error: 'Error fetching countries',
            },
        });

        render(
            <Provider store={store}>
                <App />
            </Provider>
        );

        expect(screen.getByText('Error fetching countries')).toBeInTheDocument();
    });

    test('displays country list when countries are fetched', async () => {
        // Mock the state to simulate fetching countries
        store.getState = jest.fn().mockReturnValue({
            countries: {
                countries: [{ cca3: 'USA', name: { official: 'United States of America' } }],
                loading: false,
                error: null,
            },
        });

        render(
            <Provider store={store}>
                <App />
            </Provider>
        );

        expect(await screen.findByText('United States of America')).toBeInTheDocument();
    });

    test('displays no results message when no countries found', async () => {
        render(
            <Provider store={store}>
                <App />
            </Provider>
        );

        // Simulate a search input
        fireEvent.change(screen.getByTestId('search-input'), { target: { value: 'NonExistentCountry' } });

        await waitFor(() => {
            expect(screen.getByText('No results for "NonExistentCountry"')).toBeInTheDocument();
        });
    });

});

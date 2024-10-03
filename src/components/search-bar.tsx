import React from 'react';

interface SearchBarProps {
    search: string;
    onSearchChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ search, onSearchChange }) => (
    <div className="search-bar">
        <label htmlFor="country-search" className="sr-only">
            Search for a country
        </label>
        <input
            type="text"
            id="country-search"
            aria-label="Search for a country"
            placeholder="Search for a country..."
            value={search}
            onChange={onSearchChange}
            autoComplete="off"
        />
    </div>
);

export default SearchBar;

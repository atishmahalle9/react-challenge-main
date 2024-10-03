/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import CountryCard from './country-card';

interface CountryListProps {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    countries: any[];
}

const CountryList: React.FC<CountryListProps> = ({ countries }) => (
    <div className="card-grid" role="list" aria-label="Country list">
        {countries.map((country: any) => (
            <div role="listitem" key={country.cca3}>
                <CountryCard key={country.cca3} country={country} />
            </div>
        ))}
    </div>
);

export default CountryList;

/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from 'react';
import CountryModal from './country-modal';


interface CountryCardProps {
    country: any;
}

const maxChars = 12;

const CountryCard: React.FC<CountryCardProps> = ({ country }) => {
    const officialName = country?.name.official
    const truncatedText = officialName.length > maxChars ? officialName.slice(0, maxChars) + '...' : officialName;

    const [selectedCountry, setSelectedCountry] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleCountrySelect = (country: any) => {
        console.log(country)
        setSelectedCountry(country);
        setIsModalOpen(true); // Open the modal
    };

    // Handler to close the modal
    const handleCloseModal = () => {
        setIsModalOpen(false);
        setSelectedCountry(null);
    };

    return (
        <>
            <div className="country-card" role="button" tabIndex={0} aria-labelledby={`country-${country.cca3}`} onClick={() => handleCountrySelect(country)}>
                <div className="flag">
                    <span role="img" aria-label={`Flag of ${country.name.official}`}>{country.flag}</span>
                    <img src={country?.flags.png} alt={`Flag of ${country.name.official}`} />
                </div>
                <h3 id={`country-${country.cca3}`} aria-label={country.name.common}>
                    {country.name.common} : {truncatedText}
                </h3>
                <p><strong>Capital:</strong> {country.capital || 'N/A'}</p>
                <p><strong>Region:</strong> {country.region}</p>
                <p><strong>Population:</strong> {country.population.toLocaleString()}</p>


            </div>

            {/* Render the Modal when a country is selected */}
            {isModalOpen && selectedCountry && (
                <CountryModal country={selectedCountry} onClose={handleCloseModal} />
            )}
        </>

    )
}



export default CountryCard;

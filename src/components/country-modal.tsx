import React from 'react';

const CountryModal = ({ country, onClose }) => {
    console.log(country.latlng[1], '1', country)
    const mapUrl = `https://www.openstreetmap.org/export/embed.html?bbox=${country.latlng[1] - 0.1},${country.latlng[0] - 0.1},${country.latlng[1] + 0.1},${country.latlng[0] + 0.1}&layer=mapnik&marker=${country.latlng[0]},${country.latlng[1]}`;


    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <button className="close-button" onClick={onClose}>
                    &times;
                </button>
                <h2>{country.name.official}</h2>
                <p><strong>Capital:</strong> {country.capital}</p>
                <p><strong>Region:</strong> {country.region}</p>
                <p><strong>Population:</strong> {country.population}</p>
                <p><strong>Area:</strong> {country.area} km²</p>
                <p><strong>Flag:</strong> {country.flag}</p>
                <iframe
                    title={country.name}
                    src={mapUrl}
                    width="400"
                    height="250"
                    style={{ border: 0 }}
                    allowFullScreen={false}
                    loading="lazy"
                ></iframe>
            </div>
        </div>
    );
};

export default CountryModal;

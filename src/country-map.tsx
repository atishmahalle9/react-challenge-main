import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import axios from 'axios';

// Leaflet needs to handle marker icons properly
import L from 'leaflet';
import markerIconPng from 'leaflet/dist/images/marker-icon.png';
import 'leaflet/dist/leaflet.css';

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
    iconRetinaUrl: markerIconPng,
    iconUrl: markerIconPng,
    shadowUrl: 'leaflet/dist/images/marker-shadow.png',
});

const CountryMap = ({ props }) => {
    const [countries, setCountries] = useState([]);
    const [selectedCountry, setSelectedCountry] = useState<string | null>(null);
    const [countryPosition, setCountryPosition] = useState<[number, number] | null>(null);

    // Fetch country data from the API
    useEffect(() => {
        axios.get('https://restcountries.com/v3.1/all')
            .then(response => setCountries(response.data))
            .catch(error => console.error('Error fetching country data:', error));
    }, []);

    // Handle country selection and update map position
    const handleCountryChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const countryCode = event.target.value;
        setSelectedCountry(countryCode);

        const country = countries.find((c: any) => c.cca2 === countryCode);
        if (country) {
            const { latlng } = country;
            setCountryPosition([latlng[0], latlng[1]]);
        }
    };

    return (
        <div>
            <h1>Find Country on Map</h1>
            <select onChange={handleCountryChange}>
                <option value="">Select a country</option>
                {countries.map((country: any) => (
                    <option key={country.cca2} value={country.cca2}>
                        {country.name.common}
                    </option>
                ))}
            </select>

            {countryPosition && (
                <MapContainer center={countryPosition} zoom={5} style={{ height: '500px', width: '100%' }}>
                    <TileLayer
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    />
                    <Marker position={countryPosition}>
                        <Popup>{selectedCountry}</Popup>
                    </Marker>
                </MapContainer>
            )}
        </div>
    );
};

export default CountryMap;

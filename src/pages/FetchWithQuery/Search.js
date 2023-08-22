import { useState } from 'react';
import { countries } from './countries';

export const Search = () => {
    const [search, setSearch] = useState('');

    const handleSearch = (event) => {
        const country = event.target.value;
        setSearch(country.toLowerCase());
    }

    const countriesFiltered = search !== '' ? countries.filter((c) => {
        const word = c.toLowerCase();
        return word.indexOf(search) !== -1;
    }) : countries;

    return (
        <>
            <input type="text" onChange={(event) => handleSearch(event)} />
            {countriesFiltered.map((country) => (
                <p style={{ color: '#ffffff'}}>{country}</p>
            ))}
        </>
    );
};
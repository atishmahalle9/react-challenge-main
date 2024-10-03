import React, { Suspense, useDeferredValue, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCountries } from './store/countrySlice';
import { RootState, AppDispatch } from './store/store';
import './App.css';
import SearchBar from './components/search-bar';
import CountryList from './components/country-list';
import Loading from './components/loading';
import ErrorMessage from './components/error-message';
import NoResults from './components/no-result';


function App() {
  const [search, setSearch] = useState('');

  const dispatch = useDispatch<AppDispatch>();
  // dispatch(fetchCountries(searchTerm = all));
  useEffect(() => {
    const searchTerm = ''
    dispatch(fetchCountries(searchTerm));
  }, []);

  const deferedSearch = useDeferredValue(search);

  const { countries, loading, error } = useSelector((state: RootState) => state.countries);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const searchTerm = event.target.value;
    setSearch(searchTerm);
    if (searchTerm.length >= 1) {
      dispatch(fetchCountries(searchTerm));
    }
  };

  return (
    <div className="container">
      <h2 tabIndex={0}>Country Search</h2>

      <Suspense fallback={<Loading />}>
        <SearchBar search={deferedSearch} onSearchChange={handleSearchChange} />
      </Suspense>


      {error && <ErrorMessage message={error} />}
      <div className="separator" />
      {!error && countries.length > 0 && <CountryList countries={countries} />}

      {!loading && countries.length === 0 && search && <NoResults search={search} />}
    </div >
  );
}

export default App;

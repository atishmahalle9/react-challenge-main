/* eslint-disable @typescript-eslint/no-explicit-any */
// countrySlice.ts
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

interface CountryState {
    countries: string[];
    loading: boolean;
    error: string | null;
}

// Initial state
const initialState: CountryState = {
    countries: [],
    loading: false,
    error: null,
};

// Async thunk for fetching countries
export const fetchCountries = createAsyncThunk(
    'countries/fetchCountries',
    async (searchTerm: string, thunkAPI) => {
        try {
            if (searchTerm?.length == 0) {

                const response = await fetch(`https://restcountries.com/v3.1/all`);
                if (!response.ok) {
                    throw new Error(`No countrey with name ${searchTerm} found`);
                }
                const data = await response.json();
                return data;
            }

            const response = await fetch(`https://restcountries.com/v3.1/name/${searchTerm}`);
            if (!response.ok) {
                throw new Error(`No countrey with name ${searchTerm} found`);
            }

            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            const data = await response.json();
            return data;
        } catch (error: any) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

// Country slice
const countrySlice = createSlice({
    name: 'countries',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchCountries.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchCountries.fulfilled, (state, action) => {
                state.loading = false;
                state.countries = action.payload;
            })
            .addCase(fetchCountries.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload as string;
            });
    },
});

export default countrySlice.reducer;

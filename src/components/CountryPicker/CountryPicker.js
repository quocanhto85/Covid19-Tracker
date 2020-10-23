import React, { useState, useEffect, useCallback } from "react";
import { NativeSelect, FormControl } from "@material-ui/core";
import styles from "./CountryPicker.module.css";
import { fetchCountries } from "../../service/request";

const CountryPicker = ({ handleCountryChange }) => {
    const [fetchedCountries, setFetchedCountries] = useState([]);

    useEffect(() => {
        const fetchAPI = async () => {
            setFetchedCountries(await fetchCountries());
        }

        fetchAPI();
    }, [setFetchedCountries])

    const onChange = useCallback((event) => {   
        const { target: { value } } = event;
        handleCountryChange(value);
    })

    return (
        <FormControl className={styles.formControl}>
            <NativeSelect defaultValue="" onChange={onChange}>
                <option value="">Global</option>
                {fetchedCountries.map((country, index) =>
                    <option key={index} value={country}>{country}</option>
                )}
            </NativeSelect>
        </FormControl>
    )
}

export default CountryPicker

import React, { useState, useEffect, useCallback } from "react";
import { NativeSelect, FormControl } from "@material-ui/core";
import styles from "./CountryPicker.module.css";
import { Provider, useContexts } from "../../context";

const CountryPickerImpl = () => {
    const { handleCountryChange, countries } = useContexts();
    const onChange = useCallback((event) => {
        const { target: { value } } = event;
        
        handleCountryChange(value);
    })

    if (typeof countries !== undefined && countries?.length !== 0) {
        return (
            <FormControl className={styles.formControl}>
                <NativeSelect defaultValue="" onChange={onChange}>
                    <option value="">Global</option>
                    {countries?.map((country, index) =>
                        <option key={index} value={country}>{country}</option>
                    )}
                </NativeSelect>
            </FormControl>
        )
    } else {
        return null;
    }

}

const CountryPicker = () => <Provider><CountryPickerImpl /></Provider>

export default CountryPicker;

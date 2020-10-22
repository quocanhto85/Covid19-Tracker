import React, { useEffect, useState } from "react";

import { Cards, Chart, CountryPicker } from "./components";
import styles from "./App.module.css"
import { FetchData } from "./api";

const App = () => {

    const [data, setData] = useState({});
    const [country, setCountry] = useState("");

    useEffect(() => {
    const fetchAPI = async () => {
        const fetchedData = await FetchData();
        setData(fetchedData);
    }

    fetchAPI();
    }, []);

    const handleCountryChange = async (country) => {
        const fetchedData = await FetchData(country);
        setData(fetchedData);
        setCountry(country)
    }

    return (
        <div className={styles.container}>
            <Cards data={data}/>
            <CountryPicker handleCountryChange={handleCountryChange}/>
            <Chart data={data} country={country}/>
        </div>
    )
}

export default App;
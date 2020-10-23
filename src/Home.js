import React, { useEffect, useState } from "react";

import { Cards, Chart, CountryPicker } from "./components";
import styles from "./Home.module.css"
import { FetchData } from "./api";

import corornaImage from "./images/image.png";

const Home = () => {
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
            <img className={styles.image} src={corornaImage}/>
            <Cards data={data}/>
            <CountryPicker handleCountryChange={handleCountryChange}/>
            <Chart data={data} country={country}/>
        </div>
    )
}

export default Home;
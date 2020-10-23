import React, { memo, useEffect, useState } from "react";
import { Cards, Chart, CountryPicker } from "./components";
import styles from "./Home.module.css"
import { fetchData } from "./service/request";
import corornaImage from "./images/image.png";
import {Provider, useContexts} from "./context"

const HomeImpl = () => {
    const [data, setData] = useState({});
    const [country, setCountry] = useState("");
    // const {dataFetch, dailyData, countries, setDataFetch, setDailyData, setCountries} = useContexts();
    

    useEffect(() => {
        // console.log(data);
        // console.log(country);
    }, [data, country])

    useEffect(() => {
    const fetchAPI = async () => {
        const fetchedData = await fetchData();
        setData(fetchedData);
    }
    fetchAPI();
    }, []);

    const handleCountryChange = async (country) => {
        const fetchedData = await fetchData(country);
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

// const Home = () => <Provider><HomeImpl /></Provider>

export default memo(HomeImpl);
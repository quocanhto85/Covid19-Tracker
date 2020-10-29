import React, { memo, useEffect, useState } from "react";
import { Cards, Chart, CountryPicker } from "./components";
import styles from "./Home.module.css"
import corornaImage from "./images/image.png";
import { Provider, useContexts } from "./context";

const HomeImpl = () => {
    const { dataFetch: { confirmed, recovered, deaths }, country, dailyData } = useContexts();

    useEffect(() => {
        console.log("home", country);
    }, [country])

    return (
        <div className={styles.container}>
            <img className={styles.image} src={corornaImage}/>
            <Cards />
            <CountryPicker />
            <Chart />
        </div>
    )
}

const Home = () => <Provider><HomeImpl /></Provider>

export default memo(Home);
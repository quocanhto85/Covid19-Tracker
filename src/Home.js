import React, { memo, useEffect, useState } from "react";
import { Cards, Chart, CountryPicker } from "./components";
import styles from "./Home.module.css"
import { fetchData } from "./service/request";
import corornaImage from "./images/image.png";

const Home = () => {
    const [data, setData] = useState({});
    const [country, setCountry] = useState("");

    return (
        <div className={styles.container}>
            <img className={styles.image} src={corornaImage}/>
            <Cards />
            <CountryPicker />
            <Chart />
        </div>
    )
}

export default memo(Home);
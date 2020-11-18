import React, { memo } from "react";
import { Cards, Chart, CountryPicker } from "./components";
import styles from "./Home.module.css"
import corornaImage from "./images/image.png";
import { Provider } from "./context";

const HomeImpl = () => {

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
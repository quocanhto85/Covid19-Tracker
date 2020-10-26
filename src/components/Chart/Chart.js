import React, { useState, useEffect, memo } from "react"
import { Line, Bar } from "react-chartjs-2";
import { Provider, useContexts } from "../../context";
import styles from "./Chart.module.css";

const ChartImpl = () => {
    const { dataFetch: {confirmed, recovered, deaths}, country, dailyData } = useContexts();

    // useEffect(() => {
        console.log(country)

        // console.log(confirmed)
    // }, [country])
    // const [dailyData, setDailyData] = useState({});

    // useEffect(() => {
    //     const fetchAPI = async () => {
    //         setDailyData(await fetchDailyData());
    //     }

    //     fetchAPI();
    // }, []);

    const lineChart = (
        dailyData.length ? (
            <Line
                data={{
                    labels: dailyData.map(({ date }) => new Date(date).toLocaleDateString()),
                    datasets: [{
                        data: dailyData.map(({ confirmed }) => confirmed),
                        label: "Infected",
                        borderColor: "#3333ff",
                        fill: true,
                    }, {
                        data: dailyData.map(({ recovered }) => recovered),
                        label: "Recovered",
                        borderColor: "green",
                        backgroundColor: 'rgba(0, 255, 0, 0.5)',
                        fill: true,
                    }, {
                        data: dailyData.map(({ deaths }) => deaths),
                        label: "Deaths",
                        borderColor: "red",
                        backgroundColor: 'rgba(255, 0, 0, 0.5)',
                        fill: true,
                    }],
                }}
            />
        ) : null
    );

    const barChart = (
        confirmed ? (
            <Bar
                data={{
                    labels: ["Infected", "Recovered", "Deaths"],
                    datasets: [{
                        label: "People",
                        backgroundColor: [
                            "rgba(0, 0, 255, 0.5)",
                            "rgba(0, 255, 0, 0.5)",
                            "rgba(255, 0, 0, 0.5)"
                        ],
                        data: [confirmed.value, recovered.value, deaths.value]
                    }]
                }}
                options={{
                    legend: { display: false },
                    title: { display: true, text: `Current state in ${country}` }
                }}
            />
        ) : null
    );

    return (
        <div className={styles.container}>
            {country ? barChart : lineChart}
        </div>
    )
}

const Chart = () => <Provider><ChartImpl /></Provider>

export default memo(Chart);

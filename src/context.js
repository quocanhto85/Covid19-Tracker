import React, { createContext, useCallback, useContext, useEffect, useState, useMemo } from "react";
import { fetchData, fetchDailyData, fetchCountries } from "./service/request";

export const CovidContext = createContext();
export const useContexts = () => useContext(CovidContext);

export const Provider = ({ children }) => {
    const [loading, setLoading] = useState(true);
    const [dataFetch, setDataFetch] = useState({});
    const [dailyData, setDailyData] = useState([]);
    const [countries, setCountries] = useState([]);

    useEffect(() => {
        getData()
    }, [])

    const getData = useCallback(async () => {

        const [{dataFetch, dailyData, countries}] = await Promise.all([
            fetchData(),
            fetchDailyData(),
            fetchCountries()
        ])
        console.log(dataFetch)
        setDataFetch(dataFetch);
        setDailyData(dailyData);
        setCountries(countries)
    })

    const value = useMemo(() => ({
        loading, dataFetch, dailyData, countries, setLoading, setDataFetch, setDailyData, setCountries, getData
    }), [loading, dataFetch, dailyData, countries, setLoading, setDataFetch, setDailyData, setCountries, getData]);

    return(
        <CovidContext.Provider value={value}>
            {children}
        </CovidContext.Provider>
    )
};
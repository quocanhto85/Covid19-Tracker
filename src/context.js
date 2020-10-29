import React, { createContext, useCallback, useContext, useEffect, useState, useMemo } from "react";
import { fetchData, fetchDailyData, fetchCountries } from "./service/request";

export const Context = createContext();
export const useContexts = () => useContext(Context);

export const Provider = ({ children }) => {
    const [loading, setLoading] = useState(true);
    const [dataFetch, setDataFetch] = useState({});
    const [dailyData, setDailyData] = useState([]);
    const [countries, setCountries] = useState([]);
    const [country, setCountry] = useState("");
    // console.log(country)
    useEffect(() => {
        getData();
    }, [])

    const getData = useCallback(async () => {
        const [dataFetch, dailyData, countries] = await Promise.all([
            fetchData(), 
            fetchDailyData(), 
            fetchCountries()])

        setDataFetch(dataFetch);
        setDailyData(dailyData);
        setCountries(countries)
    });

    const handleCountryChange = useCallback(async (selectCountry) => {
        if (typeof selectCountry !== undefined) {
            const fetchedData = await fetchData(selectCountry);
            setDataFetch(fetchedData);          
            setCountry(selectCountry)         
        }
    });

    useEffect(() => {
        console.log("context", country)
    }, [country])
    

    const value = useMemo(() => ({
        loading, dataFetch, dailyData, countries, country, getData, handleCountryChange
    }), [loading, dataFetch, dailyData, countries, country, getData]);

    return (
        <Context.Provider value={value}>
            {children}
        </Context.Provider>
    )
};
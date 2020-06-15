import { useState, useEffect } from "react";

const useFetch = (url) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchUrl() {
            const response = await fetch(url);
            const json = await response.json();
            setData(json.results);
            setLoading(false);
        }

        fetchUrl();
    });
    return [data, loading];
}
export { useFetch };
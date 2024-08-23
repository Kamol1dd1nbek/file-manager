import { useEffect, useState } from "react";

export function useFetch(url, method = "GET") {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            setIsPending(true);
            try {
                const res = await fetch(url, { method });

                if (!res.ok) throw new Error(res.statusText);

                const data = await res.json();

                setData(data);
                setIsPending(false)
            } catch (error) {
                console.log(error.message);
                setError(error.message);
                setIsPending(false);
            }
        }

        fetchData()
    }, [url]);

    return { data, isPending, error }
}
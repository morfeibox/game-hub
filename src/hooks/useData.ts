import {useEffect, useState} from "react";
import apiClient from "../services/api-client";

interface FetchResponse<T> {
    count:number,
    results:T[]
}

const useData = <T>(endpoint: string) => {
    const controller = new AbortController();

    const [data, setData] = useState<T[]>([]);
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {

        setIsLoading(true)
        apiClient.get<FetchResponse<T>>(endpoint)
            .then(res => {setData(res.data.results); setIsLoading(false)})
            .catch(err => {
                    setIsLoading(false)
                    setError(err.message);
                }
            )

        return () => controller.abort();
    }, []);

    return {data, error, isLoading };
}

export default useData
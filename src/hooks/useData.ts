import {useEffect, useState} from "react";
import apiClient from "../services/api-client";
import {AxiosRequestConfig} from "axios";

interface FetchResponse<T> {
    count:number,
    results:T[]
}

const useData = <T>(endpoint: string, requestConfig?:AxiosRequestConfig, deps?: any[]) => {
    const controller = new AbortController();

    const [data, setData] = useState<T[]>([]);
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {

        setIsLoading(true)
        apiClient.get<FetchResponse<T>>(endpoint, {...requestConfig})
            .then(res => {setData(res.data.results); setIsLoading(false)})
            .catch(err => {
                    setIsLoading(false)
                    setError(err.message);
                }
            )

        return () => controller.abort();
    },  deps ? [...deps] : []);

    return {data, error, isLoading };
}

export default useData
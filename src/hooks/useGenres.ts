import {useEffect, useState} from "react";
import apiClient from "../services/api-client";


interface Genre {
    id: number,
    name:string
}

interface FetchGenresResponse {
    count:number,
    results:Genre[]
}

const useGenres = () => {
    const controller = new AbortController();

    const [genres, setGenres] = useState<Genre[]>([]);
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {

        setIsLoading(true)
        apiClient.get<FetchGenresResponse>('/genres')
            .then(res => {setGenres(res.data.results); setIsLoading(false)})
            .catch(err => {
                    setIsLoading(false)
                    setError(err.message);
                }
            )

        return () => controller.abort();
    }, []);

    return {genres, error, isLoading };
}

export default useGenres
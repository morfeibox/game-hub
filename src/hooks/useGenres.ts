import {CACHE_KEY_GENRES} from "../constants";
import APIClient from "../services/api-client";
import {useQuery} from "@tanstack/react-query";



const apiClient = new APIClient<Genre>('/genres');

export interface Genre {
    id: number,
    name:string,
    image_background:string
}

const useGenres = () => useQuery({
    queryKey: CACHE_KEY_GENRES,
    queryFn:  apiClient.getAll,
    staleTime: 24 * 60 * 60 * 1000, //24h
    // initialData: { count: genres.length, results: genres }
})

export default useGenres
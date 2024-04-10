import {CACHE_KEY_GENRES} from "../constants";
import APIClient from "../services/api-client";
import {useQuery} from "@tanstack/react-query";
import genres from "../data/genres";
import ms from "ms";



const apiClient = new APIClient<Genre>('/genres');

export interface Genre {
    id: number,
    name:string,
    image_background:string
}

const useGenres = () => useQuery({
    queryKey: CACHE_KEY_GENRES,
    queryFn:  apiClient.getAll,
    staleTime: ms('24h'),
    initialData: genres
})

export default useGenres
import {FetchResponse} from "../services/api-client";
import {useQuery} from "@tanstack/react-query";
import {CACHE_KEY_PLATFORMS} from "../constants";
import apiClient from "../services/api-client";

export interface Platform {
    id: number,
    name:string,
    slug:string
}


const usePlatforms = () => useQuery({
    queryKey: CACHE_KEY_PLATFORMS,
    queryFn: () =>
        apiClient.get<FetchResponse<Platform>>('/platforms/lists/parents').then(res => res.data),
    staleTime: 24 * 60 * 60 * 1000, //24h
})

export default usePlatforms
import axios from 'axios';

export interface FetchResponse<T> {
    count:number,
    results:T[]
}

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '11b90e8b93fe48cfad90dc4469b9a657'
    }
})
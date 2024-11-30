import axios from "axios"

const tmbd = axios.create({
    baseURL: 'https://api.themoviedb.org/3',
    params: {
        'api_key': import.meta.env.VITE_TMDB_KEY
    }
})

export default tmbd
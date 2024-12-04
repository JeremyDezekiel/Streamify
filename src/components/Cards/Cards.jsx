import React, { useEffect, useState } from "react"
// import './Cards.css'
import tmdb from '../../utils/axios'
import { useNavigate } from "react-router-dom"

function Cards ({title, category}) {
    const [isLoading, setIsLoading] = useState(true)
    const [movies, setMovies] = useState([])
    const [error, setError] = useState(null)

    const fetchMovies = async () => {
        try {
            setIsLoading(true)
            const { data } = await tmdb.get(`/movie/${category?category:"popular"}`)
            setMovies(data)
        } catch (error) {
            console.error(error)
        } finally {
            setIsLoading(false)
        }
    }

    useEffect(() => {
        fetchMovies()
    }, [])

    const navigate = useNavigate()
    const goToMovieDetail = (movieId) => {
        navigate(`/moviedetail/${movieId}`)
    }

    return (
        <div id="cards" className="mt-10">
            <h2 className="mb-2 text-2xl">{title?title : "Popular"}</h2>
            <div className="flex gap-3 overflow-x-scroll">
                {movies.results?.map(movies => {
                    return (
                        <div key={movies.id} className="">
                            <img className="min-w-72 rounded-md border border-transparent hover:border cursor-pointer hover:border-white" src={`https://image.tmdb.org/t/p/w500/${movies.poster_path}`} alt="" onClick={() => goToMovieDetail(movies.id)}/>
                            <p className="text-2xl">{movies.title}</p>
                            <span>{movies.release_date}</span>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Cards
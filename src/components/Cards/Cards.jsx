import React, { useEffect, useState } from "react"
// import React from "react"
import './Cards.css'
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
        <div className="cards">
            <h2>{title?title : "Popular"}</h2>
            <div className="cardsList">
                {movies.results?.map(movies => {
                    return (
                        <div key={movies.id} className="card">
                            <img src={`https://image.tmdb.org/t/p/w500/${movies.poster_path}`} alt="" onClick={() => goToMovieDetail(movies.id)}/>
                            <p>{movies.title}</p>
                            <span>{movies.release_date}</span>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Cards
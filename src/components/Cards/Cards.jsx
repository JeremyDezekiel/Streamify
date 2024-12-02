import React, { useEffect, useState } from "react"
// import React from "react"
import './Cards.css'
import tmdb from '../../utils/axios'
import ratingIcon from '../../assets/ratingIcon.png'
import playIcon from '../../assets/playIcon.png'

function Cards ({title, category}) {
    const [isLoading, setIsLoading] = useState(true)
    const [movies, setMovies] = useState([])
    const [error, setError] = useState(null)

    const fetchMovies = async () => {
        try {
            setIsLoading(true)
            const { data } = await tmdb.get(`/movie/${category?category:"now_playing"}`)
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

    return (
        <div className="cards">
            <h2>{title?title:"Popular"}</h2>
            <div className="cardsList">
                <div className="card" movies={movies}>
                    <img src="https://images.cdn.prd.api.discomax.com/2024/07/08/49e1360c-e4a1-3362-ac08-f5b51da2afbf.jpeg?w=250&f=webp" alt=""/>
                    <p>{movies.title}</p>
                    <span>Apr 17, 2011</span>
                </div>
            </div>
        </div>
    )
}

export default Cards
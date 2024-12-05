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
        <div className="mt-2
                        md:mt-3
                        lg:mt-4
                        xl:mt-5
        ">
            <h2 className="mb-2 text-2xl font-bold
                            md:text-3xl md:mb-3
                            lg:text-4xl lg:mb-4
                            xl:text-5xl xl:mb-5
            ">{title ? title : "Popular"}</h2>
            <div className="cardsList flex overflow-x-scroll 
                            gap-2
                            md:gap-3
                            lg:gap-4
                            xl:gap-3
            ">
                {movies.results?.map(movies => {
                    return (
                        <div key={movies.id}>
                            <img className="border border-transparent rounded-md  hover:border cursor-pointer hover:border-white
                                            min-w-[127px]
                                            md:min-w-[172px]
                                            lg:min-w-[180px]
                                            xl:min-w-[190px]
                                            2xl:min-w-[230px]
                            " src={`https://image.tmdb.org/t/p/w500/${movies.poster_path}`} alt="" onClick={() => goToMovieDetail(movies.id)} />
                            <p className="font-semibold tracking-tight
                                        text-lg
                                        md:text-xl
                                        lg:text-2xl
                                        xl:text-3xl
                                        2xl:text-4xl
                            ">{movies.title}</p>
                            <span className="font-normal
                                            text-sm
                                            md:text-base
                                            lg:text-lg
                                            xl:text-xl
                                            2xl:text-2xl
                            ">{movies.release_date}</span>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Cards
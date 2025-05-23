import React, { useEffect, useRef, useState } from "react"
import tmdb from '../../utils/axios'
import { useNavigate } from "react-router-dom"

function Cards({ title, category }) {
    const [isLoading, setIsLoading] = useState(false)
    const [movies, setMovies] = useState([])
    const [error, setError] = useState(null)

    const fetchMovies = async () => {
        try {
            setIsLoading(true)
            const { data } = await tmdb.get(`/movie/${category ? category : "popular"}`)
            setMovies(data)
        } catch (error) {
            console.error(error)
        } finally {
            setIsLoading(false)
        }
    }

    const navigate = useNavigate()
    const goToMovieDetail = (movieId) => {
        navigate(`/moviedetail/${movieId}`)
    }

    useEffect(() => {
        fetchMovies()
    }, [])


    const scrollContainerRef = useRef()
    const scrollLeft = () => {
        scrollContainerRef.current.scrollBy({ left: -300, behavior: 'smooth' })
    }
    const scrollRight = () => {
        scrollContainerRef.current.scrollBy({ left: 300, behavior: 'smooth' })
    }

    return (
        <div className="relative">
            <button onClick={scrollLeft} className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-800 text-white px-3 py-2 rounded-full shadow-lg z-10" style={{ zIndex: 10 }}>
                &#8592;
            </button>
            <div className="mt-2 md:mt-3 lg:mt-4 xl:mt-5">
                <h2 className="mb-2 text-xl font-bold md:text-2xl md:mb-3 lg:text-3xl lg:mb-4 xl:text-4xl xl:mb-5">
                    {title ? title : "Popular Movies"}
                </h2>
                {isLoading &&
                    <div className="flex justify-center items-center min-h-max">
                        <div className="w-16 h-16 border-4 border-t-4 border-blue-500 border-solid rounded-full animate-spin"></div>
                    </div>}
                {error && <span>Error found</span>}
                <div className="cardsList flex overflow-x-scroll gap-2 md:gap-3 lg:gap-4 xl:gap-3" ref={scrollContainerRef}>
                    {movies.results?.map(movie => {
                        return (
                            <div className="justify-items-center text-center" key={movie.id}>
                                <img
                                    className="border border-transparent rounded-md hover:border cursor-pointer hover:border-white min-w-[120px] md:min-w-[160px] lg:min-w-[167px] xl:min-w-[177px] 2xl:min-w-[215px]"
                                    src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                                    alt={movie.title}
                                    onClick={() => goToMovieDetail(movie.id)}
                                />
                            </div>
                        )
                    })}
                </div>
                <button onClick={scrollRight} className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-800 text-white px-3 py-2 rounded-full shadow-lg z-10" style={{ zIndex: 10 }}>
                    &#8594;
                </button>
            </div>
        </div>
    )
}

export default Cards

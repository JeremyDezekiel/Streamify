import React, { useEffect, useState } from 'react'
import tmdb from '../../utils/axios'
import { Carousel } from 'flowbite-react'
import Cards from '../../components/Cards/Cards'
import { useNavigate } from 'react-router-dom'

function Movie() {
    const [isLoading, setIsLoading] = useState(true)
    const [movies, setMovies] = useState([])
    const [error, setError] = useState(null)

    const fetchMovies = async () => {
        try {
            setIsLoading(true)
            const { data } = await tmdb.get(`/movie/now_playing`)
            setMovies(data)
        } catch (error) {
            console.log(error)
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
        <div className="mx-[6%]">
            {isLoading ? (
                <div className="flex justify-center items-center min-h-screen">
                    <div className="w-16 h-16 border-4 border-t-4 border-blue-500 border-solid rounded-full animate-spin"></div>
                </div>
            ) : (
                <>
                    <div className="h-56 sm:h-64 xl:h-80 2xl:h-[70vh]">
                        <Carousel slideInterval={5000}>
                            {movies.results?.map(movie => {
                                return (
                                    <div key={movie.id}>
                                        <img src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`} alt={movie.name} onClick={() => goToMovieDetail(movie.id)} />
                                        <div className="absolute top-[130px] left-4 md:top-[210px] lg:top-[275px] xl:top-[340px] 2xl:top-[450px] 2xl:left-10">
                                            <h1 className="font-bold text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl 2xl:mb-5">{movie.title}</h1>
                                            <p className="movieDescHero text-justify text-sm text-transparent md:text-white xl:text-base">{movie.overview}</p>
                                        </div>
                                    </div>
                                )
                            })}
                        </Carousel>
                    </div>
                    <div>
                        <Cards title={'Now Playing Movies'} category={"now_playing"} />
                        <Cards title={'Upcoming Movies'} category={"upcoming"} />
                        <Cards />
                        <Cards title={'Top Rated Movies'} category={"top_rated"} />
                    </div>
                </>
            )}
            {error && <span>Error found</span>}
        </div>
    )
}

export default Movie

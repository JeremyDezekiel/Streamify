import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { Carousel } from "flowbite-react"
import Cards from '../Cards/Cards'
import tmdb from '../../utils/axios'
// import CarouselMovie from "../CarouselMovie/CarouselMovie"
// import './Hero.css'

function Hero() {
    const [isLoading, setIsLoading] = useState(false)
    const [movies, setMovies] = useState([])
    const [error, setError] = useState(null)

    const fetchMovies = async () => {
        try {
            setIsLoading(true)
            const { data } = await tmdb.get(`/movie/now_playing`)
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
        <div className="mx-[3%]">
            {/* <CarouselMovie/> */}
            <div className="h-56 sm:h-64 xl:h-80 2xl:h-[70vh]">
                <Carousel slideInterval={5000}>
                    {movies.results?.map(movie => {
                        return (
                            <>
                                <img key={movie.id} src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`} className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt={movie.name} onClick={() => goToMovieDetail(movie.id)} />
                                <div className="absolute top-[50%] left-10">
                                    <h1 className="text-7xl font-bold">{movie.title}</h1>
                                    <p className="text-xl w-[50%] text-justify pt-10">{movie.overview}</p>
                                </div> 
                            </>
                        )
                    })}
                </Carousel>
            </div>
            <div>
                <Cards title={'Now Playing'} category={"now_playing"}/>
                <Cards title={'Upcoming'} category={"upcoming"} />
                <Cards/>
                <Cards title={'Top Rated'} category={"top_rated"} />
            </div>
        </div>
    )
}

export default Hero
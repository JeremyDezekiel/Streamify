import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { Carousel } from "flowbite-react"
import Cards from '../Cards/Cards'
import tmdb from '../../utils/axios'
// import CarouselMovie from "../CarouselMovie/CarouselMovie"
// import './Hero.css'

function Hero() {
    const [isLoading, setIsLoading] = useState(true)
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
                    {movies.results?.map(movies => {
                        return (
                            <img key={movies.id} src={`https://image.tmdb.org/t/p/original/${movies.backdrop_path}`} alt={movies.name} onClick={() => goToMovieDetail(movies.id)} />
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
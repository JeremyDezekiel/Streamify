import React, { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom"
import './NewandPopular.css'
import Cards from '../../components/Cards/Cards'
import CardsSeries from '../../components/CardsSeries/CardsSeries'
import tmdb from '../../utils/axios'
import { Carousel } from 'flowbite-react'

function NewandPopular() {
    const [isLoading, setIsLoading] = useState(true)
    const [movies, setMovies] = useState([])
    const [error, setError] = useState (null)

    const fetchMovies = async () => {
        try {
            setIsLoading(true)
            const { data } = await tmdb.get(`/movie/upcoming`)
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
        <div className='mx-[6%]'>
            <div className="h-56 sm:h-64 xl:h-80 2xl:h-[70vh]">
                <Carousel slideInterval={5000}>
                    {movies.results?.map(movies => {
                        return (
                            <div key={movies.id}>
                            <img src={`https://image.tmdb.org/t/p/original/${movies.backdrop_path}`} alt={movies.name} onClick={() => goToMovieDetail(movies.id)} />
                            <div className="absolute 
                                                top-[130px] left-4
                                                md:top-[210px]
                                                lg:top-[275px]
                                                xl:top-[340px]
                                                2xl:top-[450px] 2xl:left-10
                                ">
                                    <h1 className="font-bold
                                                    text-xl
                                                    lg:text-2xl
                                                    xl:text-3xl
                                                    2xl:text-4xl 2xl:mb-5
                                    ">{movies.title}</h1>
                                    <p className="movieDescHero text-justify
                                                    text-sm text-transparent
                                                md:text-white
                                                xl:text-base
                                    ">{movies.overview}</p>
                                </div>
                            </div>
                        )
                    })}
                </Carousel>
            </div>
            <div>
                <Cards title={'Movie Popular'}/>
                <CardsSeries title={'Series Popular'}/>
                <Cards title={'Upcoming'} category={"upcoming"} />
                <CardsSeries title={'Series Today'} category={"airing_today"} />
                <Cards title={'Movie Now Playing'} category={"now_playing"}/>
            </div>
        </div>
    )
}

export default NewandPopular
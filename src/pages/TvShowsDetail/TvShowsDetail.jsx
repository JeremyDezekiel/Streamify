import React, { useEffect, useState } from "react"
import tmdb from '../../utils/axios'
import { useNavigate, useParams } from 'react-router-dom'
import ratingIcon from '../../assets/ratingIcon.png'
import iconPlayWhite from '../../assets/iconPlayWhite.png'
import avatarNone from '../../assets/avatarNone.png'

function TvShowsDetail() {
    const [isLoading, setIsLoading] = useState(false)
    const [credits, setCredits] = useState([])
    const [details, setDetails] = useState([])
    const [favorites, setFavorites] = useState([])
    const [error, setError] = useState(null)

    const params = useParams()
    const idSeries = params.seriesId

    const fetchDetails = async () => {
        try {
            setIsLoading(true)
            const { data } = await tmdb.get(`/tv/${idSeries}`)
            setDetails(data)
        } catch (error) {
            console.error(error)
        } finally {
            setIsLoading(false)
        }
    }

    const fetchCredits = async () => {
        try {
            setIsLoading(true)
            const { data } = await tmdb.get(`/tv/${idSeries}/credits`)
            setCredits(data)
        } catch (error) {
            console.error(error)
        } finally {
            setIsLoading(false)
        }
    }

    const toggleFavorite = (details) => {
        let updatedFavorites
        const movieIndex = favorites.findIndex((fav) => fav.id === details.id)
        if (movieIndex === -1) {
            updatedFavorites = [...favorites, details]
        } else {
            updatedFavorites = favorites.filter((fav) => fav.id !== details.id)
        }
        setFavorites(updatedFavorites)
        sessionStorage.setItem("favorites", JSON.stringify(updatedFavorites))
    }
    const isFavorite = (details) => {
        return favorites.some((fav) => fav.id === details.id)
    }

    const isMovieFavorite = isFavorite(details)
    const storedFavorites = JSON.parse(sessionStorage.getItem("favorites")) || []

    useEffect(() => {
        fetchCredits()
        fetchDetails()
        setFavorites(storedFavorites)
    }, [])

    const navigate = useNavigate()
    const goToTvShows = (idSeries) => {
        navigate(`/trailertvshows/${idSeries}`)
    }
    return (
        <div className="mt-[1%] mx-[6%]">
            {isLoading ? (
                <div className="flex justify-center items-center min-h-screen">
                    <div className="w-16 h-16 border-4 border-t-4 border-blue-500 border-solid rounded-full animate-spin"></div>
                </div>
            ) : (
                <>
                    <div className='min-h-max min-w-max justify-items-center md:gap-3 lg:gap-5 lg:flex xl:gap-5 2xl:gap-6'>
                        <div className="lg:w-[350px] xl:w-[450px] 2xl:[550px]">
                            <img className="rounded-xl w-auto md:w-[359px] md:h-[400px] lg:w-[500px] lg:h-[400px] xl:w-[600px] xl:h-[500px] 2xl:w-[700px] 2xl:h-[600px]" src={`https://image.tmdb.org/t/p/w500/${details.poster_path}`} alt={details.name} />
                        </div>
                        <div className="rounded-xl w-auto md:w-[359px] md:h-[400px] lg:w-[500px] lg:h-[400px] xl:w-[600px] xl:h-[500px] 2xl:w-[700px] 2xl:h-[600px]">
                            <div className="mb-2 md:mb-4 lg:mb-3 xl:mb-5">
                                <h2 className="text-3xl font-bold md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl">{details.name}</h2>
                                <div className='text-xs md:text-sm lg:text-base xl:text-lg xl:mt-1 2xl:text-xl'>
                                    <span>{details.first_air_date}</span>
                                    <span className='mx-2 md:mx-2 lg:mx-3'>•</span>
                                    {details.genres?.map(details => {
                                        return (
                                            <span key={details.id} className='mr-2'>
                                                <span>{details.name}</span>
                                                ,&nbsp;
                                            </span>
                                        )
                                    })}
                                    <span className='mx-2 md:mx-2 lg:mx-3'>•</span>
                                    <span>{details.number_of_episodes} episode</span>
                                </div>
                            </div>
                            <div>
                                <ul className='flex list-none items-center justify-around text-sm mb-2 md:justify-start md:gap-5 md:text-base lg:text-lg xl:text-xl 2xl:text-2xl'>
                                    <li className='flex items-center font-semibold gap-1 md:gap-1 lg:gap-1 xl:gap-2'>
                                        <img className="w-5 md:w-5 lg:w-6 xl:w-7 2xl:w-8" src={ratingIcon} alt='' />
                                        <span>{parseFloat(details.vote_average).toFixed(1)}</span>
                                    </li>
                                    <li className='flex items-center font-semibold bg-gray-600 rounded cursor-pointer hover:bg-gray-500 py-0 px-1 gap-1 md:py-0 lg:py-0 lg:gap-2 xl:py-1 xl:px-2 2xl:py-2' onClick={() => goToTvShows(idSeries)}>
                                        <img className="w-3 md:w-4 lg:w-5 xl:w-6 2xl:w-7" src={iconPlayWhite} alt='iconPlayWhite' />
                                        <span>Play Video</span>
                                    </li>
                                    <li>
                                        <button className={`font-semibold bg-gray-600 rounded cursor-pointer hover:bg-gray-500 py-0 px-1 gap-1 md:py-0 lg:py-0 lg:gap-2 xl:py-1 xl:px-2 2xl:py-2 ${isMovieFavorite ? "text-red-500" : "text-blue-500"}`} onClick={() => toggleFavorite(details)} >
                                            {isMovieFavorite ? "Remove from Favorites" : "+ Favorites"}
                                        </button>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h3 className='font-normal italic opacity-70 text-xs md:text-sm lg:text-base  xl:text-xl xl:my-5 2xl:text-2xl'>{details.tagline}</h3>
                                <h3 className="font-semibold my-2 text-lg md:text-lg lg:text-2xl 2xl:text-4xl">OverView</h3>
                                <p className="movieDescHero text-xs md:text-sm  lg:text-base  xl:text-lg xl:mb-3 2xl:text-xl">{details.overview}</p>
                                <ul className='grid grid-cols-3 list-none gap-3 mt-5 md:gap-x-20 md:grid-cols-2 md:inline-grid lg:grid-cols-3 lg:gap-x-10 xl:gap-5 2xl:gap-x-20'>
                                    {credits.crew?.slice(0, 6).map(credits => {
                                        return (
                                            <li key={credits.id}>
                                                <p className="text-sm font-bold md:text-base lg:text-lg  xl:text-xl 2xl:text-2xl">{credits.name}</p>
                                                <p className='text-xs italic md:text-sm lg:text-base 2xl:text-lg'>{credits.department}</p>
                                            </li>
                                        )
                                    })}
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="cardsList flex overflow-x-scroll gap-2 mt-5 md:gap-3 lg:gap-3 xl:gap-3 2xl:gap-5">
                        {credits.cast?.map(credits => {
                            if (credits.profile_path) {
                                return (
                                    <div key={credits.id}>
                                        <img className="rounded-lg max-w-64 w-[117px] md:w-[158px] lg:w-[170px] xl:w-[215px] 2xl:w-[253px]" src={`https://image.tmdb.org/t/p/w500/${credits.profile_path}`} alt={credits.name} />
                                        <p className="font-bold tracking-tight text-sm md:text-lg lg:text-xl 2xl:text-2xl">{credits.name}</p>
                                        <span className="font-normal italic text-xs md:text-base lg:text-base 2xl:text-xl">{credits.character}</span>
                                    </div>
                                )
                            } else {
                                return (
                                    <div key={credits.id}>
                                        <img className="rounded-lg max-w-64 w-[117px] md:w-[158px] lg:w-[170px] xl:w-[215px] 2xl:w-[253px]" src={avatarNone} alt={credits.name} />
                                        <p className="font-bold tracking-tight text-sm md:text-lg lg:text-xl 2xl:text-2xl">{credits.name}</p>
                                        <span className="font-normal italic text-xs md:text-base lg:text-base 2xl:text-xl">{credits.character}</span>
                                    </div>
                                )
                            }
                        })}
                    </div>
                </>
            )}
        </div>
    )
}

export default TvShowsDetail
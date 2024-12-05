import React, { useEffect, useState } from "react"
// import './MovieDetail.css'
import tmdb from '../../utils/axios'
import { useNavigate, useParams } from 'react-router-dom'
import ratingIcon from '../../assets/ratingIcon.png'
import iconPlayWhite from '../../assets/iconPlayWhite.png'
import favoriteIcon from '../../assets/favoriteIcon.png'
import avatarNone from '../../assets/avatarNone.png'

function SeriesDetail() {
    const [isLoading, setIsLoading] = useState(true)
    const [credits, setCredits] = useState([])
    const [details, setDetails] = useState([])
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

    useEffect(() => {
        fetchCredits()
        fetchDetails()
    }, [])

    const navigate = useNavigate()
    const goToTrailer = (idSeries) => {
        navigate(`/trailerseries/${idSeries}`)
    }
    return (
        <div className="mt-[1%] mx-[6%]">
            <div className='flex justify-center items-center gap-12'>
                <div className=''>
                    <img className="rounded-xl w-full" src={`https://image.tmdb.org/t/p/w500/${details.poster_path}`} alt={details.name} />
                </div>
                <div className='contentDetail'>
                    <div>
                        <h2 className="text-4xl">{details.name}</h2>
                        <div className='text-base mb-6'>
                            <span className='mr-2'>{details.first_air_date}</span>
                            <span className='mr-2'>•</span>
                            {details.genres?.map(details => {
                                return (
                                    <span key={details.id} className='mr-2'>
                                        <span>{details.name}</span>
                                        ,&nbsp;
                                    </span>
                                )
                            })}
                            <span className='mr-2'>•</span>
                            <span>{details.number_of_episodes} episode</span>
                        </div>
                    </div>
                    <div>
                        <ul className='flex list-none gap-10 items-center mb-5'>
                            <li className='rating flex items-center gap-1 font-semibold text-xl'>
                                <img className="w-5" src={ratingIcon} alt='' />
                                <span>{parseFloat(details.vote_average).toFixed(1)}</span>
                            </li>
                            <li className=''>
                                <a>
                                    <img className="w-5 cursor-pointer hover:bg-red-700" src={favoriteIcon} alt='' />
                                </a>
                            </li>
                            <li className='py-2 px-5 flex items-center gap-3 font-semibold bg-gray-600 rounded cursor-pointer hover:bg-gray-500' onClick={() => goToTrailer(idSeries)}>
                                <img className="w-5" src={iconPlayWhite} alt='' />
                                <span>Play Trailer</span>
                            </li>
                        </ul>
                    </div>
                    <div className=''>
                        <h3 className='text-lg font-normal italic opacity-70'>{details.tagline}</h3>
                        <h3 className="text-xl font-semibold my-2">OverView</h3>
                        <p className="text-base leading-6 font-normal">{details.overview}</p>
                        <ul className='mt-5 grid grid-cols-3 gap-6 list-none'>
                            {credits.crew?.slice(0, 6).map(credits => {
                                return (
                                    <li key={credits.id} className='proflie'>
                                        <p>{credits.name}</p>
                                        <p className='jobs'>{credits.department}</p>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                </div>
            </div>
            <div className="cardsList flex gap-5 overflow-x-scroll mt-12">
                {credits.cast?.map(credits => {
                    if (credits.profile_path) {
                        return (
                            <div key={credits.id}>
                                <img className="min-w-72 rounded-md" src={`https://image.tmdb.org/t/p/w500/${credits.profile_path}`} alt={credits.name} />
                                <p className="text-2xl font-bold tracking-tight">{credits.name}</p>
                                <span className="font-normal">{credits.character}</span>
                            </div>
                        )
                    } else {
                        return (
                            <div key={credits.id}>
                                <img className="min-w-72 rounded-md" src={avatarNone} alt={credits.name} />
                                <p className="text-2xl font-bold tracking-tight">{credits.name}</p>
                                <span className="font-normal">{credits.character}</span>
                            </div>
                        )
                    }
                })}
            </div>
            <div>SeriesDetail: {params.seriesId}</div>
        </div>
    )
}

export default SeriesDetail
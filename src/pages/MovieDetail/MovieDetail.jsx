import React, { useEffect, useState } from "react"
import './MovieDetail.css'
import tmdb from '../../utils/axios'
import { useParams } from 'react-router-dom'
import ratingIcon from '../../assets/ratingIcon.png'
import iconPlayWhite from '../../assets/iconPlayWhite.png'
import favoriteIcon from '../../assets/favoriteIcon.png'

function MovieDetail() {
    const [isLoading, setIsLoading] = useState(true)
    const [credits, setCredits] = useState([])
    const [details, setDetails] = useState([])
    const [error, setError] = useState(null)

    const params = useParams()

    const fetchDetails = async () => {
        const idMovie = params.movieId
        try {
            setIsLoading(true)
            const { data } = await tmdb.get(`/movie/${idMovie}`)
            setDetails(data)
        } catch (error) {
            console.error(error)
        } finally {
            setIsLoading(false)
        }
    }

    const fetchCredits = async () => {
        const idMovie = params.movieId
        try {
            setIsLoading(true)
            const { data } = await tmdb.get(`/movie/${idMovie}/credits`)
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
    return (
        <>
        <div className='heroMovieDetail'>
            <div className='poster'>
                <img src={`https://image.tmdb.org/t/p/w500/${details?.belongs_to_collection?.poster_path}`} alt={details.name} />
            </div>
            <div className='contentDetail'>
                <div className='titleDetail'>
                    <h2>{details.original_title}</h2>
                    <div className='facts'>
                        <span className='release'>{details.release_date}</span>
                        <span className='factsDot'>•</span>
                        {details.genres?.map(details => {
                            return (
                                <span key={details.id} className='genre'>
                                    <span>{details.name}</span>
                                    ,&nbsp;
                                </span>
                            )
                        })}
                        <span className='factsDot'>•</span>
                        <span className='runtime'>{details.runtime}</span>
                    </div>
                </div>
                <div>
                    <ul className='action'>
                        <li className='rating'>
                            <img src={ratingIcon} alt=''/>
                            <span>{details.vote_average}</span>
                        </li>
                        <li className='favorite'>
                            <a>
                                <img src={favoriteIcon} alt=''/>
                            </a>
                        </li>
                        <li className='trailer'>
                            <img src={iconPlayWhite} alt=''/>
                            <span>Play Trailer</span>
                        </li>
                    </ul>
                </div>
                <div className='movieInfo'>
                    <h3 className='tagline'>{details.tagline}</h3>
                    <h3>OverView</h3>
                    <p>{details.overview}</p>
                        <ul className='creditProfile'>
                            {credits.crew?.slice(0, 6).map(credits => {
                                return (
                                    <li className='proflie'>
                                        <p>{credits.name}</p>
                                        <p className='jobs'>{credits.department}</p>
                                    </li>
                                )
                            })}
                    </ul>
                </div>
            </div>
        </div>
        <div className="cardsActor">
            <div className="cardsListActor">
            {credits.cast?.map(credits => {
                if (credits.profile_path) {
                    return (
                        <div key={credits.id} className="card">
                            <img src={`https://image.tmdb.org/t/p/w500/${credits.profile_path}`} alt={credits.name} />
                            <p>{credits.name}</p>
                            <span>{credits.character}</span>
                        </div>
                    )
                } else {
                    return (
                        <div key={credits.id} className="card">
                            <img src="https://cdn.pixabay.com/photo/2018/11/13/21/43/avatar-3814049_1280.png" alt={credits.name} />
                            <p>{credits.name}</p>
                            <span>{credits.character}</span>
                        </div>
                    )
                }
                })}
            </div>
        </div>
        <div>MovieDetail: {params.movieId}</div>
        <p>Test</p>
        </>
    )
}

export default MovieDetail
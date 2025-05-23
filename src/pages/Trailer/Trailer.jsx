import React, { useEffect, useState } from 'react'
import tmdb from '../../utils/axios'
import backArrow from '../../assets/back_arrowIcon.png'
import { useNavigate, useParams } from 'react-router-dom'

function Trailer() {
    const [isLoading, setIsLoading] = useState(true)
    const [trailer, setTrailer] = useState([])
    const [error, setError] = useState(null)

    const params = useParams()
    const idMovie = params.idMovie

    const fetchTrailer = async () => {
        try {
            setIsLoading(true)
            const { data } = await tmdb.get(`/movie/${idMovie}/videos`)
            setTrailer(data)
        } catch (error) {
            console.error(error)
        } finally {
            setIsLoading(false)
        }
    }

    useEffect(() => {
        fetchTrailer()
    }, [])

    const navigate = useNavigate()
    const goToMovieDetail = (idMovie) => {
        navigate(`/moviedetail/${idMovie}`)
    }

    return (
        <>
            {isLoading ? (
                <div className="flex justify-center items-center min-h-screen">
                    <div className="w-16 h-16 border-4 border-t-4 border-blue-500 border-solid rounded-full animate-spin"></div>
                </div>
            ) : (
                <div className="flex justify-center items-center h-lvh sm:h-lvh xl:h-lvh 2xl:h-lvh">
                    <img className='absolute top-5 left-5 w-12 cursor-pointer' src={backArrow} alt="backArrow" onClick={() => goToMovieDetail(idMovie)}/>
                    {trailer.results?.find(trailer => trailer.type === "Trailer") ? (
                        <iframe className='rounded-xl'
                            width="90%"
                            height="90%"
                            src={`https://www.youtube.com/embed/${trailer.results.find(trailer => trailer.type === "Trailer").key
                                }`}
                            title="trailer"
                            frameBorder="0"
                            allowFullScreen
                        ></iframe>
                    ) : (
                        <p>This trailer is currently unavailable</p>
                    )}
                </div>
            )}
            {error && <span>Error found</span>}
        </>
    )
}

export default Trailer
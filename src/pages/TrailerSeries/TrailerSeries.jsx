import React, { useEffect, useState } from 'react'
// import './trailer.css'
import tmdb from '../../utils/axios'
import backArrow from '../../assets/back_arrowIcon.png'
import { useNavigate, useParams } from 'react-router-dom'

function TrailerSeries() {
    const [isLoading, setIsLoading] = useState(true)
    const [trailer, setTrailer] = useState([])
    const [error, setError] = useState(null)

    const params = useParams()
    const idSeries = params.seriesId

    const fetchTrailer = async () => {
        try {
            setIsLoading(true)
            const { data } = await tmdb.get(`/tv/${idSeries}/videos`)
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
    const goToMovieDetail = (idSeries) => {
        navigate(`/seriesdetail/${idSeries}`)
    }

    return (
        <>
            <div className="flex justify-center items-center h-lvh sm:h-lvh xl:h-lvh 2xl:h-lvh">
                <img className='absolute top-5 left-5 w-12 cursor-pointer'
                    src={backArrow}
                    alt="backArrow"
                    onClick={() => goToMovieDetail(idSeries)}
                />
                {trailer.results?.find(trailer => trailer.type === "Trailer" || trailer.type === "Opening Credits") ? (
                    <iframe className='rounded-xl'
                        width="90%"
                        height="90%"
                        src={`https://www.youtube.com/embed/${trailer.results.find(trailer => trailer.type === "Trailer" || trailer.type === "Opening Credits").key
                            }`}
                        title="trailer"
                        frameBorder="0"
                        allowFullScreen
                    ></iframe>
                ) : (
                    <p>Trailer tidak tersedia</p>
                )}
            </div>
        </>
    )
}

export default TrailerSeries
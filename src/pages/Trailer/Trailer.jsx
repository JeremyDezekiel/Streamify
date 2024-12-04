import React, { useEffect, useState } from 'react'
// import './trailer.css'
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
            <div className="h-lvh flex justify-center items-center">
                <img className='absolute top-5 left-5 w-12 cursor-pointer'
                    src={backArrow}
                    alt=""
                    onClick={() => goToMovieDetail(idMovie)}
                />
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
                    <p>Trailer tidak tersedia</p>
                )}
            </div>
        </>
    )
}

export default Trailer
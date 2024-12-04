import React, { useEffect, useState } from 'react'
import './trailer.css'
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
        <div className='trailerPage'>
            <img src={backArrow} alt='' onClick={() => goToMovieDetail(idMovie)}/>
            {trailer.results?.map(trailer => {
                if (trailer.type = "Trailer")
                return (
                    <iframe key={trailer.id} width='90%' height='90%' src={`https://www.youtube.com/embed/${trailer.key}`} title='trailer' frameBorder='0' allowFullScreen></iframe>
                )
            })}
        </div>
        <div>{idMovie}</div>
        </>
    )
}

export default Trailer
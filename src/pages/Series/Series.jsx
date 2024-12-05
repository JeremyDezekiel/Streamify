import React, { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom"
// import './Series.css'
import CardsSeries from '../../components/CardsSeries/CardsSeries'
import tmdb from '../../utils/axios'
import { Carousel } from 'flowbite-react'

function Series() {
    const [isLoading, setIsLoading] = useState(true)
    const [series, setSeries] = useState([])
    const [error, setError] = useState (null)

    const fetchSeries = async () => {
        try {
            setIsLoading(true)
            const { data } = await tmdb.get(`/tv/airing_today`)
            setSeries(data)
        } catch (error) {
            console.log(error)
        } finally {
            setIsLoading(false)
        }
    }

    useEffect(() => {
        fetchSeries()
    }, [])

    const navigate = useNavigate()
    const goToSeriesDetail = (seriesId) => {
        navigate(`/seriesdetail/${seriesId}`)
    }

    return (
        <div className="mx-[3%]">
            <div className="h-56 sm:h-64 xl:h-80 2xl:h-[70vh]">
                <Carousel slideInterval={5000}>
                    {series.results?.map(serie => {
                        return (
                            <>
                                <img key={serie.id} src={`https://image.tmdb.org/t/p/original/${serie.backdrop_path}`} className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt={serie.name} onClick={() => goToSeriesDetail(serie.id)} />
                                <div className="absolute top-[50%] left-10">
                                    <h1 className="text-7xl font-bold">{serie.name}</h1>
                                    <p className="text-xl w-[50%] text-justify pt-10">{serie.overview}</p>
                                </div> 
                            </>
                        )
                    })}
                </Carousel>
            </div>
            <div>
                <CardsSeries/>
                <CardsSeries title={'Top Rated'} category={"top_rated"} />
                <CardsSeries title={'Airing Today'} category={"airing_today"} />
                <CardsSeries title={'On The Air'} category={"on_the_air"} />
            </div>
        </div>
    )
}

export default Series

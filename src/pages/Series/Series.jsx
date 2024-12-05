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
                    {series.results?.map(series => {
                        return (
                            <img key={series.id} src={`https://image.tmdb.org/t/p/original/${series.backdrop_path}`} alt={series.name} onClick={() => goToSeriesDetail(series.id)}/>
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

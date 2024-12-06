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
        <div className="mx-[6%]">
            <div className="h-56 sm:h-64 xl:h-80 2xl:h-[70vh]">
                <Carousel slideInterval={5000}>
                    {series.results?.map(serie => {
                        return (
                            <div key={serie.id}>
                            <img src={`https://image.tmdb.org/t/p/original/${serie.backdrop_path}`} alt={serie.name} onClick={() => goToSeriesDetail(serie.id)} />
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
                                    ">{serie.name}</h1>
                                    <p className="movieDescHero text-justify
                                                    text-sm text-transparent
                                                md:text-white
                                                xl:text-base
                                    ">{serie.overview}</p>
                                </div>
                            </div>
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

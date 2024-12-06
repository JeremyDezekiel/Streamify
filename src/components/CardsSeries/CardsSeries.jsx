import React, { useEffect, useState } from "react"
// import './CardsSeries.css'
import tmdb from '../../utils/axios'
import { useNavigate } from "react-router-dom"

function CardsSeries({ title, category }) {
    const [isLoading, setIsLoading] = useState(true)
    const [series, setSeries] = useState([])
    const [error, setError] = useState(null)

    const fetchSeries = async () => {
        try {
            setIsLoading(true)
            const { data } = await tmdb.get(`/tv/${category ? category : "popular"}`)
            setSeries(data)
        } catch (error) {
            console.error(error)
        } finally {
            setIsLoading(false)
        }
    }

    useEffect(() => {
        fetchSeries()
    }, [])

    const navigate = useNavigate()
    const goToSeriesDetail = (seriesID) => {
        navigate(`/seriesdetail/${seriesID}`)
    }

    return (
        <div className="mt-2 md:mt-3 lg:mt-4 xl:mt-5">
            <h2 className="mb-2 text-xl font-bold md:text-2xl md:mb-3 lg:text-3xl lg:mb-4 xl:text-4xl xl:mb-5">{title ? title : "Popular"}</h2>
            <div className="cardsList flex overflow-x-scroll gap-2 md:gap-3 lg:gap-4 xl:gap-3">
                {series.results?.map(series => {
                    return (
                        <div key={series.id}>
                            <img className="border border-transparent rounded-md  hover:border cursor-pointer hover:border-white min-w-[120px] md:min-w-[160px] lg:min-w-[167px] xl:min-w-[177px] 2xl:min-w-[215px]" src={`https://image.tmdb.org/t/p/w500/${series.poster_path}`} alt="" onClick={() => goToSeriesDetail(series.id)} />
                            <p className="font-semibold tracking-tight text-lg md:text-xl lg:text-2xl xl:text-2xl 2xl:text-2xl">{series.original_name}</p>
                            <span className="font-normal text-sm md:text-base lg:text-lg xl:text-lg 2xl:text-lg">{series.first_air_date}</span>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default CardsSeries
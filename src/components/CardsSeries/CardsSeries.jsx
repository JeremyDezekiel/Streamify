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
        <div id="cards" className="mt-10">
            <h2 className="mb-2 text-2xl">{title ? title : "Popular"}</h2>
            <div className="cardsList flex gap-3 overflow-x-scroll">
                {series.results?.map(series => {
                    return (
                        <div key={series.id}>
                            <img className="min-w-72 min-h-[431px] rounded-md border border-transparent hover:border cursor-pointer hover:border-white" src={`https://image.tmdb.org/t/p/w500/${series.poster_path}`} alt="" onClick={() => goToSeriesDetail(series.id)} />
                            <p className="text-2xl font-bold tracking-tight">{series.original_name}</p>
                            <span className="font-normal">{series.first_air_date}</span>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default CardsSeries
import React, { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom"
import CardsTvShows from '../../components/CardsTvShows/CardsTvShows'
import tmdb from '../../utils/axios'
import { Carousel } from 'flowbite-react'

function TvShows() {
    const [isLoading, setIsLoading] = useState(true)
    const [series, setSeries] = useState([])
    const [error, setError] = useState(null)

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
    const goToTvShowsDetail = (seriesId) => {
        navigate(`/tvshowsdetail/${seriesId}`)
    }

    return (
        <div className="mx-[6%]">
            {isLoading ? (
                <div className="flex justify-center items-center min-h-screen">
                    <div className="w-16 h-16 border-4 border-t-4 border-blue-500 border-solid rounded-full animate-spin"></div>
                </div>
            ) : (
                <>
                    <div className="h-56 sm:h-64 xl:h-80 2xl:h-[70vh]">
                        <Carousel slideInterval={5000}>
                            {series.results?.map(serie => {
                                return (
                                    <div key={serie.id}>
                                        <img src={`https://image.tmdb.org/t/p/original/${serie.backdrop_path}`} alt={serie.name} onClick={() => goToTvShowsDetail(serie.id)} />
                                        <div className="absolute top-[130px] left-4 md:top-[210px] lg:top-[275px] xl:top-[340px] 2xl:top-[450px] 2xl:left-10">
                                            <h1 className="font-bold text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl 2xl:mb-5">{serie.name}</h1>
                                            <p className="movieDescHero text-justify text-sm text-transparent md:text-white xl:text-base">{serie.overview}</p>
                                        </div>
                                    </div>
                                )
                            })}
                        </Carousel>
                    </div>
                    <div>
                        <CardsTvShows />
                        <CardsTvShows title={'Top Rated TV Shows'} category={"top_rated"} />
                        <CardsTvShows title={'Airing Today TV Shows'} category={"airing_today"} />
                        <CardsTvShows title={'On The Air TV Shows'} category={"on_the_air"} />
                    </div>
                </>
            )}
            {error && <span>Error found</span>}
        </div>
    )
}

export default TvShows

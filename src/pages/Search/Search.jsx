import React, { useEffect, useState } from 'react'
import tmdb from '../../utils/axios'
import { useNavigate } from 'react-router-dom'

function Search() {
    const [isLoading, setIsLoading] = useState(true)
    const [trending, setTrending] = useState([])
    const [error, setError] = useState(null)
    const [search, setSearch] = useState('')
    const [searchResults, setSearchResults] = useState([])

    const fetchTrending = async () => {
        try {
            setIsLoading(true)
            const { data } = await tmdb.get(`/trending/movie/day`)
            setTrending(data)
        } catch (error) {
            console.log(error)
        } finally {
            setIsLoading(false)
        }
    }

    const fetchSearchResults = async (search) => {
        try {
            setIsLoading(true)
            const { data } = await tmdb.get(`/search/movie?query=${search}`)
            setSearchResults(data)
        } catch (error) {
            console.log(error)
        } finally {
            setIsLoading(false)
        }
    }

    useEffect(() => {
        const debounceTimeout = setTimeout(() => {
            fetchSearchResults(search)
        }, 500)
        return () => clearTimeout(debounceTimeout)

    }, [search])

    useEffect(() => {
        fetchTrending()
    }, [])

    const navigate = useNavigate()
    const goToMovieDetail = (movieId) => {
        navigate(`/moviedetail/${movieId}`)
    }
    return (
        <div className='pt-2 px-[6%]'>
            <div>
                <input className='w-full h-10 lg:h-12 rounded-md px-1 text-xl bg-gray-600' type='text' placeholder='Find movies, shows, and more' onChange={(e) => setSearch(e.target.value)} />
            </div>
            <div>
                {isLoading &&
                    <div className="flex justify-center items-center min-h-max">
                        <div className="w-16 h-16 border-4 border-t-4 border-blue-500 border-solid rounded-full animate-spin"></div>
                    </div>}
                {error && <span>Error found</span>}
                {search ? (
                    <div className='pt-5'>
                        <div>
                            <div className='grid grid-cols-3 gap-2 lg:grid-cols-4 2xl:grid-cols-6'>
                                {searchResults.results?.map(searchResults => {
                                    return (
                                        <>
                                            {isLoading ? (
                                                <div className="flex justify-center items-center min-h-max">
                                                    <div className="w-16 h-16 border-4 border-t-4 border-blue-500 border-solid rounded-full animate-spin"></div>
                                                </div>
                                            ) : (
                                                <div key={searchResults.id}>
                                                    <img className='w-72 rounded border border-transparent cursor-pointer hover:border hover:border-white h-full' src={`https://image.tmdb.org/t/p/w500/${searchResults.poster_path}`} alt={searchResults.name} onClick={() => goToMovieDetail(searchResults.id)} />
                                                </div>
                                            )}
                                        </>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                ) : (
                    <div>
                        <h2 className='mb-2 text-2xl md:text-3xl'>Trending</h2>
                        <div className='grid grid-cols-3 gap-3 lg:grid-cols-4 2xl:grid-cols-6'>
                            {trending.results?.map(trending => {
                                return (
                                    <>
                                        {isLoading ? (
                                            <div className="flex justify-center items-center min-h-screen">
                                                <div className="w-16 h-16 border-4 border-t-4 border-blue-500 border-solid rounded-full animate-spin"></div>
                                            </div>
                                        ) : (
                                            <div key={trending.id}>
                                                <img className='w-72 rounded-lg border border-transparent cursor-pointer hover:border hover:border-white h-full' src={`https://image.tmdb.org/t/p/w500/${trending.poster_path}`} alt={trending.name} onClick={() => goToMovieDetail(trending.id)} />
                                            </div>
                                        )}
                                    </>
                                )
                            })}
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Search
import React, { useEffect, useState } from 'react'
import './Search.css'
import Cards from '../../components/Cards/Cards'
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
            const { data } = await tmdb.get(`/trending/all/day`)
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
        <div className='searchContain'>
            <div className='search'>
                <input type='text' placeholder='Find movies, shows, and more' onChange={(e) => setSearch(e.target.value)}/>
            </div>
            <div>
                <div className='contentSearch'>
                    <div className='cardsSearch'>
                        <div className='cardsShows'>
                            {searchResults.results?.map(searchResults => {
                                return (
                                    <div key={searchResults.id} className='showCards'>
                                        <img src={`https://image.tmdb.org/t/p/w500/${searchResults.poster_path}`} alt='' onClick={() => goToMovieDetail(searchResults.id)} />
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
                <div className='searchDefault'>
                    <h2>Trending</h2>
                    <div className='cardsShows'>
                        {trending.results?.map(trending => {
                            return (
                                <div key={trending.id} className='showCards'>
                                    <img src={`https://image.tmdb.org/t/p/w500/${trending.poster_path}`} alt='' onClick={() => goToMovieDetail(trending.id)} />
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Search